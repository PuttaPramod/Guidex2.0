import {
  Component,
  HostListener,
  inject,
  signal
} from '@angular/core';

import { NgIf } from '@angular/common';

import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import {
  Auth,
  AuthUser
} from '../../services/auth';


@Component({
  selector: 'app-navbar',
  standalone: true,

  imports: [
    NgIf,
    RouterLink,
    RouterLinkActive
  ],

  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})


export class Navbar {

  private readonly auth = inject(Auth);

  private readonly router = inject(Router);

  mobileMenuOpen = signal(false);


  /* =====================================================
     LOGGED-IN USER
  ===================================================== */

  readonly currentUser =
    this.auth.currentUser;

  readonly isLoggedIn =
    this.auth.isLoggedIn;


  /* =====================================================
     GET USER DISPLAY NAME
  ===================================================== */

  get userDisplayName(): string {

    const user: AuthUser | null =
      this.currentUser();


    if (!user) {

      return '';

    }


    return user.name;

  }


  /* =====================================================
     GET USER INITIAL
  ===================================================== */

  get userInitial(): string {

    const user: AuthUser | null =
      this.currentUser();


    if (!user?.name) {

      return '';

    }


    return user.name
      .trim()
      .charAt(0)
      .toUpperCase();

  }


  /* =====================================================
     LOGOUT
  ===================================================== */

  logout(): void {

    /*
     * Close the mobile menu immediately.
     */

    this.closeMobileMenu();


    this.auth.logout().subscribe({

      /*
       * LOGOUT SUCCESS
       */

      next: (response) => {

        if (response.success) {

          /*
           * Navigate to login page
           * after authentication is cleared.
           */

          this.router.navigate(
            ['/login'],
            {
              replaceUrl: true
            }
          );

        }

      },


      /*
       * LOGOUT ERROR
       */

      error: (error) => {

        console.error(
          'Logout failed:',
          error
        );

      }

    });

  }


  /* =====================================================
     TOGGLE MOBILE MENU
  ===================================================== */

  toggleMobileMenu(): void {

    this.mobileMenuOpen.update(
      value => !value
    );

  }


  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  closeMobileMenu(): void {

    this.mobileMenuOpen.set(false);

  }


  /* =====================================================
     CLOSE MENU WHEN RETURNING TO DESKTOP
  ===================================================== */

  @HostListener('window:resize')
  onWindowResize(): void {

    if (window.innerWidth >= 768) {

      this.mobileMenuOpen.set(false);

    }

  }

}