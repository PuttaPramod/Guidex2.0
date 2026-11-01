
import { inject } from '@angular/core';

import {
  Routes,
  CanActivateFn,
  RedirectCommand,
  Router
} from '@angular/router';

import { Auth } from './services/auth';

import { Home } from './pages/home/home';
import { Quiz } from './pages/quiz/quiz';

import { Streams } from './pages/streams/streams';
import { StreamDetail } from './pages/stream-detail/stream-detail';

import { Careers } from './pages/careers/careers';
import { CareerDetail } from './pages/career-detail/career-detail';

import { Courses } from './pages/courses/courses';
import { CourseDetail } from './pages/course-detail/course-detail';

import { Colleges } from './pages/colleges/colleges';
import { CollegeDetail } from './pages/college-detail/college-detail';

import { Exams } from './pages/exams/exams';
import { ExamDetail } from './pages/exam-detail/exam-detail';

import { Roadmap } from './pages/roadmap/roadmap';
import { Dashboard } from './pages/dashboard/dashboard';

import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { ForgotPassword } from './auth/forgot-password/forgot-password';
import { ResetPassword } from './auth/reset-password/reset-password';


/* =====================================================
   AUTHENTICATION PAGE GUARD
===================================================== */

const redirectAuthenticatedUser: CanActivateFn = () => {

  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.isLoggedIn()) {
    return new RedirectCommand(
      router.parseUrl('/dashboard'),
      { replaceUrl: true }
    );
  }

  return true;
};


/* =====================================================
   PROTECTED PAGE GUARD
===================================================== */

const requireAuthentication: CanActivateFn = () => {

  const auth = inject(Auth);
  const router = inject(Router);

  if (!auth.isLoggedIn()) {
    return new RedirectCommand(
      router.parseUrl('/login'),
      { replaceUrl: true }
    );
  }

  return true;
};


export const routes: Routes = [

  /* =====================================================
     HOME
  ===================================================== */

  {
    path: '',
    component: Home
  },


  /* =====================================================
     STREAMS
  ===================================================== */

  {
    path: 'streams',
    component: Streams
  },

  {
    path: 'streams/:id',
    component: StreamDetail
  },


  /* =====================================================
     CAREERS
  ===================================================== */

  // All careers listing

  {
    path: 'careers',
    component: Careers
  },

  // Individual career details - new alias

  {
    path: 'careers/:id',
    component: CareerDetail
  },

  // Existing individual career detail route

  {
    path: 'career-detail/:id',
    component: CareerDetail
  },


  /* =====================================================
     SMART QUIZ
  ===================================================== */

  {
    path: 'quiz',
    component: Quiz,
    canActivate: [
      requireAuthentication
    ]
  },


  /* =====================================================
     COURSES
  ===================================================== */

  {
    path: 'courses',
    component: Courses
  },

  {
    path: 'course-detail/:id',
    component: CourseDetail
  },


  /* =====================================================
     COLLEGES
  ===================================================== */

  {
    path: 'colleges',
    component: Colleges
  },

  {
    path: 'college-detail/:id',
    component: CollegeDetail
  },


  /* =====================================================
     ENTRANCE EXAMS
  ===================================================== */

  // All exams listing

  {
    path: 'exams',
    component: Exams
  },

  // Individual exam details - new alias

  {
    path: 'exams/:id',
    component: ExamDetail
  },

  // Existing individual exam detail route

  {
    path: 'exam-detail/:id',
    component: ExamDetail
  },


  /* =====================================================
     ROADMAP
  ===================================================== */

  {
    path: 'roadmap',
    component: Roadmap
  },


  /* =====================================================
     DASHBOARD
  ===================================================== */

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [
      requireAuthentication
    ]
  },


  /* =====================================================
     AUTHENTICATION
  ===================================================== */

  {
    path: 'login',
    component: Login,
    canActivate: [
      redirectAuthenticatedUser
    ]
  },

  {
    path: 'signup',
    component: Signup,
    canActivate: [
      redirectAuthenticatedUser
    ]
  },

  {
    path: 'forgot-password',
    component: ForgotPassword
  },

  {
    path: 'reset-password/:token',
    component: ResetPassword
  },


  /* =====================================================
     FALLBACK
  ===================================================== */

  {
    path: '**',
    redirectTo: ''
  }

];
