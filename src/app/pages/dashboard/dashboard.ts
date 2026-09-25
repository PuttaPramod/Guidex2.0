import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  UserState,
  UserCareer,
  UserCourse,
  UserExam,
  UserCollege,
  UserRoadmap,
  SavedCourse,
  QuizResult,
  QuizMatch
} from '../../services/user-state';


/* =====================================================
   INTERFACES
===================================================== */

interface QuickAction {
  title: string;
  description: string;
  icon: string;
  route: string;
  queryParams?: Record<string, string>;
}


interface ExploreItem {
  title: string;
  category: string;
  description: string;
  icon: string;
  route: string;
  button: string;
}


interface FeaturedCareer {
  title: string;
  category: string;
  icon: string;
  description: string;
  route: string;
}


/* =====================================================
   DASHBOARD ACTIVITY TYPE
===================================================== */

type DashboardActivity =
  | 'saved-careers'
  | 'saved-courses'
  | 'saved-exams'
  | 'saved-roadmaps'
  | 'recent-careers'
  | 'recent-courses'
  | 'recent-exams'
  | 'recent-colleges'
  | 'recent-roadmaps';


/* =====================================================
   COMPONENT
===================================================== */

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  /* =====================================================
     USER STATE
  ===================================================== */

  private readonly userState =
    inject(UserState);


  /* =====================================================
     ACTIVITY POPUP
  ===================================================== */

  readonly selectedActivity =
    signal<DashboardActivity | null>(null);


  /* =====================================================
     SHOW ACTIVITY POPUP
  ===================================================== */

  showActivity(
    activity: DashboardActivity
  ): void {

    /*
     * If the same activity is clicked again,
     * close the popup.
     */

    if (this.selectedActivity() === activity) {

      this.closeActivity();

      return;

    }


    /*
     * Opening an activity popup should close
     * any currently selected quiz result.
     */

    if (this.selectedQuizResult()) {

      this.selectedQuizResult.set(null);

    }


    /*
     * Open the selected activity popup.
     */

    this.selectedActivity.set(activity);

  }


  /* =====================================================
     CLOSE ACTIVITY POPUP
  ===================================================== */

  closeActivity(): void {

    this.selectedActivity.set(null);

  }


  /* =====================================================
     CLOSE POPUP WITH ESCAPE
  ===================================================== */

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {

    /*
     * Escape closes the activity popup first.
     */

    if (this.selectedActivity()) {

      this.closeActivity();

      return;

    }

    /*
     * If no activity popup is open,
     * Escape closes the selected quiz result.
     */

    if (this.selectedQuizResult()) {

      this.closeQuizResult();

    }

  }


  /* =====================================================
     SAVED CAREERS
  ===================================================== */

  readonly savedCareers =
    this.userState.savedCareers;


  removeSavedCareer(
    id: string
  ): void {

    this.userState.removeSavedCareer(id);

  }


  clearSavedCareers(): void {

    this.userState.clearSavedCareers();

  }


  /* =====================================================
     SAVED COURSES
  ===================================================== */

  readonly savedCourses =
    this.userState.savedCourses;


  removeSavedCourse(
    id: string
  ): void {

    this.userState.removeSavedCourse(id);

  }


  clearSavedCourses(): void {

    this.userState.clearSavedCourses();

  }


  /* =====================================================
     SAVED EXAMS
  ===================================================== */

  readonly savedExams =
    this.userState.savedExams;


  removeSavedExam(
    id: string
  ): void {

    this.userState.removeSavedExam(id);

  }


  clearSavedExams(): void {

    this.userState.clearSavedExams();

  }


  /* =====================================================
     SAVED ROADMAPS
  ===================================================== */

  readonly savedRoadmaps =
    this.userState.savedRoadmaps;


  removeSavedRoadmap(
    id: string
  ): void {

    this.userState.removeSavedRoadmap(id);

  }


  clearSavedRoadmaps(): void {

    this.userState.clearSavedRoadmaps();

  }


  /* =====================================================
     RECENTLY VIEWED CAREERS
  ===================================================== */

  readonly recentCareers =
    this.userState.recentCareers;


  clearRecentCareers(): void {

    this.userState.clearRecentCareers();

  }


  /* =====================================================
     RECENTLY VIEWED COURSES
  ===================================================== */

  readonly recentCourses =
    this.userState.recentCourses;


  clearRecentCourses(): void {

    this.userState.clearRecentCourses();

  }


  /* =====================================================
     RECENTLY VIEWED EXAMS
  ===================================================== */

  readonly recentExams =
    this.userState.recentExams;


  clearRecentExams(): void {

    this.userState.clearRecentExams();

  }


  /* =====================================================
     RECENTLY VIEWED COLLEGES
  ===================================================== */

  readonly recentColleges =
    this.userState.recentColleges;


  clearRecentColleges(): void {

    this.userState.clearRecentColleges();

  }


  /* =====================================================
     RECENTLY VIEWED ROADMAPS
  ===================================================== */

  readonly recentRoadmaps =
    this.userState.recentRoadmaps;


  clearRecentRoadmaps(): void {

    this.userState.clearRecentRoadmaps();

  }


  /* =====================================================
     QUIZ HISTORY
  ===================================================== */

  readonly quizHistory =
    this.userState.quizHistory;


  /* =====================================================
     SELECTED QUIZ RESULT
  ===================================================== */

  readonly selectedQuizResult =
    signal<QuizResult | null>(null);


  /* =====================================================
     OPEN QUIZ RESULT
  ===================================================== */

  openQuizResult(
    result: QuizResult
  ): void {

    /*
     * Close any activity popup before
     * showing the quiz result.
     */

    this.selectedActivity.set(null);


    /*
     * Store the selected quiz result.
     */

    this.selectedQuizResult.set(result);


    /*
     * Wait for Angular to render the
     * selected quiz result section.
     */

    setTimeout(() => {

      const element =
        document.getElementById(
          'selected-quiz-result'
        );


      if (!element) {

        return;

      }


      /*
       * Keep the result below the fixed navbar.
       */

      const navbarOffset = 100;


      const position =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;


      window.scrollTo({

        top: position,

        behavior: 'smooth'

      });

    }, 0);

  }


  /* =====================================================
     CLOSE QUIZ RESULT
  ===================================================== */

  closeQuizResult(): void {

    this.selectedQuizResult.set(null);


    /*
     * Return to the top of the dashboard
     * where Quiz History is displayed.
     */

    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    });

  }


  /* =====================================================
     DELETE ONE QUIZ RESULT
  ===================================================== */

  removeQuizResult(
    id: string
  ): void {

    /*
     * Remove the result from UserState.
     */

    this.userState.removeQuizResult(id);


    /*
     * If the deleted result is currently open,
     * close the selected result view.
     */

    if (
      this.selectedQuizResult()?.id === id
    ) {

      this.selectedQuizResult.set(null);


      /*
       * Return to Quiz History.
       */

      setTimeout(() => {

        const element =
          document.querySelector(
            '.quiz-history-section'
          );


        if (!element) {

          return;

        }


        const navbarOffset = 100;


        const position =
          element.getBoundingClientRect().top +
          window.scrollY -
          navbarOffset;


        window.scrollTo({

          top: position,

          behavior: 'smooth'

        });

      }, 0);

    }

  }


  /* =====================================================
     CLEAR QUIZ HISTORY
  ===================================================== */

  clearQuizHistory(): void {

    /*
     * Clear all stored quiz results.
     */

    this.userState.clearQuizHistory();


    /*
     * Close any selected result.
     */

    this.selectedQuizResult.set(null);

  }


  /* =====================================================
     DASHBOARD STATS
  ===================================================== */

  readonly stats = [

    {
      value: '15+',
      label: 'Career Paths',
      icon: '💼'
    },

    {
      value: '10+',
      label: 'Learning Areas',
      icon: '📚'
    },

    {
      value: '15+',
      label: 'Career Roadmaps',
      icon: '🗺️'
    },

    {
      value: '10',
      label: 'Quiz Questions',
      icon: '🎯'
    }

  ];


  /* =====================================================
     QUICK ACTIONS
  ===================================================== */

  readonly quickActions: QuickAction[] = [

    {
      title: 'Take Smart Quiz',

      description:
        'Discover career paths based on your interests and preferences.',

      icon: '✨',

      route: '/quiz'
    },


    {
      title: 'Explore Careers',

      description:
        'Browse careers, skills, education and industries.',

      icon: '💼',

      route: '/careers'
    },


    {
      title: 'Explore Courses',

      description:
        'Find learning paths and courses for your goals.',

      icon: '📚',

      route: '/courses'
    },


    {
      title: 'Explore Exams',

      description:
        'Discover entrance and competitive examinations.',

      icon: '📝',

      route: '/exams'
    }

  ];


  /* =====================================================
     EXPLORER ITEMS
  ===================================================== */

  readonly exploreItems: ExploreItem[] = [

    {
      title: 'Career Explorer',

      category: 'CAREERS',

      description:
        'Understand different career paths, required skills, education and industries.',

      icon: '💼',

      route: '/careers',

      button: 'Explore Careers'
    },


    {
      title: 'Learning Paths',

      category: 'COURSES',

      description:
        'Explore courses and learning options to build the skills you need.',

      icon: '📚',

      route: '/courses',

      button: 'Explore Courses'
    },


    {
      title: 'College Finder',

      category: 'COLLEGES',

      description:
        'Explore colleges and discover educational opportunities.',

      icon: '🎓',

      route: '/colleges',

      button: 'Explore Colleges'
    },


    {
      title: 'Exam Explorer',

      category: 'EXAMS',

      description:
        'Explore exams, eligibility information and preparation pathways.',

      icon: '📝',

      route: '/exams',

      button: 'Explore Exams'
    }

  ];


  /* =====================================================
     FEATURED CAREERS
  ===================================================== */

  readonly featuredCareers: FeaturedCareer[] = [

    {
      title: 'Software Developer',

      category: 'Technology',

      icon: '💻',

      description:
        'Build software applications and solve technical problems.',

      route:
        '/career-detail/software-developer'
    },


    {
      title: 'Web Developer',

      category: 'Technology',

      icon: '🌐',

      description:
        'Create modern websites and web applications.',

      route:
        '/career-detail/web-developer'
    },


    {
      title: 'UI/UX Designer',

      category: 'Design',

      icon: '🎨',

      description:
        'Design useful and engaging digital experiences.',

      route:
        '/career-detail/ui-ux-designer'
    },


    {
      title: 'Business Analyst',

      category: 'Business',

      icon: '📊',

      description:
        'Analyze business problems and improve decision-making.',

      route:
        '/career-detail/business-analyst'
    },


    {
      title: 'Cybersecurity Analyst',

      category: 'Technology',

      icon: '🔐',

      description:
        'Help protect systems, networks and information.',

      route:
        '/career-detail/cybersecurity'
    },


    {
      title: 'Financial Analyst',

      category: 'Finance',

      icon: '📈',

      description:
        'Analyze financial information and business decisions.',

      route:
        '/career-detail/financial-analyst'
    }

  ];


  /* =====================================================
     TRACK FUNCTIONS
  ===================================================== */

  trackStat(
    index: number,
    stat: {
      value: string;
      label: string;
      icon: string;
    }
  ): string {

    return stat.label;

  }


  trackAction(
    index: number,
    action: QuickAction
  ): string {

    return action.title;

  }


  trackExplore(
    index: number,
    item: ExploreItem
  ): string {

    return item.title;

  }


  trackCareer(
    index: number,
    career: FeaturedCareer
  ): string {

    return career.title;

  }


  /* =====================================================
     SAVED TRACK FUNCTIONS
  ===================================================== */

  trackSavedCareer(
    index: number,
    career: UserCareer
  ): string {

    return career.id;

  }


  trackSavedCourse(
    index: number,
    course: SavedCourse
  ): string {

    return course.id;

  }


  trackSavedExam(
    index: number,
    exam: UserExam
  ): string {

    return exam.id;

  }


  trackSavedRoadmap(
    index: number,
    roadmap: UserRoadmap
  ): string {

    return roadmap.id;

  }


  /* =====================================================
     RECENT TRACK FUNCTIONS
  ===================================================== */

  trackRecentCareer(
    index: number,
    career: UserCareer
  ): string {

    return career.id;

  }


  trackRecentCourse(
    index: number,
    course: UserCourse
  ): string {

    return course.id;

  }


  trackRecentExam(
    index: number,
    exam: UserExam
  ): string {

    return exam.id;

  }


  trackRecentCollege(
    index: number,
    college: UserCollege
  ): string {

    return college.id;

  }


  trackRecentRoadmap(
    index: number,
    roadmap: UserRoadmap
  ): string {

    return roadmap.id;

  }


  /* =====================================================
     QUIZ TRACK FUNCTIONS
  ===================================================== */

  trackQuizResult(
    index: number,
    result: QuizResult
  ): string {

    return result.id;

  }


  trackQuizMatch(
    index: number,
    match: QuizMatch
  ): string {

    return match.id;

  }

}