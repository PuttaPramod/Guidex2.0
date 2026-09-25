import {
  Inject,
  Injectable,
  PLATFORM_ID,
  effect,
  inject,
  signal
} from '@angular/core';

import {
  isPlatformBrowser
} from '@angular/common';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable,
  catchError,
  finalize,
  throwError
} from 'rxjs';

import {
  Auth
} from './auth';


/* =========================================================
   USER CAREER
========================================================= */

export interface UserCareer {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  roadmapId?: string;
}


/* =========================================================
   USER COURSE
========================================================= */

export interface UserCourse {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
}


/* =========================================================
   SAVED COURSE
========================================================= */

export interface SavedCourse {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  progress: number;
}


/* =========================================================
   USER EXAM
========================================================= */

export interface UserExam {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
}


/* =========================================================
   USER COLLEGE
========================================================= */

export interface UserCollege {
  id: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  type: string;
  icon: string;
}


/* =========================================================
   USER ROADMAP
========================================================= */

export interface UserRoadmap {
  id: string;
  title: string;
  icon?: string;
}


/* =========================================================
   QUIZ MATCH
========================================================= */

export interface QuizMatch {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  roadmapId?: string;
  score: number;
}


/* =========================================================
   QUIZ RESULT
========================================================= */

export interface QuizResult {
  id: string;
  completedAt: string;
  matches: QuizMatch[];
}


/* =========================================================
   ROADMAP PROGRESS
========================================================= */

export interface RoadmapProgress {
  [roadmapId: string]: boolean[];
}


/* =========================================================
   USER DATA API RESPONSE
========================================================= */

interface UserDataResponse {
  success: boolean;
  message?: string;
  data?: UserDataPayload;
}


/* =========================================================
   USER DATA PAYLOAD
========================================================= */

interface UserDataPayload {
  quizHistory: QuizResult[];

  savedCareers: UserCareer[];

  savedCourses: SavedCourse[];

  savedExams: UserExam[];

  savedRoadmaps: UserRoadmap[];

  recentCareers: UserCareer[];

  recentCourses: UserCourse[];

  recentExams: UserExam[];

  recentColleges: UserCollege[];

  recentRoadmaps: UserRoadmap[];

  roadmapProgress: RoadmapProgress;
}


/* =========================================================
   USER STATE SERVICE
========================================================= */

@Injectable({
  providedIn: 'root'
})
export class UserState {

  private readonly http = inject(HttpClient);

  private readonly auth = inject(Auth);


  /* =======================================================
     API
  ======================================================= */

  private readonly apiUrl =
    'http://localhost:5000/api/user-data';


  /* =======================================================
     PLATFORM
  ======================================================= */

  private readonly browser: boolean;


  /* =======================================================
     DATA LOAD VERSION

     Prevents an older user's HTTP response from being
     applied after another user has logged in.
  ======================================================= */

  private dataLoadVersion = 0;


  /* =======================================================
     SAVE STATE

     Prevents overlapping saves from corrupting the latest
     user state when several changes happen quickly.
  ======================================================= */

  private saveInProgress = false;

  private saveQueued = false;


  /* =======================================================
     QUIZ HISTORY
  ======================================================= */

  readonly quizHistory =
    signal<QuizResult[]>([]);


  /* =======================================================
     SAVED CAREERS
  ======================================================= */

  readonly savedCareers =
    signal<UserCareer[]>([]);


  /* =======================================================
     SAVED COURSES
  ======================================================= */

  readonly savedCourses =
    signal<SavedCourse[]>([]);


  /* =======================================================
     SAVED EXAMS
  ======================================================= */

  readonly savedExams =
    signal<UserExam[]>([]);


  /* =======================================================
     SAVED ROADMAPS
  ======================================================= */

  readonly savedRoadmaps =
    signal<UserRoadmap[]>([]);


  /* =======================================================
     RECENTLY VIEWED CAREERS
  ======================================================= */

  readonly recentCareers =
    signal<UserCareer[]>([]);


  /* =======================================================
     RECENTLY VIEWED COURSES
  ======================================================= */

  readonly recentCourses =
    signal<UserCourse[]>([]);


  /* =======================================================
     RECENTLY VIEWED EXAMS
  ======================================================= */

  readonly recentExams =
    signal<UserExam[]>([]);


  /* =======================================================
     RECENTLY VIEWED COLLEGES
  ======================================================= */

  readonly recentColleges =
    signal<UserCollege[]>([]);


  /* =======================================================
     RECENTLY VIEWED ROADMAPS
  ======================================================= */

  readonly recentRoadmaps =
    signal<UserRoadmap[]>([]);


  /* =======================================================
     ROADMAP PROGRESS
  ======================================================= */

  readonly roadmapProgress =
    signal<RoadmapProgress>({});


  /* =======================================================
     CONSTRUCTOR
  ======================================================= */

  constructor(
    @Inject(PLATFORM_ID) platformId: object
  ) {

    this.browser =
      isPlatformBrowser(platformId);


    /*
     * Watch authentication state.
     *
     * Logged in:
     *     Load that user's MongoDB data.
     *
     * Logged out:
     *     Clear in-memory user data.
     */
    if (this.browser) {

      effect(() => {

        const user =
          this.auth.currentUser();

        if (!user) {

          this.dataLoadVersion++;

          this.clearSignals();

          return;

        }


        this.loadUserData();

      });

    }

  }


  /* =======================================================
     LOAD USER DATA FROM MONGODB
  ======================================================= */

  private loadUserData(): void {

    const user =
      this.auth.currentUser();


    if (!user) {
      return;
    }


    const currentVersion =
      ++this.dataLoadVersion;


    this.http.get<UserDataResponse>(
      this.apiUrl,
      {
        withCredentials: true
      }
    ).subscribe({

      next: (response) => {

        /*
         * Ignore the response if another user has already
         * become active.
         */
        if (
          currentVersion !==
          this.dataLoadVersion
        ) {
          return;
        }


        if (
          !response.success ||
          !response.data
        ) {

          console.warn(
            'Guidex user data could not be loaded:',
            response.message
          );

          return;

        }


        this.applyUserData(
          response.data
        );

      },

      error: (error) => {

        /*
         * Ignore an old user's failed request.
         */
        if (
          currentVersion !==
          this.dataLoadVersion
        ) {
          return;
        }


        /*
         * If the authentication session has expired,
         * Auth will handle authentication state separately.
         */
        if (
          error?.status === 401 ||
          error?.status === 403
        ) {

          console.warn(
            'Guidex user data request was not authenticated.'
          );

          return;

        }


        console.error(
          'Guidex user data could not be loaded:',
          error
        );

      }

    });

  }


  /* =======================================================
     APPLY SERVER DATA
  ======================================================= */

  private applyUserData(
    data: UserDataPayload
  ): void {

    this.quizHistory.set(
      data.quizHistory ?? []
    );


    this.savedCareers.set(
      data.savedCareers ?? []
    );


    this.savedCourses.set(
      data.savedCourses ?? []
    );


    this.savedExams.set(
      data.savedExams ?? []
    );


    this.savedRoadmaps.set(
      data.savedRoadmaps ?? []
    );


    this.recentCareers.set(
      data.recentCareers ?? []
    );


    this.recentCourses.set(
      data.recentCourses ?? []
    );


    this.recentExams.set(
      data.recentExams ?? []
    );


    this.recentColleges.set(
      data.recentColleges ?? []
    );


    this.recentRoadmaps.set(
      data.recentRoadmaps ?? []
    );


    this.roadmapProgress.set(
      data.roadmapProgress ?? {}
    );

  }


  /* =======================================================
     SAVE CURRENT STATE TO MONGODB
  ======================================================= */

  private save(): void {

    if (!this.browser) {
      return;
    }


    /*
     * Never save application data without an authenticated
     * user.
     */
    if (!this.auth.isLoggedIn()) {
      return;
    }


    /*
     * If a save is already running, request another save
     * after it finishes. This keeps the latest state safe.
     */
    if (this.saveInProgress) {

      this.saveQueued = true;

      return;

    }


    this.saveInProgress = true;


    const payload: UserDataPayload = {

      quizHistory:
        this.quizHistory(),

      savedCareers:
        this.savedCareers(),

      savedCourses:
        this.savedCourses(),

      savedExams:
        this.savedExams(),

      savedRoadmaps:
        this.savedRoadmaps(),

      recentCareers:
        this.recentCareers(),

      recentCourses:
        this.recentCourses(),

      recentExams:
        this.recentExams(),

      recentColleges:
        this.recentColleges(),

      recentRoadmaps:
        this.recentRoadmaps(),

      roadmapProgress:
        this.roadmapProgress()

    };


    this.http.put<UserDataResponse>(
      this.apiUrl,
      payload,
      {
        withCredentials: true
      }
    ).pipe(

      catchError((error) => {

        console.error(
          'Guidex user data could not be saved:',
          error
        );

        return throwError(
          () => error
        );

      }),

      finalize(() => {

        this.saveInProgress = false;


        /*
         * If another change happened while the request
         * was running, save the latest state again.
         */
        if (this.saveQueued) {

          this.saveQueued = false;

          this.save();

        }

      })

    ).subscribe();

  }


  /* =======================================================
     QUIZ METHODS
  ======================================================= */

  addQuizResult(
    matches: QuizMatch[]
  ): void {

    const quizResult: QuizResult = {

      id: crypto.randomUUID(),

      completedAt:
        new Date().toISOString(),

      matches:
        matches.slice(0, 3)

    };


    this.quizHistory.update(
      history => [
        quizResult,
        ...history
      ].slice(0, 3)
    );


    this.save();

  }


  getQuizResult(
    id: string
  ): QuizResult | undefined {

    return this.quizHistory().find(
      result =>
        result.id === id
    );

  }


  removeQuizResult(
    id: string
  ): void {

    this.quizHistory.update(
      history =>
        history.filter(
          result =>
            result.id !== id
        )
    );


    this.save();

  }


  clearQuizHistory(): void {

    this.quizHistory.set([]);

    this.save();

  }


  /* =======================================================
     SAVED CAREER METHODS
  ======================================================= */

  isCareerSaved(
    id: string
  ): boolean {

    return this.savedCareers().some(
      career =>
        career.id === id
    );

  }


  toggleSavedCareer(
    career: UserCareer
  ): boolean {

    const exists =
      this.isCareerSaved(
        career.id
      );


    if (exists) {

      this.savedCareers.update(
        careers =>
          careers.filter(
            item =>
              item.id !== career.id
          )
      );

    } else {

      this.savedCareers.update(
        careers => [
          ...careers,
          career
        ]
      );

    }


    this.save();


    return !exists;

  }


  removeSavedCareer(
    id: string
  ): void {

    this.savedCareers.update(
      careers =>
        careers.filter(
          career =>
            career.id !== id
        )
    );


    this.save();

  }


  clearSavedCareers(): void {

    this.savedCareers.set([]);

    this.save();

  }


  /* =======================================================
     SAVED COURSE METHODS
  ======================================================= */

  isCourseSaved(
    id: string
  ): boolean {

    return this.savedCourses().some(
      course =>
        course.id === id
    );

  }


  toggleSavedCourse(
    course: SavedCourse
  ): boolean {

    const exists =
      this.isCourseSaved(
        course.id
      );


    if (exists) {

      this.savedCourses.update(
        courses =>
          courses.filter(
            item =>
              item.id !== course.id
          )
      );

    } else {

      this.savedCourses.update(
        courses => [
          ...courses,
          {
            ...course,
            progress:
              course.progress ?? 0
          }
        ]
      );

    }


    this.save();


    return !exists;

  }


  removeSavedCourse(
    id: string
  ): void {

    this.savedCourses.update(
      courses =>
        courses.filter(
          course =>
            course.id !== id
        )
    );


    this.save();

  }


  clearSavedCourses(): void {

    this.savedCourses.set([]);

    this.save();

  }


  /* =======================================================
     SAVED EXAM METHODS
  ======================================================= */

  isExamSaved(
    id: string
  ): boolean {

    return this.savedExams().some(
      exam =>
        exam.id === id
    );

  }


  toggleSavedExam(
    exam: UserExam
  ): boolean {

    const exists =
      this.isExamSaved(
        exam.id
      );


    if (exists) {

      this.savedExams.update(
        exams =>
          exams.filter(
            item =>
              item.id !== exam.id
          )
      );

    } else {

      this.savedExams.update(
        exams => [
          ...exams,
          exam
        ]
      );

    }


    this.save();


    return !exists;

  }


  removeSavedExam(
    id: string
  ): void {

    this.savedExams.update(
      exams =>
        exams.filter(
          exam =>
            exam.id !== id
        )
    );


    this.save();

  }


  clearSavedExams(): void {

    this.savedExams.set([]);

    this.save();

  }


  /* =======================================================
     SAVED ROADMAP METHODS
  ======================================================= */

  isRoadmapSaved(
    id: string
  ): boolean {

    return this.savedRoadmaps().some(
      roadmap =>
        roadmap.id === id
    );

  }


  toggleSavedRoadmap(
    roadmap: UserRoadmap
  ): boolean {

    const exists =
      this.isRoadmapSaved(
        roadmap.id
      );


    if (exists) {

      this.savedRoadmaps.update(
        roadmaps =>
          roadmaps.filter(
            item =>
              item.id !== roadmap.id
          )
      );

    } else {

      this.savedRoadmaps.update(
        roadmaps => [
          ...roadmaps,
          roadmap
        ]
      );

    }


    this.save();


    return !exists;

  }


  removeSavedRoadmap(
    id: string
  ): void {

    this.savedRoadmaps.update(
      roadmaps =>
        roadmaps.filter(
          roadmap =>
            roadmap.id !== id
        )
    );


    this.save();

  }


  clearSavedRoadmaps(): void {

    this.savedRoadmaps.set([]);

    this.save();

  }


  /* =======================================================
     COURSE PROGRESS
  ======================================================= */

  updateCourseProgress(
    id: string,
    progress: number
  ): void {

    const safeProgress =
      Math.min(
        100,
        Math.max(
          0,
          progress
        )
      );


    this.savedCourses.update(
      courses =>
        courses.map(
          course => {

            if (course.id !== id) {
              return course;
            }


            return {
              ...course,
              progress: safeProgress
            };

          }
        )
    );


    this.save();

  }


  getCourseProgress(
    id: string
  ): number {

    const course =
      this.savedCourses().find(
        item =>
          item.id === id
      );


    return course?.progress ?? 0;

  }


  /* =======================================================
     RECENT CAREERS
  ======================================================= */

  addRecentCareer(
    career: UserCareer
  ): void {

    this.recentCareers.update(
      careers => {

        const filtered =
          careers.filter(
            item =>
              item.id !== career.id
          );


        return [
          career,
          ...filtered
        ].slice(0, 6);

      }
    );


    this.save();

  }


  clearRecentCareers(): void {

    this.recentCareers.set([]);

    this.save();

  }


  /* =======================================================
     RECENT COURSES
  ======================================================= */

  addRecentCourse(
    course: UserCourse
  ): void {

    this.recentCourses.update(
      courses => {

        const filtered =
          courses.filter(
            item =>
              item.id !== course.id
          );


        return [
          course,
          ...filtered
        ].slice(0, 6);

      }
    );


    this.save();

  }


  clearRecentCourses(): void {

    this.recentCourses.set([]);

    this.save();

  }


  /* =======================================================
     RECENT EXAMS
  ======================================================= */

  addRecentExam(
    exam: UserExam
  ): void {

    this.recentExams.update(
      exams => {

        const filtered =
          exams.filter(
            item =>
              item.id !== exam.id
          );


        return [
          exam,
          ...filtered
        ].slice(0, 6);

      }
    );


    this.save();

  }


  clearRecentExams(): void {

    this.recentExams.set([]);

    this.save();

  }


  /* =======================================================
     RECENT COLLEGES
  ======================================================= */

  addRecentCollege(
    college: UserCollege
  ): void {

    this.recentColleges.update(
      colleges => {

        const filtered =
          colleges.filter(
            item =>
              item.id !== college.id
          );


        return [
          college,
          ...filtered
        ].slice(0, 6);

      }
    );


    this.save();

  }


  clearRecentColleges(): void {

    this.recentColleges.set([]);

    this.save();

  }


  /* =======================================================
     RECENT ROADMAPS
  ======================================================= */

  addRecentRoadmap(
    roadmap: UserRoadmap
  ): void {

    this.recentRoadmaps.update(
      roadmaps => {

        const filtered =
          roadmaps.filter(
            item =>
              item.id !== roadmap.id
          );


        return [
          roadmap,
          ...filtered
        ].slice(0, 6);

      }
    );


    this.save();

  }


  clearRecentRoadmaps(): void {

    this.recentRoadmaps.set([]);

    this.save();

  }


  /* =======================================================
     ROADMAP PROGRESS
  ======================================================= */

  getRoadmapProgress(
    roadmapId: string,
    totalSteps: number
  ): boolean[] {

    const existing =
      this.roadmapProgress()[roadmapId];


    if (!existing) {

      return Array(
        totalSteps
      ).fill(false);

    }


    return Array.from(
      {
        length: totalSteps
      },
      (_, index) =>
        existing[index] ?? false
    );

  }


  /* =======================================================
     SET ROADMAP STEP
  ======================================================= */

  setRoadmapStepCompleted(
    roadmapId: string,
    stepIndex: number,
    completed: boolean,
    totalSteps: number
  ): void {

    const current =
      this.getRoadmapProgress(
        roadmapId,
        totalSteps
      );


    if (
      stepIndex < 0 ||
      stepIndex >= current.length
    ) {

      return;

    }


    current[stepIndex] =
      completed;


    this.roadmapProgress.update(
      progress => ({

        ...progress,

        [roadmapId]:
          current

      })
    );


    this.save();

  }


  /* =======================================================
     CLEAR ROADMAP PROGRESS
  ======================================================= */

  clearRoadmapProgress(
    roadmapId: string
  ): void {

    this.roadmapProgress.update(
      progress => {

        const updated = {
          ...progress
        };


        delete updated[roadmapId];


        return updated;

      }
    );


    this.save();

  }


  /* =======================================================
     COMPLETED ROADMAP STEPS
  ======================================================= */

  getRoadmapCompletedCount(
    roadmapId: string,
    totalSteps: number
  ): number {

    return this
      .getRoadmapProgress(
        roadmapId,
        totalSteps
      )
      .filter(Boolean)
      .length;

  }


  /* =======================================================
     CLEAR ALL USER DATA
  ======================================================= */

  clearAll(): void {

    this.clearSignals();

    /*
     * If a user is authenticated, persist the empty state
     * to that user's MongoDB document.
     */
    if (this.auth.isLoggedIn()) {
      this.save();
    }

  }


  /* =======================================================
     CLEAR IN-MEMORY SIGNALS
     
     Used when the user logs out.
     
     IMPORTANT:
     This does NOT delete MongoDB data.
     The user's data remains available when they log in again.
  ======================================================= */

  private clearSignals(): void {

    this.quizHistory.set([]);

    this.savedCareers.set([]);

    this.savedCourses.set([]);

    this.savedExams.set([]);

    this.savedRoadmaps.set([]);

    this.recentCareers.set([]);

    this.recentCourses.set([]);

    this.recentExams.set([]);

    this.recentColleges.set([]);

    this.recentRoadmaps.set([]);

    this.roadmapProgress.set({});

  }

}