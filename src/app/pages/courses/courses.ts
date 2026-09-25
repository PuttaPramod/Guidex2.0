import {
  Component,
  computed,
  inject,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  SavedCourse,
  UserState
} from '../../services/user-state';

import { Auth } from '../../services/auth';


interface Course {
  id: string;
  title: string;
  icon: string;
  category: string;
  description: string;
  duration: string;
  eligibility: string;
  skills: string[];
  careers: string[];
}


@Component({
  selector: 'app-courses',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],

  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {

  // =========================================================
  // SERVICES
  // =========================================================

  private readonly userState = inject(UserState);
  private readonly auth = inject(Auth);

  readonly isLoggedIn = this.auth.isLoggedIn;


  // =========================================================
  // SEARCH + FILTER
  // =========================================================

  searchQuery = signal('');

  selectedCategory = signal('All');


  // =========================================================
  // COURSE DATA
  // =========================================================

  courses: Course[] = [

    // -------------------------------------------------------
    // ENGINEERING
    // -------------------------------------------------------

    {
      id: 'computer-science-engineering',
      title: 'Computer Science Engineering',
      icon: '💻',
      category: 'Engineering',

      description:
        'Learn programming, software development, algorithms, databases and modern computing technologies.',

      duration: '4 Years',

      eligibility:
        '10+2 with Physics, Chemistry and Mathematics',

      skills: [
        'Programming',
        'Data Structures',
        'Web Development',
        'Databases'
      ],

      careers: [
        'Software Developer',
        'Web Developer',
        'Cloud Engineer',
        'Cybersecurity Analyst'
      ]
    },

    {
      id: 'information-technology',
      title: 'Information Technology',
      icon: '🌐',
      category: 'Engineering',

      description:
        'Study software systems, networking, databases and information technology infrastructure.',

      duration: '4 Years',

      eligibility:
        '10+2 with Physics, Chemistry and Mathematics',

      skills: [
        'Programming',
        'Networking',
        'Databases',
        'System Administration'
      ],

      careers: [
        'Software Developer',
        'System Administrator',
        'Cloud Engineer',
        'IT Analyst'
      ]
    },

    {
      id: 'electronics-communication-engineering',
      title: 'Electronics & Communication Engineering',
      icon: '📡',
      category: 'Engineering',

      description:
        'Explore electronics, communication systems, embedded systems and digital technologies.',

      duration: '4 Years',

      eligibility:
        '10+2 with Physics, Chemistry and Mathematics',

      skills: [
        'Electronics',
        'Communication Systems',
        'Embedded Systems',
        'Programming'
      ],

      careers: [
        'Embedded Engineer',
        'Electronics Engineer',
        'Network Engineer',
        'Hardware Engineer'
      ]
    },


    // -------------------------------------------------------
    // COMPUTER SCIENCE
    // -------------------------------------------------------

    {
      id: 'bca',
      title: 'Bachelor of Computer Applications',
      icon: '🖥️',
      category: 'Computer Science',

      description:
        'Build practical knowledge of programming, databases, software development and computer applications.',

      duration: '3 Years',

      eligibility:
        '10+2 from a recognized board',

      skills: [
        'Programming',
        'Web Development',
        'Databases',
        'Software Development'
      ],

      careers: [
        'Web Developer',
        'Software Developer',
        'Application Developer',
        'Technical Support'
      ]
    },

    {
      id: 'bsc-computer-science',
      title: 'B.Sc. Computer Science',
      icon: '🧑‍💻',
      category: 'Computer Science',

      description:
        'Study computer science fundamentals, programming, algorithms and software technologies.',

      duration: '3 Years',

      eligibility:
        '10+2 with relevant subjects',

      skills: [
        'Programming',
        'Algorithms',
        'Computer Networks',
        'Databases'
      ],

      careers: [
        'Software Developer',
        'Web Developer',
        'System Analyst',
        'Technical Support'
      ]
    },

    {
      id: 'mca',
      title: 'Master of Computer Applications',
      icon: '⌨️',
      category: 'Computer Science',

      description:
        'Advanced computer applications program covering software development, databases and modern technologies.',

      duration: '2 Years',

      eligibility:
        'Bachelor degree with required subjects',

      skills: [
        'Software Development',
        'Advanced Programming',
        'Databases',
        'Cloud Technologies'
      ],

      careers: [
        'Software Developer',
        'Application Developer',
        'Cloud Engineer',
        'Technical Consultant'
      ]
    },


    // -------------------------------------------------------
    // MEDICAL
    // -------------------------------------------------------

    {
      id: 'mbbs',
      title: 'Bachelor of Medicine and Bachelor of Surgery',
      icon: '🩺',
      category: 'Medical',

      description:
        'Professional medical education focused on medical sciences, diagnosis and patient care.',

      duration: '5.5 Years',

      eligibility:
        '10+2 with Physics, Chemistry and Biology',

      skills: [
        'Medical Knowledge',
        'Clinical Skills',
        'Patient Care',
        'Diagnosis'
      ],

      careers: [
        'Doctor',
        'Medical Officer',
        'Clinical Practitioner',
        'Medical Researcher'
      ]
    },

    {
      id: 'bsc-nursing',
      title: 'B.Sc. Nursing',
      icon: '🏥',
      category: 'Medical',

      description:
        'Develop professional nursing knowledge and practical skills for patient care and healthcare environments.',

      duration: '4 Years',

      eligibility:
        '10+2 with Physics, Chemistry and Biology',

      skills: [
        'Patient Care',
        'Clinical Skills',
        'Communication',
        'Healthcare'
      ],

      careers: [
        'Nurse',
        'Clinical Nurse',
        'Community Health Nurse',
        'Nursing Educator'
      ]
    },

    {
      id: 'b-pharm',
      title: 'Bachelor of Pharmacy',
      icon: '💊',
      category: 'Medical',

      description:
        'Study medicines, pharmaceutical sciences, drug safety and healthcare applications.',

      duration: '4 Years',

      eligibility:
        '10+2 with Physics, Chemistry and Biology or Mathematics',

      skills: [
        'Pharmacology',
        'Drug Analysis',
        'Pharmaceutical Sciences',
        'Patient Care'
      ],

      careers: [
        'Pharmacist',
        'Clinical Pharmacist',
        'Drug Inspector',
        'Pharmaceutical Researcher'
      ]
    },


    // -------------------------------------------------------
    // COMMERCE
    // -------------------------------------------------------

    {
      id: 'bcom',
      title: 'Bachelor of Commerce',
      icon: '📊',
      category: 'Commerce',

      description:
        'Study accounting, finance, taxation, economics and business fundamentals.',

      duration: '3 Years',

      eligibility:
        '10+2 from a recognized board',

      skills: [
        'Accounting',
        'Finance',
        'Taxation',
        'Business'
      ],

      careers: [
        'Chartered Accountant',
        'Financial Analyst',
        'Accountant',
        'Finance Executive'
      ]
    },

    {
      id: 'bba',
      title: 'Bachelor of Business Administration',
      icon: '💼',
      category: 'Management',

      description:
        'Learn business management, marketing, finance, operations and organizational skills.',

      duration: '3 Years',

      eligibility:
        '10+2 from a recognized board',

      skills: [
        'Management',
        'Marketing',
        'Finance',
        'Leadership'
      ],

      careers: [
        'Business Analyst',
        'Management Trainee',
        'Marketing Executive',
        'Entrepreneur'
      ]
    },

    {
      id: 'mba',
      title: 'Master of Business Administration',
      icon: '📈',
      category: 'Management',

      description:
        'Advanced management education covering business strategy, leadership, finance and marketing.',

      duration: '2 Years',

      eligibility:
        'Bachelor degree from a recognized institution',

      skills: [
        'Business Strategy',
        'Leadership',
        'Finance',
        'Marketing'
      ],

      careers: [
        'Business Analyst',
        'Finance Manager',
        'Marketing Manager',
        'Business Consultant'
      ]
    },


    // -------------------------------------------------------
    // ARTS & HUMANITIES
    // -------------------------------------------------------

    {
      id: 'ba-english',
      title: 'B.A. English',
      icon: '📚',
      category: 'Arts & Humanities',

      description:
        'Develop strong knowledge of literature, language, communication and critical thinking.',

      duration: '3 Years',

      eligibility:
        '10+2 from a recognized board',

      skills: [
        'Communication',
        'Writing',
        'Critical Thinking',
        'Research'
      ],

      careers: [
        'Content Writer',
        'Editor',
        'Teacher',
        'Copywriter'
      ]
    },

    {
      id: 'ba-psychology',
      title: 'B.A. Psychology',
      icon: '🧠',
      category: 'Arts & Humanities',

      description:
        'Study human behavior, psychological processes, research and social interactions.',

      duration: '3 Years',

      eligibility:
        '10+2 from a recognized board',

      skills: [
        'Observation',
        'Research',
        'Communication',
        'Empathy'
      ],

      careers: [
        'Psychologist',
        'Counsellor',
        'Research Assistant',
        'HR Professional'
      ]
    },


    // -------------------------------------------------------
    // DESIGN
    // -------------------------------------------------------

    {
      id: 'b-des',
      title: 'Bachelor of Design',
      icon: '🎨',
      category: 'Design',

      description:
        'Develop creative and practical design skills for digital products, visual communication and user experiences.',

      duration: '4 Years',

      eligibility:
        '10+2 from a recognized board',

      skills: [
        'Visual Design',
        'UI/UX',
        'Prototyping',
        'Creative Thinking'
      ],

      careers: [
        'UI/UX Designer',
        'Product Designer',
        'Graphic Designer',
        'Visual Designer'
      ]
    }

  ];


  // =========================================================
  // CATEGORIES
  // =========================================================

  categories = [
    'All',
    'Engineering',
    'Computer Science',
    'Medical',
    'Commerce',
    'Management',
    'Arts & Humanities',
    'Design'
  ];


  // =========================================================
  // FILTERED COURSES
  // =========================================================

  filteredCourses = computed(() => {

    const query = this.searchQuery()
      .trim()
      .toLowerCase();

    const category = this.selectedCategory();

    return this.courses.filter(course => {

      const matchesCategory =
        category === 'All' ||
        course.category === category;

      const matchesSearch =
        !query ||
        course.title
          .toLowerCase()
          .includes(query) ||

        course.description
          .toLowerCase()
          .includes(query) ||

        course.skills.some(skill =>
          skill.toLowerCase().includes(query)
        ) ||

        course.careers.some(career =>
          career.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;

    });

  });


  // =========================================================
  // CATEGORY SELECTION
  // =========================================================

  selectCategory(category: string): void {

    this.selectedCategory.set(category);

  }


  // =========================================================
  // CLEAR SEARCH
  // =========================================================

  clearSearch(): void {

    this.searchQuery.set('');

  }


  // =========================================================
  // RESET FILTERS
  // =========================================================

  resetFilters(): void {

    this.searchQuery.set('');

    this.selectedCategory.set('All');

  }


  // =========================================================
  // SAVED COURSE
  // =========================================================

  isCourseSaved(courseId: string): boolean {

    return this.userState.isCourseSaved(
      courseId
    );

  }


  toggleSavedCourse(
    course: Course,
    event: Event
  ): void {

    event.preventDefault();
    event.stopPropagation();

    // -------------------------------------------------------
    // LOGIN REQUIRED
    // -------------------------------------------------------

    if (!this.isLoggedIn()) {
      return;
    }

    const savedCourse: SavedCourse = {

      id: course.id,

      title: course.title,

      category: course.category,

      icon: course.icon,

      description: course.description,

      /*
       * Keep the existing progress value in UserState.
       * Progress is no longer displayed on this page.
       */
      progress:
        this.userState.getCourseProgress(
          course.id
        )

    };

    this.userState.toggleSavedCourse(
      savedCourse
    );

  }


  // =========================================================
  // TRACK BY
  // =========================================================

  trackByCourse(
    index: number,
    course: Course
  ): string {

    return course.id;

  }

}