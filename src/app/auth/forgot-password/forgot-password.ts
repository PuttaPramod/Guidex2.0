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
  RouterLink
} from '@angular/router';

import {
  Auth
} from '../../services/auth';


@Component({
  selector: 'app-forgot-password',

  standalone: true,

  imports: [
    NgIf,
    FormsModule,
    RouterLink
  ],

  templateUrl: './forgot-password.html',

  styleUrl: './forgot-password.css'
})


export class ForgotPassword {

  private readonly auth = inject(Auth);


  email = '';


  readonly isLoading = signal(false);

  readonly errorMessage = signal('');

  readonly successMessage = signal('');


  /*
  |--------------------------------------------------------------------------
  | SEND PASSWORD RESET REQUEST
  |--------------------------------------------------------------------------
  |
  | The backend sends the password reset link
  | directly to the user's email.
  |
  | No reset token is received by Angular.
  |
  */

  forgotPassword(): void {

    this.errorMessage.set('');

    this.successMessage.set('');


    const email =
      this.email.trim().toLowerCase();


    /*
     * EMAIL REQUIRED
     */

    if (!email) {

      this.errorMessage.set(
        'Please enter your email address.'
      );

      return;

    }


    /*
     * EMAIL FORMAT
     */

    if (!this.isValidEmail(email)) {

      this.errorMessage.set(
        'Please enter a valid email address.'
      );

      return;

    }


    /*
     * START REQUEST
     */

    this.isLoading.set(true);


    this.auth
      .forgotPassword(email)
      .subscribe({

        /*
         * SUCCESS
         */

        next: (response) => {

          this.isLoading.set(false);


          if (!response.success) {

            this.errorMessage.set(
              response.message ||
              'Unable to process your request.'
            );

            return;

          }


          /*
           * Email has been sent successfully.
           *
           * The user must open the link
           * received in their email.
           */

          this.successMessage.set(
            response.message ||
            'Password reset instructions have been sent to your email.'
          );

        },


        /*
         * ERROR
         */

        error: (error) => {

          this.isLoading.set(false);


          this.errorMessage.set(
            error?.error?.message ||
            'Unable to process your password reset request. Please try again.'
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