import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  UserState,
  UserExam
} from '../../services/user-state';

import { Auth } from '../../services/auth';


interface Exam {
  id: string;
  name: string;
  shortName: string;
  conductingBody: string;
  category: string;
  level: string;
  mode: string;
  eligibility: string;
  icon: string;
  description: string;
  popularFor: string[];
}


@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './exams.html',
  styleUrl: './exams.css'
})
export class Exams {

  // =========================================================
  // SERVICES
  // =========================================================

  private readonly userState = inject(UserState);
  private readonly auth = inject(Auth);

  readonly isLoggedIn = this.auth.isLoggedIn;


  exams: Exam[] = [

    /* =====================================================
       ENGINEERING
       ===================================================== */

    {
      id: 'jee-main',
      name: 'Joint Entrance Examination Main',
      shortName: 'JEE Main',
      conductingBody: 'National Testing Agency',
      category: 'Engineering',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Class 12 or equivalent',
      icon: '⚙️',
      description:
        'A national-level entrance examination used for admission to undergraduate engineering and architecture programs at participating institutions.',
      popularFor: [
        'B.E.',
        'B.Tech',
        'B.Arch',
        'B.Planning'
      ]
    },

    {
      id: 'jee-advanced',
      name: 'Joint Entrance Examination Advanced',
      shortName: 'JEE Advanced',
      conductingBody: 'IITs',
      category: 'Engineering',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Eligible JEE Main candidates',
      icon: '🎓',
      description:
        'A national-level examination for admission to undergraduate programs at the Indian Institutes of Technology.',
      popularFor: [
        'IIT B.Tech',
        'BS Programs',
        'Dual Degree Programs'
      ]
    },

    {
      id: 'gate',
      name: 'Graduate Aptitude Test in Engineering',
      shortName: 'GATE',
      conductingBody: 'IITs / IISc',
      category: 'Engineering',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Eligible undergraduate degree students/graduates',
      icon: '💻',
      description:
        'A national examination assessing understanding of undergraduate-level subjects in engineering, technology, science and related areas.',
      popularFor: [
        'M.Tech',
        'M.E.',
        'PSU recruitment where applicable',
        'Research programs'
      ]
    },

    {
      id: 'bitsat',
      name: 'Birla Institute of Technology and Science Admission Test',
      shortName: 'BITSAT',
      conductingBody: 'BITS Pilani',
      category: 'Engineering',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Class 12 or equivalent',
      icon: '🔬',
      description:
        'An entrance examination for admission to undergraduate programs at participating BITS campuses.',
      popularFor: [
        'B.E.',
        'B.Pharm',
        'Integrated M.Sc.'
      ]
    },

    {
      id: 'viteee',
      name: 'VIT Engineering Entrance Examination',
      shortName: 'VITEEE',
      conductingBody: 'VIT',
      category: 'Engineering',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Class 12 or equivalent',
      icon: '🏫',
      description:
        'An entrance examination for undergraduate engineering admissions at VIT campuses.',
      popularFor: [
        'B.Tech',
        'Engineering programs'
      ]
    },

    {
      id: 'srmjeee',
      name: 'SRM Joint Engineering Entrance Examination',
      shortName: 'SRMJEEE',
      conductingBody: 'SRM Institute of Science and Technology',
      category: 'Engineering',
      level: 'University',
      mode: 'Computer Based Test',
      eligibility: 'Class 12 or equivalent',
      icon: '⚡',
      description:
        'An entrance examination associated with undergraduate engineering admissions at SRM institutions.',
      popularFor: [
        'B.Tech',
        'Engineering programs'
      ]
    },

    {
      id: 'met',
      name: 'Manipal Entrance Test',
      shortName: 'MET',
      conductingBody: 'Manipal Academy of Higher Education',
      category: 'Engineering',
      level: 'University',
      mode: 'Computer Based Test',
      eligibility: 'Class 12 or equivalent',
      icon: '🧪',
      description:
        'An entrance examination used for admission to selected undergraduate and other programs at Manipal institutions.',
      popularFor: [
        'B.Tech',
        'Engineering programs'
      ]
    },


    /* =====================================================
       MEDICAL
       ===================================================== */

    {
      id: 'neet-ug',
      name: 'National Eligibility cum Entrance Test Undergraduate',
      shortName: 'NEET UG',
      conductingBody: 'National Testing Agency',
      category: 'Medical',
      level: 'National',
      mode: 'Pen and Paper',
      eligibility: 'Class 12 with required subjects',
      icon: '🩺',
      description:
        'The national entrance examination for undergraduate medical and several other health-related programs.',
      popularFor: [
        'MBBS',
        'BDS',
        'AYUSH programs',
        'Other medical programs'
      ]
    },

    {
      id: 'neet-pg',
      name: 'National Eligibility cum Entrance Test Postgraduate',
      shortName: 'NEET PG',
      conductingBody: 'National Board of Examinations in Medical Sciences',
      category: 'Medical',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Recognized MBBS qualification',
      icon: '🧑‍⚕️',
      description:
        'A postgraduate medical entrance examination for eligible medical graduates.',
      popularFor: [
        'MD',
        'MS',
        'Postgraduate medical programs'
      ]
    },

    {
      id: 'neet-mds',
      name: 'National Eligibility cum Entrance Test Master of Dental Surgery',
      shortName: 'NEET MDS',
      conductingBody: 'National Board of Examinations in Medical Sciences',
      category: 'Medical',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Recognized BDS qualification',
      icon: '🦷',
      description:
        'A national-level entrance examination for postgraduate dental education.',
      popularFor: [
        'MDS',
        'Postgraduate dental programs'
      ]
    },


    /* =====================================================
       MANAGEMENT
       ===================================================== */

    {
      id: 'cat',
      name: 'Common Admission Test',
      shortName: 'CAT',
      conductingBody: 'IIMs',
      category: 'Management',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Bachelor degree or applicable equivalent qualification',
      icon: '📊',
      description:
        'A national-level management entrance examination used by IIMs and other participating institutions.',
      popularFor: [
        'MBA',
        'PGP',
        'Management programs'
      ]
    },

    {
      id: 'xat',
      name: 'Xavier Aptitude Test',
      shortName: 'XAT',
      conductingBody: 'XLRI',
      category: 'Management',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Bachelor degree or applicable equivalent qualification',
      icon: '📈',
      description:
        'A national-level management entrance examination accepted by XLRI and other participating institutions.',
      popularFor: [
        'MBA',
        'PGDM',
        'Management programs'
      ]
    },

    {
      id: 'mat',
      name: 'Management Aptitude Test',
      shortName: 'MAT',
      conductingBody: 'All India Management Association',
      category: 'Management',
      level: 'National',
      mode: 'Computer Based / Other modes as notified',
      eligibility: 'Bachelor degree',
      icon: '📋',
      description:
        'A management entrance examination accepted by participating business schools.',
      popularFor: [
        'MBA',
        'PGDM',
        'Management programs'
      ]
    },

    {
      id: 'cmat',
      name: 'Common Management Admission Test',
      shortName: 'CMAT',
      conductingBody: 'National Testing Agency',
      category: 'Management',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Bachelor degree',
      icon: '📊',
      description:
        'A national-level entrance examination for admission to participating management programs.',
      popularFor: [
        'MBA',
        'PGDM',
        'Management programs'
      ]
    },


    /* =====================================================
       LAW
       ===================================================== */

    {
      id: 'clat',
      name: 'Common Law Admission Test',
      shortName: 'CLAT',
      conductingBody: 'Consortium of National Law Universities',
      category: 'Law',
      level: 'National',
      mode: 'Offline',
      eligibility: 'Class 12 for UG programs',
      icon: '⚖️',
      description:
        'A national-level law entrance examination for participating National Law Universities and other institutions.',
      popularFor: [
        'BA LLB',
        'BBA LLB',
        'LLM'
      ]
    },

    {
      id: 'ailet',
      name: 'All India Law Entrance Test',
      shortName: 'AILET',
      conductingBody: 'National Law University Delhi',
      category: 'Law',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Class 12 for UG programs',
      icon: '⚖️',
      description:
        'An entrance examination for admission to specified law programs at National Law University Delhi.',
      popularFor: [
        'BA LLB',
        'LLM',
        'Ph.D.'
      ]
    },


    /* =====================================================
       SCIENCE
       ===================================================== */

    {
      id: 'iiser-aptitude-test',
      name: 'IISER Aptitude Test',
      shortName: 'IAT',
      conductingBody: 'IISERs',
      category: 'Science',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Class 12 or equivalent',
      icon: '🔬',
      description:
        'An entrance examination associated with undergraduate science education at IISERs.',
      popularFor: [
        'BS-MS',
        'Science programs',
        'Research-oriented education'
      ]
    },

    {
      id: 'niser-nest',
      name: 'National Entrance Screening Test',
      shortName: 'NEST',
      conductingBody: 'NISER / UM-DAE CEBS',
      category: 'Science',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Class 12 or equivalent',
      icon: '🧬',
      description:
        'An entrance examination for admission to integrated science education programs.',
      popularFor: [
        'Integrated M.Sc.',
        'Science education',
        'Research programs'
      ]
    },


    /* =====================================================
       ARCHITECTURE / DESIGN
       ===================================================== */

    {
      id: 'nata',
      name: 'National Aptitude Test in Architecture',
      shortName: 'NATA',
      conductingBody: 'Council of Architecture',
      category: 'Architecture',
      level: 'National',
      mode: 'Computer Based / As notified',
      eligibility: 'Class 12 or equivalent with required subjects',
      icon: '🏗️',
      description:
        'An aptitude examination used for admission-related requirements for architecture education.',
      popularFor: [
        'B.Arch',
        'Architecture programs'
      ]
    },

    {
      id: 'uceed',
      name: 'Undergraduate Common Entrance Examination for Design',
      shortName: 'UCEED',
      conductingBody: 'IIT Bombay',
      category: 'Design',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Class 12 or equivalent',
      icon: '🎨',
      description:
        'An entrance examination for undergraduate design programs at participating institutions.',
      popularFor: [
        'B.Des',
        'Design programs'
      ]
    },

    {
      id: 'ceed',
      name: 'Common Entrance Examination for Design',
      shortName: 'CEED',
      conductingBody: 'IIT Bombay',
      category: 'Design',
      level: 'National',
      mode: 'Computer Based / As notified',
      eligibility: 'Applicable degree qualification',
      icon: '✏️',
      description:
        'A national-level examination used for admission to postgraduate design programs at participating institutes.',
      popularFor: [
        'M.Des',
        'Design programs'
      ]
    },


    /* =====================================================
       OTHER
       ===================================================== */

    {
      id: 'cuet-ug',
      name: 'Common University Entrance Test Undergraduate',
      shortName: 'CUET UG',
      conductingBody: 'National Testing Agency',
      category: 'University',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Class 12 or equivalent',
      icon: '🎓',
      description:
        'A national entrance examination used by participating universities for undergraduate admissions.',
      popularFor: [
        'BA',
        'B.Sc',
        'B.Com',
        'BBA'
      ]
    },

    {
      id: 'cuet-pg',
      name: 'Common University Entrance Test Postgraduate',
      shortName: 'CUET PG',
      conductingBody: 'National Testing Agency',
      category: 'University',
      level: 'National',
      mode: 'Computer Based Test',
      eligibility: 'Relevant undergraduate degree',
      icon: '🎓',
      description:
        'A postgraduate entrance examination used by participating universities.',
      popularFor: [
        'MA',
        'M.Sc',
        'M.Com',
        'MCA'
      ]
    }

  ];


  /* =====================================================
     SEARCH / FILTER STATE
     ===================================================== */

  searchTerm = '';

  selectedCategory = 'All';

  categories = [
    'All',
    'Engineering',
    'Medical',
    'Management',
    'Law',
    'Science',
    'Architecture',
    'Design',
    'University'
  ];


  /* =====================================================
     FILTERED EXAMS
     ===================================================== */

  get filteredExams(): Exam[] {

    const search = this.searchTerm
      .trim()
      .toLowerCase();

    return this.exams.filter(exam => {

      const matchesSearch =
        !search ||
        exam.name.toLowerCase().includes(search) ||
        exam.shortName.toLowerCase().includes(search) ||
        exam.conductingBody.toLowerCase().includes(search) ||
        exam.category.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        exam.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });

  }


  /* =====================================================
     CATEGORY FILTER
     ===================================================== */

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }


  /* =====================================================
     RESET FILTERS
     ===================================================== */

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = 'All';
  }


  /* =====================================================
     SAVED EXAMS
     ===================================================== */

  isExamSaved(examId: string): boolean {
    return this.userState.isExamSaved(examId);
  }


  toggleSavedExam(
    exam: Exam,
    event?: Event
  ): void {

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    // -----------------------------------------------------
    // LOGIN REQUIRED
    // -----------------------------------------------------

    if (!this.isLoggedIn()) {
      return;
    }

    const savedExam: UserExam = {
      id: exam.id,
      title: exam.name,
      category: exam.category,
      icon: exam.icon,
      description: exam.description
    };

    this.userState.toggleSavedExam(savedExam);
  }


  saveExam(exam: Exam): void {

    // -----------------------------------------------------
    // LOGIN REQUIRED
    // -----------------------------------------------------

    if (!this.isLoggedIn()) {
      return;
    }

    const savedExam: UserExam = {
      id: exam.id,
      title: exam.name,
      category: exam.category,
      icon: exam.icon,
      description: exam.description
    };

    if (!this.userState.isExamSaved(exam.id)) {
      this.userState.toggleSavedExam(savedExam);
    }
  }


  removeSavedExam(examId: string): void {
    this.userState.removeSavedExam(examId);
  }


  /* =====================================================
     RECENT EXAM
     ===================================================== */

  addRecentExam(exam: Exam): void {

    const recentExam: UserExam = {
      id: exam.id,
      title: exam.name,
      category: exam.category,
      icon: exam.icon,
      description: exam.description
    };

    this.userState.addRecentExam(recentExam);
  }


  /* =====================================================
     GET EXAM BY ID
     ===================================================== */

  getExamById(examId: string): Exam | undefined {
    return this.exams.find(
      exam => exam.id === examId
    );
  }

}