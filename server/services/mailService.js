const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: process.env.MAIL_SECURE === 'true',

  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});


const sendPasswordResetEmail = async (email, resetUrl) => {

  const mailOptions = {
    from: `"Guidex 2.0" <${process.env.MAIL_USER}>`,

    to: email,

    subject: 'Reset your Guidex password',

    text: `
Hello,

We received a request to reset your Guidex 2.0 password.

Use the link below to create a new password:

${resetUrl}

This password reset link will expire in 15 minutes.

If you did not request a password reset, you can safely ignore this email.

Regards,
Guidex 2.0
`,

    html: `
      <div style="
        margin: 0;
        padding: 40px 20px;
        background: #f6f7fb;
        font-family: Arial, Helvetica, sans-serif;
      ">

        <div style="
          max-width: 560px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 15px 45px rgba(35, 45, 80, 0.08);
        ">

          <div style="
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: linear-gradient(135deg, #635bff, #4f8cff);
            color: #ffffff;
            font-size: 22px;
            font-weight: 800;
            margin-bottom: 24px;
          ">
            G
          </div>

          <h1 style="
            margin: 0 0 12px;
            color: #151722;
            font-size: 26px;
          ">
            Reset your password
          </h1>

          <p style="
            margin: 0 0 24px;
            color: #5f6473;
            font-size: 15px;
            line-height: 1.7;
          ">
            We received a request to reset your Guidex 2.0 password.
            Click the button below to create a new password.
          </p>

          <a
            href="${resetUrl}"
            style="
              display: inline-block;
              padding: 14px 24px;
              border-radius: 12px;
              background: linear-gradient(135deg, #635bff, #5047e5);
              color: #ffffff;
              text-decoration: none;
              font-size: 14px;
              font-weight: 700;
            "
          >
            Reset Password →
          </a>

          <p style="
            margin: 28px 0 8px;
            color: #858b9a;
            font-size: 12px;
            line-height: 1.6;
          ">
            This link will expire in 15 minutes.
          </p>

          <p style="
            margin: 0;
            color: #858b9a;
            font-size: 12px;
            line-height: 1.6;
          ">
            If you did not request a password reset, you can safely
            ignore this email.
          </p>

          <div style="
            height: 1px;
            margin: 28px 0 20px;
            background: #eeeeF3;
          "></div>

          <p style="
            margin: 0;
            color: #a0a5b2;
            font-size: 11px;
          ">
            © Guidex 2.0
          </p>

        </div>

      </div>
    `
  };


  await transporter.sendMail(mailOptions);
};


const verifyMailConnection = async () => {

  try {

    await transporter.verify();

    console.log('✅ Email service connected successfully');

    return true;

  } catch (error) {

    console.error(
      '❌ Email service connection failed:',
      error.message
    );

    return false;

  }

};


module.exports = {
  sendPasswordResetEmail,
  verifyMailConnection
};