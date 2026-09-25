import {
  Component,
  inject,
  signal
} from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { Footer } from './components/footer/footer';

import { Navbar } from './components/navbar/navbar';

import { Auth } from './services/auth';


@Component({

  imports: [
    RouterOutlet,
    Footer,
    Navbar
  ],

  selector: 'app-root',

  styleUrl: './app.css',

  templateUrl: './app.html',

})
export class App {

  protected readonly title =
    signal('guidex2.0');


  private readonly auth =
    inject(Auth);


  constructor() {

    this.restoreAuthenticationSession();

  }


  /*
  |--------------------------------------------------------------------------
  | RESTORE AUTHENTICATION SESSION
  |--------------------------------------------------------------------------
  |
  | When Guidex starts:
  |
  | 1. Auth service reads the local user.
  | 2. If a user exists, /api/auth/me is called.
  | 3. Backend verifies the JWT cookie.
  | 4. If valid → keep the user logged in.
  | 5. If invalid → Auth clears local authentication state.
  |
  */

  private restoreAuthenticationSession(): void {

    if (!this.auth.currentUser()) {

      return;

    }


    this.auth.restoreSession().subscribe({

      next: (response) => {

        if (!response.success) {

          console.log(
            'No active authentication session.'
          );

        }

      },

      error: (error) => {

        /*
         * A 401/403 response is already handled
         * by Auth.restoreSession(), which clears
         * the local authentication state.
         */

        if (
          error?.status === 401 ||
          error?.status === 403
        ) {

          console.log(
            'Authentication session expired. Local login state cleared.'
          );

        } else {

          console.error(
            'Unable to verify authentication session:',
            error
          );

        }

      }

    });

  }

}