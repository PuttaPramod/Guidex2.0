import {
  Component,
  inject,
  signal
} from '@angular/core';

import { NgIf } from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';

import {
  Auth
} from '../../services/auth';


@Component({
  selector: 'app-reset-password',
  standalone: true,

  imports: [
    NgIf,
    FormsModule,
    RouterLink
  ],

  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css'
})


export class ResetPassword {

  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);


  /*
  |--------------------------------------------------------------------------
  | FORM DATA
  |--------------------------------------------------------------------------
  */

  password = '';
  confirmPassword = '';


  /*
  |--------------------------------------------------------------------------
  | RESET TOKEN
  |--------------------------------------------------------------------------
  */

  readonly resetToken = signal('');


  /*
  |--------------------------------------------------------------------------
  | UI STATE
  |--------------------------------------------------------------------------
  */

  readonly isLoading = signal(false);

  readonly errorMessage = signal('');
  readonly successMessage = signal('');


  /*
  |--------------------------------------------------------------------------
  | CONSTRUCTOR
  |--------------------------------------------------------------------------
  */

  constructor() {

    const token =
      this.route.snapshot.paramMap.get('token');


    if (token) {

      this.resetToken.set(token);

    } else {

      this.errorMessage.set(
        'Password reset token is missing or invalid.'
      );

    }

  }


  /*
  |--------------------------------------------------------------------------
  | RESET PASSWORD
  |--------------------------------------------------------------------------
  */

  resetPassword(): void {

    this.errorMessage.set('');
    this.successMessage.set('');


    const token =
      this.resetToken();

    const password =
      this.password;

    const confirmPassword =
      this.confirmPassword;


    /*
     * TOKEN VALIDATION
     */

    if (!token) {

      this.errorMessage.set(
        'Password reset token is missing or invalid.'
      );

      return;

    }


    /*
     * PASSWORD REQUIRED
     */

    if (!password) {

      this.errorMessage.set(
        'Please enter your new password.'
      );

      return;

    }


    /*
     * PASSWORD LENGTH
     */

    if (password.length < 6) {

      this.errorMessage.set(
        'Password must contain at least 6 characters.'
      );

      return;

    }


    /*
     * CONFIRM PASSWORD REQUIRED
     */

    if (!confirmPassword) {

      this.errorMessage.set(
        'Please confirm your new password.'
      );

      return;

    }


    /*
     * PASSWORD MATCH
     */

    if (password !== confirmPassword) {

      this.errorMessage.set(
        'Passwords do not match.'
      );

      return;

    }


    /*
     * START REQUEST
     */

    this.isLoading.set(true);


    this.auth.resetPassword(
      token,
      password
    ).subscribe({

      /*
       * SUCCESS
       */

      next: (response) => {

        this.isLoading.set(false);


        /*
         * Backend returned an unsuccessful response
         */

        if (!response.success) {

          this.errorMessage.set(
            response.message ||
            'Unable to reset your password.'
          );

          return;

        }


        /*
         * PASSWORD RESET SUCCESSFUL
         */

        this.successMessage.set(
          response.message ||
          'Password reset successfully. Please sign in with your new password.'
        );


        /*
         * Clear the form
         */

        this.password = '';
        this.confirmPassword = '';


        /*
         * Navigate to LOGIN
         *
         * The backend does NOT automatically
         * authenticate the user after reset.
         */

        setTimeout(() => {

          this.router.navigate(
            ['/login'],
            {
              replaceUrl: true
            }
          );

        }, 1000);

      },


      /*
       * ERROR
       */

      error: (error) => {

        this.isLoading.set(false);


        this.errorMessage.set(

          error?.error?.message ||

          'Unable to reset your password. The reset link may have expired.'

        );

      }

    });

  }


  /*
  |--------------------------------------------------------------------------
  | CLEAR ERROR
  |--------------------------------------------------------------------------
  */

  clearError(): void {

    this.errorMessage.set('');

  }


  /*
  |--------------------------------------------------------------------------
  | CLEAR SUCCESS
  |--------------------------------------------------------------------------
  */

  clearSuccess(): void {

    this.successMessage.set('');

  }

}