import {
  Injectable,
  inject,
  signal
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable,
  tap,
  catchError,
  throwError
} from 'rxjs';


export interface AuthUser {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  authProvider: 'local' | 'google';
  isVerified: boolean;
  createdAt?: string;
}


export interface AuthResponse {
  success: boolean;
  message: string;
  user?: AuthUser;
}


export interface SignupData {
  name: string;
  email: string;
  password: string;
}


export interface LoginData {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class Auth {

  private readonly http = inject(HttpClient);


  /*
  |--------------------------------------------------------------------------
  | API
  |--------------------------------------------------------------------------
  |
  | Local development:
  | http://localhost:5000/api/auth
  |
  | Production:
  | https://guidex2-0.onrender.com/api/auth
  |
  */

  private readonly apiUrl =
    this.getApiUrl();


  /*
  |--------------------------------------------------------------------------
  | LOCAL STORAGE
  |--------------------------------------------------------------------------
  */

  private readonly storageKey =
    'guidex_auth_user';


  /*
  |--------------------------------------------------------------------------
  | AUTHENTICATION STATE
  |--------------------------------------------------------------------------
  */

  private readonly currentUserSignal =
    signal<AuthUser | null>(
      this.loadStoredUser()
    );


  readonly currentUser =
    this.currentUserSignal.asReadonly();


  readonly isLoggedIn =
    signal<boolean>(
      this.currentUserSignal() !== null
    );


  /*
  |--------------------------------------------------------------------------
  | SIGNUP
  |--------------------------------------------------------------------------
  */

  signup(
    data: SignupData
  ): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/signup`,
      data,
      {
        withCredentials: true
      }
    ).pipe(

      tap((response) => {

        if (
          response.success &&
          response.user
        ) {

          this.setAuthenticatedUser(
            response.user
          );

        }

      })

    );

  }


  /*
  |--------------------------------------------------------------------------
  | LOGIN
  |--------------------------------------------------------------------------
  */

  login(
    data: LoginData
  ): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`,
      data,
      {
        withCredentials: true
      }
    ).pipe(

      tap((response) => {

        if (
          response.success &&
          response.user
        ) {

          this.setAuthenticatedUser(
            response.user
          );

        }

      })

    );

  }


  /*
  |--------------------------------------------------------------------------
  | GOOGLE LOGIN
  |--------------------------------------------------------------------------
  */

  googleLogin(
    credential: string
  ): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/google`,
      {
        credential
      },
      {
        withCredentials: true
      }
    ).pipe(

      tap((response) => {

        if (
          response.success &&
          response.user
        ) {

          this.setAuthenticatedUser(
            response.user
          );

        }

      })

    );

  }


  /*
  |--------------------------------------------------------------------------
  | GET CURRENT USER
  |--------------------------------------------------------------------------
  */

  getCurrentUser():
    Observable<AuthResponse> {

    return this.http.get<AuthResponse>(
      `${this.apiUrl}/me`,
      {
        withCredentials: true
      }
    ).pipe(

      tap((response) => {

        if (
          response.success &&
          response.user
        ) {

          this.setAuthenticatedUser(
            response.user
          );

        }

      })

    );

  }


  /*
  |--------------------------------------------------------------------------
  | RESTORE / VERIFY SESSION
  |--------------------------------------------------------------------------
  */

  restoreSession():
    Observable<AuthResponse> {

    if (!this.currentUserSignal()) {

      return new Observable<AuthResponse>(
        (subscriber) => {

          subscriber.next({
            success: false,
            message: 'No local authentication session found.'
          });

          subscriber.complete();

        }
      );

    }


    return this.getCurrentUser().pipe(

      catchError((error) => {

        if (
          error?.status === 401 ||
          error?.status === 403
        ) {

          this.clearAuthenticatedUser();

        }


        return throwError(
          () => error
        );

      })

    );

  }


  /*
  |--------------------------------------------------------------------------
  | FORGOT PASSWORD
  |--------------------------------------------------------------------------
  */

  forgotPassword(
    email: string
  ): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/forgot-password`,
      {
        email
      },
      {
        withCredentials: true
      }
    );

  }


  /*
  |--------------------------------------------------------------------------
  | RESET PASSWORD
  |--------------------------------------------------------------------------
  |
  | Resetting a password does NOT authenticate
  | the user.
  |
  | After a successful reset, the reset-password
  | component navigates the user to /login.
  |
  */

  resetPassword(
    token: string,
    password: string
  ): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/reset-password/${encodeURIComponent(token)}`,
      {
        password
      },
      {
        withCredentials: true
      }
    );

  }


  /*
  |--------------------------------------------------------------------------
  | LOGOUT
  |--------------------------------------------------------------------------
  */

  logout():
    Observable<AuthResponse> {

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/logout`,
      {},
      {
        withCredentials: true
      }
    ).pipe(

      tap((response) => {

        if (response.success) {

          this.clearAuthenticatedUser();

        }

      })

    );

  }


  /*
  |--------------------------------------------------------------------------
  | SET AUTHENTICATED USER
  |--------------------------------------------------------------------------
  */

  private setAuthenticatedUser(
    user: AuthUser
  ): void {

    this.currentUserSignal.set(user);

    this.isLoggedIn.set(true);

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(user)
    );

  }


  /*
  |--------------------------------------------------------------------------
  | CLEAR AUTHENTICATED USER
  |--------------------------------------------------------------------------
  */

  private clearAuthenticatedUser(): void {

    this.currentUserSignal.set(null);

    this.isLoggedIn.set(false);

    localStorage.removeItem(
      this.storageKey
    );

  }


  /*
  |--------------------------------------------------------------------------
  | LOAD STORED USER
  |--------------------------------------------------------------------------
  */

  private loadStoredUser():
    AuthUser | null {

    if (
      typeof window === 'undefined'
    ) {

      return null;

    }


    try {

      const storedUser =
        localStorage.getItem(
          this.storageKey
        );


      if (!storedUser) {

        return null;

      }


      return JSON.parse(
        storedUser
      ) as AuthUser;


    } catch (error) {

      console.error(
        'Unable to restore stored authentication state:',
        error
      );


      localStorage.removeItem(
        this.storageKey
      );


      return null;

    }

  }


  /*
  |--------------------------------------------------------------------------
  | GET API URL
  |--------------------------------------------------------------------------
  */

  private getApiUrl(): string {

    if (
      typeof window === 'undefined'
    ) {

      return 'http://localhost:5000/api/auth';

    }


    const hostname =
      window.location.hostname;


    const isLocalDevelopment =
      hostname === 'localhost' ||
      hostname === '127.0.0.1';


    if (isLocalDevelopment) {

      return 'http://localhost:5000/api/auth';

    }


    return 'https://guidex2-0.onrender.com/api/auth';

  }

}