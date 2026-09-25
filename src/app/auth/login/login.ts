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
  LoginData
} from '../../services/auth';


declare global {
  interface Window {
    google?: any;
  }
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})


export class Login implements AfterViewInit {

  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);


  email = '';
  password = '';


  readonly isLoading = signal(false);
  readonly isGoogleLoading = signal(false);
  readonly errorMessage = signal('');
  readonly successMessage = signal('');


  /*
  |--------------------------------------------------------------------------
  | GOOGLE CLIENT ID
  |--------------------------------------------------------------------------
  |
  | This is your Google OAuth Web Client ID.
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
  | INITIALIZE GOOGLE LOGIN
  |--------------------------------------------------------------------------
  */

  ngAfterViewInit(): void {

    /*
     * Angular SSR runs this component on the server as well.
     *
     * Google Identity Services requires browser APIs such as
     * window and document.
     *
     * Therefore Google Login must only initialize in the browser.
     */

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.initializeGoogleLogin();

  }


  private initializeGoogleLogin(): void {

    /*
     * Extra browser safety check.
     */

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }


    /*
     * Make sure Client ID exists.
     */

    if (!this.googleClientId) {

      console.warn(
        'Google Login: Google Client ID is missing.'
      );

      return;

    }


    let attempts = 0;
    const maxAttempts = 30;


    const initialize = () => {

      attempts++;


      /*
       * Make sure browser APIs are available.
       */

      if (
        typeof window === 'undefined' ||
        typeof document === 'undefined'
      ) {
        return;
      }


      /*
       * Check whether Google Identity Services
       * has finished loading.
       */

      if (
        window.google?.accounts?.id
      ) {

        try {

          /*
           * Initialize Google Identity Services.
           */

          window.google.accounts.id.initialize({

            client_id: this.googleClientId,

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
              'google-login-button'
            );


          if (!googleButton) {

            console.warn(
              'Google Login: Button container not found.'
            );

            return;

          }


          /*
           * Remove anything previously rendered.
           */

          googleButton.innerHTML = '';


          /*
           * Render official Google button.
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
            '✅ Google Login button initialized successfully.'
          );

        }

        catch (error) {

          console.error(
            'Google Login initialization failed:',
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

        window.setTimeout(
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
            'Unable to login with Google.'
          );

          return;

        }


        this.successMessage.set(
          response.message ||
          'Google login successful.'
        );


        setTimeout(() => {

          this.router.navigate([
            '/dashboard'
          ]);

        }, 500);

      },


      /*
       * ERROR
       */

      error: (error) => {

        this.isGoogleLoading.set(false);


        this.errorMessage.set(
          error?.error?.message ||
          'Unable to login with Google. Please try again.'
        );

      }

    });

  }


  /*
  |--------------------------------------------------------------------------
  | NORMAL EMAIL/PASSWORD LOGIN
  |--------------------------------------------------------------------------
  */

  login(): void {

    this.errorMessage.set('');
    this.successMessage.set('');


    const email =
      this.email.trim();

    const password =
      this.password;


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
        'Please enter your password.'
      );

      return;

    }


    /*
     * START LOGIN
     */

    this.isLoading.set(true);


    const loginData: LoginData = {

      email,

      password

    };


    this.auth.login(
      loginData
    ).subscribe({

      /*
       * SUCCESS
       */

      next: (response) => {

        this.isLoading.set(false);


        if (!response.success) {

          this.errorMessage.set(
            response.message ||
            'Unable to login.'
          );

          return;

        }


        this.successMessage.set(
          response.message ||
          'Login successful.'
        );


        setTimeout(() => {

          this.router.navigate([
            '/dashboard'
          ]);

        }, 500);

      },


      /*
       * ERROR
       */

      error: (error) => {

        this.isLoading.set(false);


        this.errorMessage.set(
          error?.error?.message ||
          'Unable to login. Please check your email and password.'
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