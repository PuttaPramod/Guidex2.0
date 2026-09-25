import {
  AfterViewInit,
  Component,
  inject,
  signal
} from '@angular/core';

import {
  isPlatformBrowser,
  NgIf
} from '@angular/common';

import {
  PLATFORM_ID
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

import {
  Router,
  RouterLink
} from '@angular/router';

import {
  Auth,
  SignupData
} from '../../services/auth';


declare global {
  interface Window {
    google?: any;
  }
}


@Component({
  selector: 'app-signup',
  standalone: true,

  imports: [
    NgIf,
    FormsModule,
    RouterLink
  ],

  templateUrl: './signup.html',
  styleUrl: './signup.css'
})


export class Signup implements AfterViewInit {

  private readonly auth = inject(Auth);

  private readonly router = inject(Router);

  private readonly platformId = inject(PLATFORM_ID);


  name = '';

  email = '';

  password = '';

  confirmPassword = '';


  readonly isLoading = signal(false);

  readonly isGoogleLoading = signal(false);

  readonly errorMessage = signal('');

  readonly successMessage = signal('');


  /*
  |--------------------------------------------------------------------------
  | GOOGLE CLIENT ID
  |--------------------------------------------------------------------------
  |
  | Use the same Google OAuth Web Client ID
  | that is working on the Login page.
  |
  | Do NOT put the Google Client Secret here.
  |
  */

  private readonly googleClientId =
    '255841314392-o3td38ai66rhoalka9qllsbeh71ufsnk.apps.googleusercontent.com';


  /*
  |--------------------------------------------------------------------------
  | CHECK EXISTING LOGIN SESSION
  |--------------------------------------------------------------------------
  */

  constructor() {

    if (this.auth.isLoggedIn()) {

      this.router.navigate([
        '/dashboard'
      ]);

    }

  }


  /*
  |--------------------------------------------------------------------------
  | INITIALIZE GOOGLE SIGN UP
  |--------------------------------------------------------------------------
  */

  ngAfterViewInit(): void {

    /*
     * Angular SSR runs this lifecycle hook on the server too.
     *
     * window, document and Google Identity Services
     * are available only inside the browser.
     */

    if (!isPlatformBrowser(this.platformId)) {

      return;

    }


    this.initializeGoogleSignup();

  }


  private initializeGoogleSignup(): void {

    /*
     * Make sure Google Client ID exists.
     */

    if (!this.googleClientId) {

      console.warn(
        'Google Sign Up: Google Client ID is missing.'
      );

      return;

    }


    let attempts = 0;

    const maxAttempts = 30;


    const initialize = () => {

      attempts++;


      /*
       * Check whether Google Identity Services
       * has loaded.
       */

      if (
        window.google?.accounts?.id
      ) {

        try {

          /*
           * Initialize Google Identity Services.
           */

          window.google.accounts.id.initialize({

            client_id:
              this.googleClientId,

            callback: (response: any) => {

              this.handleGoogleCredential(
                response?.credential
              );

            }

          });


          /*
           * Find Google button container.
           */

          const googleButton =
            document.getElementById(
              'google-signup-button'
            );


          if (!googleButton) {

            console.warn(
              'Google Sign Up: Button container not found.'
            );

            return;

          }


          /*
           * Remove anything previously rendered.
           */

          googleButton.innerHTML = '';


          /*
           * Render Google button.
           */

          window.google.accounts.id.renderButton(

            googleButton,

            {
              theme: 'outline',
              size: 'large',
              width: 360,
              text: 'continue_with',
              shape: 'rectangular',
              logo_alignment: 'left'
            }

          );


          console.log(
            '✅ Google Sign Up button initialized successfully.'
          );

        }

        catch (error) {

          console.error(
            'Google Sign Up initialization failed:',
            error
          );

        }


        return;

      }


      /*
       * Google script has not loaded yet.
       * Try again.
       */

      if (attempts < maxAttempts) {

        setTimeout(
          initialize,
          250
        );

      }

      else {

        console.error(
          'Google Identity Services could not be loaded.'
        );

      }

    };


    initialize();

  }


  /*
  |--------------------------------------------------------------------------
  | GOOGLE CREDENTIAL
  |--------------------------------------------------------------------------
  */

  private handleGoogleCredential(
    credential: string | undefined
  ): void {

    if (!credential) {

      this.errorMessage.set(
        'Google authentication did not return a valid credential.'
      );

      return;

    }


    this.errorMessage.set('');

    this.successMessage.set('');

    this.isGoogleLoading.set(true);


    /*
     * The same backend Google endpoint handles both:
     *
     * 1. Existing Google users -> Login
     * 2. New Google users      -> Create account
     *
     */

    this.auth.googleLogin(
      credential
    ).subscribe({

      /*
       * SUCCESS
       */

      next: (response) => {

        this.isGoogleLoading.set(false);


        if (!response.success) {

          this.errorMessage.set(

            response.message ||

            'Unable to create your account with Google.'

          );

          return;

        }


        this.successMessage.set(

          response.message ||

          'Google account created successfully.'

        );


        setTimeout(() => {

          this.router.navigate([
            '/dashboard'
          ]);

        }, 700);

      },


      /*
       * ERROR
       */

      error: (error) => {

        this.isGoogleLoading.set(false);


        this.errorMessage.set(

          error?.error?.message ||

          'Unable to create your account with Google. Please try again.'

        );

      }

    });

  }


  /*
  |--------------------------------------------------------------------------
  | CREATE A NEW ACCOUNT
  |--------------------------------------------------------------------------
  */

  signup(): void {

    this.errorMessage.set('');

    this.successMessage.set('');


    const name =
      this.name.trim();

    const email =
      this.email.trim().toLowerCase();

    const password =
      this.password;

    const confirmPassword =
      this.confirmPassword;


    /*
     * NAME VALIDATION
     */

    if (!name) {

      this.errorMessage.set(
        'Please enter your name.'
      );

      return;

    }


    if (name.length < 2) {

      this.errorMessage.set(
        'Name must contain at least 2 characters.'
      );

      return;

    }


    /*
     * EMAIL VALIDATION
     */

    if (!email) {

      this.errorMessage.set(
        'Please enter your email address.'
      );

      return;

    }


    if (!this.isValidEmail(email)) {

      this.errorMessage.set(
        'Please enter a valid email address.'
      );

      return;

    }


    /*
     * PASSWORD VALIDATION
     */

    if (!password) {

      this.errorMessage.set(
        'Please create a password.'
      );

      return;

    }


    if (password.length < 6) {

      this.errorMessage.set(
        'Password must contain at least 6 characters.'
      );

      return;

    }


    /*
     * CONFIRM PASSWORD VALIDATION
     */

    if (!confirmPassword) {

      this.errorMessage.set(
        'Please confirm your password.'
      );

      return;

    }


    if (password !== confirmPassword) {

      this.errorMessage.set(
        'Passwords do not match.'
      );

      return;

    }


    /*
     * START SIGNUP
     */

    this.isLoading.set(true);


    const signupData: SignupData = {

      name,

      email,

      password

    };


    this.auth.signup(
      signupData
    ).subscribe({

      /*
       * SUCCESS
       */

      next: (response) => {

        this.isLoading.set(false);


        if (!response.success) {

          this.errorMessage.set(

            response.message ||

            'Unable to create your account.'

          );

          return;

        }


        this.successMessage.set(

          response.message ||

          'Account created successfully.'

        );


        setTimeout(() => {

          this.router.navigate([
            '/login'
          ]);

        }, 700);

      },


      /*
       * ERROR
       */

      error: (error) => {

        this.isLoading.set(false);


        this.errorMessage.set(

          error?.error?.message ||

          'Unable to create your account. Please try again.'

        );

      }

    });

  }


  /*
  |--------------------------------------------------------------------------
  | CLEAR ERROR MESSAGE
  |--------------------------------------------------------------------------
  */

  clearError(): void {

    this.errorMessage.set('');

  }


  /*
  |--------------------------------------------------------------------------
  | CLEAR SUCCESS MESSAGE
  |--------------------------------------------------------------------------
  */

  clearSuccess(): void {

    this.successMessage.set('');

  }


  /*
  |--------------------------------------------------------------------------
  | EMAIL VALIDATION
  |--------------------------------------------------------------------------
  */

  private isValidEmail(
    email: string
  ): boolean {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email
    );

  }

}