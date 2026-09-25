const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { OAuth2Client } = require('google-auth-library');

const User = require('../models/User');

const {
  sendPasswordResetEmail
} = require('../services/mailService');

const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);


/*
|--------------------------------------------------------------------------
| Helper: Create JWT
|--------------------------------------------------------------------------
*/

const createToken = (userId) => {
  return jwt.sign(
    {
      userId
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d'
    }
  );
};


/*
|--------------------------------------------------------------------------
| Helper: Send Authentication Cookie
|--------------------------------------------------------------------------
*/

const sendAuthCookie = (res, token) => {
  res.cookie('guidex_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite:
      process.env.NODE_ENV === 'production'
        ? 'none'
        : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
};


/*
|--------------------------------------------------------------------------
| Signup
|--------------------------------------------------------------------------
*/

const signup = async (req, res) => {
  try {

    const {
      name,
      email,
      password
    } = req.body;


    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and password are required.'
      });
    }


    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must contain at least 6 characters.'
      });
    }


    const normalizedEmail =
      email.trim().toLowerCase();


    const existingUser = await User.findOne({
      email: normalizedEmail
    });


    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'An account with this email already exists.'
      });
    }


    const hashedPassword =
      await bcrypt.hash(password, 12);


    const user = await User.create({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      authProvider: 'local',
      isVerified: false
    });


    const token =
      createToken(user._id.toString());


    sendAuthCookie(res, token);


    return res.status(201).json({
      success: true,
      message: 'Account created successfully.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        authProvider: user.authProvider,
        isVerified: user.isVerified
      }
    });

  } catch (error) {

    console.error(
      'Signup error:',
      error
    );

    return res.status(500).json({
      success: false,
      message: 'Unable to create your account.'
    });

  }
};


/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
*/

const login = async (req, res) => {
  try {

    const {
      email,
      password
    } = req.body;


    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required.'
      });
    }


    const normalizedEmail =
      email.trim().toLowerCase();


    const user = await User.findOne({
      email: normalizedEmail
    });


    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }


    if (!user.password) {
      return res.status(400).json({
        success: false,
        message:
          'This account uses Google login. Please continue with Google.'
      });
    }


    const passwordMatches =
      await bcrypt.compare(
        password,
        user.password
      );


    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.'
      });
    }


    const token =
      createToken(user._id.toString());


    sendAuthCookie(res, token);


    return res.status(200).json({
      success: true,
      message: 'Login successful.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        authProvider: user.authProvider,
        isVerified: user.isVerified
      }
    });

  } catch (error) {

    console.error(
      'Login error:',
      error
    );

    return res.status(500).json({
      success: false,
      message: 'Unable to login.'
    });

  }
};


/*
|--------------------------------------------------------------------------
| Google Login
|--------------------------------------------------------------------------
*/

const googleLogin = async (req, res) => {
  try {

    const {
      credential
    } = req.body;


    if (!credential) {
      return res.status(400).json({
        success: false,
        message: 'Google credential is required.'
      });
    }


    if (!process.env.GOOGLE_CLIENT_ID) {
      return res.status(500).json({
        success: false,
        message:
          'Google authentication is not configured on the server.'
      });
    }


    const ticket =
      await googleClient.verifyIdToken({
        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID
      });


    const payload =
      ticket.getPayload();


    if (!payload || !payload.email) {
      return res.status(401).json({
        success: false,
        message:
          'Unable to verify Google account.'
      });
    }


    const email =
      payload.email.toLowerCase();


    let user =
      await User.findOne({
        email
      });


    if (!user) {

      user = await User.create({
        name:
          payload.name ||
          'Google User',

        email,

        password: null,

        profileImage:
          payload.picture || '',

        authProvider: 'google',

        googleId:
          payload.sub,

        isVerified:
          Boolean(payload.email_verified)
      });

    } else {

      user.name =
        payload.name ||
        user.name;

      user.profileImage =
        payload.picture ||
        user.profileImage;

      user.googleId =
        payload.sub;

      user.isVerified =
        Boolean(payload.email_verified);


      if (!user.password) {
        user.authProvider = 'google';
      }


      await user.save();
    }


    const token =
      createToken(user._id.toString());


    sendAuthCookie(res, token);


    return res.status(200).json({
      success: true,
      message: 'Google login successful.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        authProvider: user.authProvider,
        isVerified: user.isVerified
      }
    });

  } catch (error) {

    console.error(
      'Google login error:',
      error
    );

    return res.status(401).json({
      success: false,
      message:
        'Google authentication failed.'
    });

  }
};


/*
|--------------------------------------------------------------------------
| Forgot Password
|--------------------------------------------------------------------------
*/

const forgotPassword = async (req, res) => {
  try {

    const {
      email
    } = req.body;


    /*
     * Validate email input
     */

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required.'
      });
    }


    const normalizedEmail =
      email.trim().toLowerCase();


    /*
     * Find account
     */

    const user =
      await User.findOne({
        email: normalizedEmail
      });


    /*
     * Email does not exist
     */

    if (!user) {
      return res.status(404).json({
        success: false,
        message:
          'No account was found with this email address.'
      });
    }


    /*
     * Google-only account
     */

    if (!user.password) {
      return res.status(400).json({
        success: false,
        message:
          'This account uses Google login. Please continue with Google.'
      });
    }


    /*
     * Generate secure random reset token
     */

    const resetToken =
      crypto.randomBytes(32).toString('hex');


    /*
     * Hash token before storing it
     */

    const hashedResetToken =
      crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');


    /*
     * Store hashed token and expiry
     */

    user.resetPasswordToken =
      hashedResetToken;

    user.resetPasswordExpires =
      new Date(
        Date.now() +
        15 * 60 * 1000
      );


    await user.save();


    /*
     * Build secure password reset URL
     */

    const frontendUrl =
      process.env.FRONTEND_URL ||
      'http://localhost:4200';


    const resetUrl =
      `${frontendUrl}/reset-password/${resetToken}`;


    /*
     * Send reset email
     */

    try {

      await sendPasswordResetEmail(
        user.email,
        resetUrl
      );

    } catch (emailError) {

      console.error(
        'Password reset email error:',
        emailError
      );


      /*
       * Remove the token if the email
       * could not be delivered.
       */

      user.resetPasswordToken = null;

      user.resetPasswordExpires = null;

      await user.save();


      return res.status(500).json({
        success: false,
        message:
          'Unable to send password reset email. Please try again.'
      });

    }


    /*
     * Email sent successfully
     */

    return res.status(200).json({
      success: true,
      message:
        'Password reset instructions have been sent to your email.'
    });

  } catch (error) {

    console.error(
      'Forgot password error:',
      error
    );

    return res.status(500).json({
      success: false,
      message:
        'Unable to process password reset request.'
    });

  }
};


/*
|--------------------------------------------------------------------------
| Reset Password
|--------------------------------------------------------------------------
*/

const resetPassword = async (req, res) => {
  try {

    const {
      token
    } = req.params;

    const {
      password
    } = req.body;


    if (!token) {
      return res.status(400).json({
        success: false,
        message:
          'Reset token is required.'
      });
    }


    if (!password) {
      return res.status(400).json({
        success: false,
        message:
          'New password is required.'
      });
    }


    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message:
          'Password must contain at least 6 characters.'
      });
    }


    /*
     * Hash the token received
     * from the email URL.
     */

    const hashedToken =
      crypto
        .createHash('sha256')
        .update(token)
        .digest('hex');


    /*
     * Find user with a valid,
     * non-expired reset token.
     */

    const user =
      await User.findOne({
        resetPasswordToken:
          hashedToken,

        resetPasswordExpires: {
          $gt: new Date()
        }
      });


    if (!user) {
      return res.status(400).json({
        success: false,
        message:
          'Reset token is invalid or has expired.'
      });
    }


    /*
     * Update password
     */

    user.password =
      await bcrypt.hash(
        password,
        12
      );


    user.authProvider = 'local';


    /*
     * Invalidate reset token
     */

    user.resetPasswordToken = null;

    user.resetPasswordExpires = null;


    await user.save();


    /*
     * Do NOT automatically authenticate
     * the user after password reset.
     *
     * The user must manually sign in
     * using the new password.
     */

    return res.status(200).json({
      success: true,
      message:
        'Password reset successfully. Please sign in with your new password.'
    });

  } catch (error) {

    console.error(
      'Reset password error:',
      error
    );

    return res.status(500).json({
      success: false,
      message:
        'Unable to reset your password.'
    });

  }
};


/*
|--------------------------------------------------------------------------
| Get Current User
|--------------------------------------------------------------------------
*/

const getCurrentUser = async (req, res) => {
  try {

    const user =
      await User.findById(
        req.user.userId
      ).select(
        '-password -resetPasswordToken -resetPasswordExpires'
      );


    if (!user) {
      return res.status(404).json({
        success: false,
        message:
          'User not found.'
      });
    }


    return res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profileImage: user.profileImage,
        authProvider: user.authProvider,
        isVerified: user.isVerified,
        createdAt: user.createdAt
      }
    });

  } catch (error) {

    console.error(
      'Get current user error:',
      error
    );

    return res.status(500).json({
      success: false,
      message:
        'Unable to fetch user information.'
    });

  }
};


/*
|--------------------------------------------------------------------------
| Logout
|--------------------------------------------------------------------------
*/

const logout = async (req, res) => {
  try {

    res.clearCookie(
      'guidex_token',
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === 'production',

        sameSite:
          process.env.NODE_ENV === 'production'
            ? 'none'
            : 'lax'
      }
    );


    return res.status(200).json({
      success: true,
      message:
        'Logged out successfully.'
    });

  } catch (error) {

    console.error(
      'Logout error:',
      error
    );

    return res.status(500).json({
      success: false,
      message:
        'Unable to logout.'
    });

  }
};


/*
|--------------------------------------------------------------------------
| Export Controllers
|--------------------------------------------------------------------------
*/

module.exports = {
  signup,
  login,
  googleLogin,
  forgotPassword,
  resetPassword,
  getCurrentUser,
  logout
};