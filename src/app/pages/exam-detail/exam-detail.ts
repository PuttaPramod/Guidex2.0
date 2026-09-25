import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserState, UserExam } from '../../services/user-state';

interface ExamDetailData {
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

  purpose: string;
  subjects: string[];
  examPattern: string[];
  preparationTips: string[];
  importantPoints: string[];
  suitableFor: string[];
}

@Component({
  selector: 'app-exam-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './exam-detail.html',
  styleUrl: './exam-detail.css'
})
export class ExamDetail implements OnInit {

  examId = signal('');

  exam = signal<ExamDetailData | null>(null);


  /*
   * =========================================================
   * EXAM DATA
   * =========================================================
   */

  exams: ExamDetailData[] = [

    /* =====================================================
       JEE MAIN
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
        'JEE Main is a national-level entrance examination associated with undergraduate admissions in engineering, architecture and planning programs at participating institutions.',

      purpose:
        'JEE Main is primarily used for undergraduate engineering admissions and also serves as an eligibility route for JEE Advanced for candidates meeting the applicable criteria.',

      popularFor: [
        'B.E.',
        'B.Tech',
        'B.Arch',
        'B.Planning'
      ],

      subjects: [
        'Physics',
        'Chemistry',
        'Mathematics'
      ],

      examPattern: [
        'Computer-based examination',
        'Multiple-choice questions',
        'Numerical-value questions',
        'Subject-wise sections',
        'Negative marking may apply according to the notified pattern'
      ],

      preparationTips: [
        'Build strong fundamentals in Physics, Chemistry and Mathematics.',
        'Follow the official syllabus carefully.',
        'Practice previous examination questions.',
        'Take timed mock tests.',
        'Revise formulas and important concepts regularly.'
      ],

      importantPoints: [
        'Check the latest NTA notification before applying.',
        'Verify eligibility requirements for the relevant session.',
        'Keep application documents ready before registration.',
        'Check examination dates and city information from the official portal.'
      ],

      suitableFor: [
        'Students interested in engineering',
        'Students targeting NITs and other participating institutions',
        'Students planning to appear for JEE Advanced where eligible',
        'Students interested in architecture or planning through applicable routes'
      ]
    },


    /* =====================================================
       JEE ADVANCED
       ===================================================== */

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
        'JEE Advanced is a national-level entrance examination associated with undergraduate admissions to the Indian Institutes of Technology.',

      purpose:
        'The examination is used for admission to undergraduate and integrated programs offered by participating IITs, subject to the applicable admission rules.',

      popularFor: [
        'IIT B.Tech',
        'BS Programs',
        'Dual Degree Programs'
      ],

      subjects: [
        'Physics',
        'Chemistry',
        'Mathematics'
      ],

      examPattern: [
        'Computer-based examination',
        'Multiple sections',
        'Questions designed to test conceptual understanding',
        'Different question formats may be used',
        'Marking scheme is specified in the examination instructions'
      ],

      preparationTips: [
        'Develop strong conceptual understanding.',
        'Practice advanced-level problems.',
        'Solve previous JEE Advanced papers.',
        'Improve speed without sacrificing accuracy.',
        'Regularly revise difficult concepts.'
      ],

      importantPoints: [
        'Check the official eligibility criteria.',
        'JEE Main qualification requirements apply according to the current rules.',
        'Read the current examination brochure carefully.',
        'Check the official examination schedule before planning preparation.'
      ],

      suitableFor: [
        'Students targeting IITs',
        'Students interested in advanced engineering education',
        'Students comfortable with higher-level problem solving',
        'Students aiming for undergraduate programs at IITs'
      ]
    },


    /* =====================================================
       GATE
       ===================================================== */

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
        'GATE is a national examination that assesses understanding of undergraduate-level subjects in engineering, technology, science and related areas.',

      purpose:
        'GATE scores may be used for postgraduate admissions, research opportunities and recruitment processes where an organization accepts GATE scores.',

      popularFor: [
        'M.Tech',
        'M.E.',
        'PSU recruitment where applicable',
        'Research programs'
      ],

      subjects: [
        'General Aptitude',
        'Engineering Mathematics where applicable',
        'Subject-specific technical section'
      ],

      examPattern: [
        'Computer-based examination',
        'Multiple-choice questions',
        'Multiple-select questions',
        'Numerical-answer questions',
        'Marking scheme depends on question type'
      ],

      preparationTips: [
        'Understand the complete syllabus.',
        'Strengthen core engineering concepts.',
        'Solve previous GATE papers.',
        'Practice numerical problems regularly.',
        'Take full-length mock examinations.'
      ],

      importantPoints: [
        'Choose the appropriate GATE paper.',
        'Check eligibility for the current examination year.',
        'Verify the latest syllabus.',
        'Check the official notification for score validity and admission rules.'
      ],

      suitableFor: [
        'Engineering graduates',
        'Engineering students',
        'Students targeting M.Tech or M.E.',
        'Candidates interested in research',
        'Candidates applying to organizations accepting GATE scores'
      ]
    },


    /* =====================================================
       BITSAT
       ===================================================== */

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
        'BITSAT is an entrance examination associated with undergraduate admissions at participating BITS campuses.',

      purpose:
        'The examination is used as part of the admission process for selected undergraduate programs at BITS institutions.',

      popularFor: [
        'B.E.',
        'B.Pharm',
        'Integrated M.Sc.'
      ],

      subjects: [
        'Physics',
        'Chemistry',
        'Mathematics / Biology',
        'English Proficiency',
        'Logical Reasoning'
      ],

      examPattern: [
        'Computer-based examination',
        'Objective-type questions',
        'Multiple subject sections',
        'Time-bound examination'
      ],

      preparationTips: [
        'Strengthen Class 11 and 12 fundamentals.',
        'Practice objective questions.',
        'Work on speed and accuracy.',
        'Revise Physics and Chemistry concepts regularly.',
        'Attempt mock tests under timed conditions.'
      ],

      importantPoints: [
        'Check the current BITS admission brochure.',
        'Verify program-specific eligibility.',
        'Check application and examination dates.',
        'Review campus and program preferences carefully.'
      ],

      suitableFor: [
        'Students interested in BITS programs',
        'Engineering aspirants',
        'Students interested in integrated science programs',
        'Students seeking undergraduate education at BITS'
      ]
    },


    /* =====================================================
       VITEEE
       ===================================================== */

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
        'VITEEE is an entrance examination associated with undergraduate engineering admissions at VIT campuses.',

      purpose:
        'The examination forms part of the admission process for eligible undergraduate engineering programs offered by VIT.',

      popularFor: [
        'B.Tech',
        'Engineering programs'
      ],

      subjects: [
        'Physics',
        'Chemistry',
        'Mathematics / Biology',
        'English',
        'Aptitude'
      ],

      examPattern: [
        'Computer-based examination',
        'Objective questions',
        'Multiple subject sections',
        'Time-bound test'
      ],

      preparationTips: [
        'Study the prescribed syllabus.',
        'Practice objective questions.',
        'Improve calculation speed.',
        'Solve mock tests regularly.',
        'Revise important formulas.'
      ],

      importantPoints: [
        'Check the current VIT admission notification.',
        'Verify eligibility requirements.',
        'Check application deadlines.',
        'Review available campuses and programs.'
      ],

      suitableFor: [
        'Engineering aspirants',
        'Students interested in VIT',
        'Students targeting B.Tech programs'
      ]
    },


    /* =====================================================
       SRMJEEE
       ===================================================== */

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
        'SRMJEEE is associated with undergraduate engineering admissions at SRM institutions.',

      purpose:
        'The examination forms part of the admission process for eligible engineering programs.',

      popularFor: [
        'B.Tech',
        'Engineering programs'
      ],

      subjects: [
        'Physics',
        'Chemistry',
        'Mathematics / Biology',
        'English',
        'Aptitude'
      ],

      examPattern: [
        'Computer-based examination',
        'Objective questions',
        'Subject-wise sections',
        'Time-bound examination'
      ],

      preparationTips: [
        'Understand the prescribed syllabus.',
        'Practice objective questions.',
        'Take regular mock tests.',
        'Focus on speed and accuracy.',
        'Revise important concepts.'
      ],

      importantPoints: [
        'Check the current SRM admission notification.',
        'Verify program-specific eligibility.',
        'Check application deadlines.',
        'Review the current examination pattern.'
      ],

      suitableFor: [
        'Engineering aspirants',
        'Students interested in SRM',
        'Students targeting B.Tech programs'
      ]
    },


    /* =====================================================
       MET
       ===================================================== */

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
        'MET is an entrance examination associated with admission to selected undergraduate and other programs at Manipal institutions.',

      purpose:
        'The examination is used as part of the admission process for selected programs.',

      popularFor: [
        'B.Tech',
        'Engineering programs'
      ],

      subjects: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'English'
      ],

      examPattern: [
        'Computer-based examination',
        'Objective questions',
        'Subject-wise sections',
        'Time-bound examination'
      ],

      preparationTips: [
        'Cover the prescribed syllabus.',
        'Practice objective questions.',
        'Work on speed and accuracy.',
        'Take mock tests.',
        'Revise concepts frequently.'
      ],

      importantPoints: [
        'Check the current Manipal admission notification.',
        'Verify program eligibility.',
        'Check application dates.',
        'Review the latest examination pattern.'
      ],

      suitableFor: [
        'Engineering aspirants',
        'Students interested in Manipal programs',
        'Students targeting B.Tech'
      ]
    },


    /* =====================================================
       NEET UG
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
        'NEET UG is the national entrance examination used for undergraduate medical education and several other health-related programs.',

      purpose:
        'The examination is used for admissions covered by the applicable NEET UG admission framework.',

      popularFor: [
        'MBBS',
        'BDS',
        'AYUSH programs',
        'Other medical programs'
      ],

      subjects: [
        'Physics',
        'Chemistry',
        'Biology'
      ],

      examPattern: [
        'Pen-and-paper examination',
        'Multiple-choice questions',
        'Physics section',
        'Chemistry section',
        'Biology section'
      ],

      preparationTips: [
        'Study the prescribed syllabus thoroughly.',
        'Build strong Biology fundamentals.',
        'Practice Physics numerical problems.',
        'Revise Chemistry regularly.',
        'Take full-length mock tests.'
      ],

      importantPoints: [
        'Check the current NTA notification.',
        'Verify eligibility requirements.',
        'Check application deadlines.',
        'Review the current examination pattern and marking scheme.'
      ],

      suitableFor: [
        'Medical aspirants',
        'Students targeting MBBS',
        'Students targeting BDS',
        'Students interested in applicable health science programs'
      ]
    },


    /* =====================================================
       NEET PG
       ===================================================== */

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
        'NEET PG is a postgraduate medical entrance examination for eligible medical graduates.',

      purpose:
        'The examination is used in the applicable postgraduate medical admission process.',

      popularFor: [
        'MD',
        'MS',
        'Postgraduate medical programs'
      ],

      subjects: [
        'Pre-clinical subjects',
        'Para-clinical subjects',
        'Clinical subjects'
      ],

      examPattern: [
        'Computer-based examination',
        'Multiple-choice questions',
        'Medical subject sections',
        'Time-bound examination'
      ],

      preparationTips: [
        'Build strong clinical concepts.',
        'Revise standard medical subjects.',
        'Solve previous questions where appropriate.',
        'Practice timed mock tests.',
        'Maintain a structured revision schedule.'
      ],

      importantPoints: [
        'Check the current NBEMS notification.',
        'Verify internship and eligibility requirements.',
        'Check the current examination schedule.',
        'Review applicable counselling requirements.'
      ],

      suitableFor: [
        'Medical graduates',
        'MBBS graduates',
        'Students targeting postgraduate medical education'
      ]
    },


    /* =====================================================
       NEET MDS
       ===================================================== */

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
        'NEET MDS is a national-level entrance examination for postgraduate dental education.',

      purpose:
        'The examination is used for applicable postgraduate dental admissions.',

      popularFor: [
        'MDS',
        'Postgraduate dental programs'
      ],

      subjects: [
        'Basic sciences',
        'Clinical dental sciences',
        'Medical subjects'
      ],

      examPattern: [
        'Computer-based examination',
        'Multiple-choice questions',
        'Dental subject coverage',
        'Time-bound examination'
      ],

      preparationTips: [
        'Revise BDS-level concepts.',
        'Focus on clinical subjects.',
        'Practice objective questions.',
        'Use timed mock tests.',
        'Review important concepts repeatedly.'
      ],

      importantPoints: [
        'Check the latest NBEMS notification.',
        'Verify BDS and internship requirements.',
        'Check the current schedule.',
        'Review counselling requirements.'
      ],

      suitableFor: [
        'BDS graduates',
        'Dental graduates',
        'Students targeting MDS'
      ]
    },


    /* =====================================================
       CAT
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
        'CAT is a national-level management entrance examination used by IIMs and other participating institutions.',

      purpose:
        'CAT scores are used as part of admission processes for participating postgraduate management programs.',

      popularFor: [
        'MBA',
        'PGP',
        'Management programs'
      ],

      subjects: [
        'Verbal Ability and Reading Comprehension',
        'Data Interpretation',
        'Logical Reasoning',
        'Quantitative Ability'
      ],

      examPattern: [
        'Computer-based examination',
        'Multiple sections',
        'Multiple-choice questions',
        'Non-MCQ questions may be included',
        'Sectional time limits may apply'
      ],

      preparationTips: [
        'Read newspapers and quality articles regularly.',
        'Build quantitative fundamentals.',
        'Practice logical reasoning sets.',
        'Improve reading comprehension.',
        'Take sectional and full-length mocks.'
      ],

      importantPoints: [
        'Check the current CAT notification.',
        'Verify IIM and participating-institute eligibility.',
        'Check application dates.',
        'Review institute-specific admission criteria.'
      ],

      suitableFor: [
        'Management aspirants',
        'Graduates targeting MBA programs',
        'Students interested in IIMs',
        'Candidates targeting participating business schools'
      ]
    },


    /* =====================================================
       XAT
       ===================================================== */

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
        'XAT is a national-level management entrance examination accepted by XLRI and other participating institutions.',

      purpose:
        'XAT scores are used as part of admission processes for participating management programs.',

      popularFor: [
        'MBA',
        'PGDM',
        'Management programs'
      ],

      subjects: [
        'Verbal Ability and Logical Reasoning',
        'Decision Making',
        'Quantitative Ability',
        'Data Interpretation'
      ],

      examPattern: [
        'Computer-based examination',
        'Multiple sections',
        'Objective questions',
        'Time-bound sections'
      ],

      preparationTips: [
        'Practice decision-making questions.',
        'Improve reading comprehension.',
        'Strengthen quantitative concepts.',
        'Solve previous papers.',
        'Take timed mock tests.'
      ],

      importantPoints: [
        'Check the latest XAT notification.',
        'Review participating institute requirements.',
        'Check application deadlines.',
        'Review the latest exam pattern.'
      ],

      suitableFor: [
        'MBA aspirants',
        'Management graduates',
        'Students targeting XLRI',
        'Candidates targeting participating institutes'
      ]
    },


    /* =====================================================
       MAT
       ===================================================== */

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
        'MAT is a management entrance examination accepted by participating business schools.',

      purpose:
        'MAT scores can be used as part of admission processes at participating management institutions.',

      popularFor: [
        'MBA',
        'PGDM',
        'Management programs'
      ],

      subjects: [
        'Language Comprehension',
        'Mathematical Skills',
        'Data Analysis',
        'Intelligence and Critical Reasoning',
        'Economic and Business Environment'
      ],

      examPattern: [
        'Objective questions',
        'Multiple sections',
        'Mode depends on the current examination option',
        'Time-bound examination'
      ],

      preparationTips: [
        'Practice quantitative aptitude.',
        'Improve vocabulary and comprehension.',
        'Practice data interpretation.',
        'Follow business and current-affairs topics.',
        'Attempt mock tests.'
      ],

      importantPoints: [
        'Check the current AIMA notification.',
        'Review available examination modes.',
        'Check participating institutions.',
        'Verify application dates.'
      ],

      suitableFor: [
        'MBA aspirants',
        'PGDM aspirants',
        'Management students',
        'Candidates applying to participating business schools'
      ]
    },


    /* =====================================================
       CMAT
       ===================================================== */

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
        'CMAT is a national-level management entrance examination for participating management institutions.',

      purpose:
        'CMAT scores may be used by participating institutions for management admissions.',

      popularFor: [
        'MBA',
        'PGDM',
        'Management programs'
      ],

      subjects: [
        'Quantitative Techniques',
        'Logical Reasoning',
        'Language Comprehension',
        'General Awareness',
        'Innovation and Entrepreneurship'
      ],

      examPattern: [
        'Computer-based examination',
        'Objective questions',
        'Multiple sections',
        'Time-bound examination'
      ],

      preparationTips: [
        'Build quantitative fundamentals.',
        'Practice logical reasoning.',
        'Improve reading comprehension.',
        'Follow current business topics.',
        'Take mock examinations.'
      ],

      importantPoints: [
        'Check the latest NTA notification.',
        'Verify eligibility.',
        'Check participating institutions.',
        'Review the current exam pattern.'
      ],

      suitableFor: [
        'Management aspirants',
        'MBA applicants',
        'PGDM applicants',
        'Candidates targeting participating institutes'
      ]
    },


    /* =====================================================
       CLAT
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
        'CLAT is a national-level law entrance examination associated with participating National Law Universities and other institutions.',

      purpose:
        'The examination is used for admission to participating undergraduate and postgraduate law programs.',

      popularFor: [
        'BA LLB',
        'BBA LLB',
        'LLM'
      ],

      subjects: [
        'English Language',
        'Current Affairs',
        'Legal Reasoning',
        'Logical Reasoning',
        'Quantitative Techniques'
      ],

      examPattern: [
        'Offline examination',
        'Multiple-choice questions',
        'Passage-based questions',
        'Multiple subject sections',
        'Negative marking may apply according to the notified pattern'
      ],

      preparationTips: [
        'Read newspapers regularly.',
        'Improve reading comprehension.',
        'Study basic legal reasoning concepts.',
        'Practice logical reasoning.',
        'Solve previous examination papers.'
      ],

      importantPoints: [
        'Check the current Consortium notification.',
        'Verify eligibility for UG or PG programs.',
        'Check application deadlines.',
        'Review participating universities.'
      ],

      suitableFor: [
        'Law aspirants',
        'Students after Class 12',
        'Students targeting National Law Universities',
        'Candidates interested in integrated law programs'
      ]
    },


    /* =====================================================
       AILET
       ===================================================== */

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
        'AILET is an entrance examination for specified law programs at National Law University Delhi.',

      purpose:
        'The examination forms part of the admission process for eligible programs at NLU Delhi.',

      popularFor: [
        'BA LLB',
        'LLM',
        'Ph.D.'
      ],

      subjects: [
        'English Language',
        'Current Affairs',
        'General Knowledge',
        'Logical Reasoning'
      ],

      examPattern: [
        'Computer-based examination',
        'Objective questions',
        'Multiple sections',
        'Time-bound examination'
      ],

      preparationTips: [
        'Develop strong reading comprehension.',
        'Follow current affairs.',
        'Practice logical reasoning.',
        'Solve previous examination questions.',
        'Take mock tests.'
      ],

      importantPoints: [
        'Check the current NLU Delhi notification.',
        'Verify program-specific eligibility.',
        'Check application dates.',
        'Review the current examination pattern.'
      ],

      suitableFor: [
        'Law aspirants',
        'Students targeting NLU Delhi',
        'Students interested in undergraduate law'
      ]
    },


    /* =====================================================
       IISER IAT
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
        'IAT is an entrance examination associated with undergraduate science education at IISERs.',

      purpose:
        'The examination is used for applicable admissions to IISER programs under the current admission framework.',

      popularFor: [
        'BS-MS',
        'Science programs',
        'Research-oriented education'
      ],

      subjects: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'Biology'
      ],

      examPattern: [
        'Computer-based examination',
        'Objective questions',
        'Science subject sections',
        'Time-bound examination'
      ],

      preparationTips: [
        'Build strong science fundamentals.',
        'Revise Class 11 and 12 concepts.',
        'Practice objective questions.',
        'Attempt mock tests.',
        'Focus on conceptual understanding.'
      ],

      importantPoints: [
        'Check the current IISER admission notification.',
        'Verify eligibility.',
        'Check available programs.',
        'Review current admission rules.'
      ],

      suitableFor: [
        'Science students',
        'Research-oriented students',
        'Students interested in basic sciences',
        'Students interested in integrated science programs'
      ]
    },


    /* =====================================================
       NEST
       ===================================================== */

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
        'NEST is an entrance examination associated with integrated science education programs.',

      purpose:
        'The examination is used for admission to applicable integrated science programs.',

      popularFor: [
        'Integrated M.Sc.',
        'Science education',
        'Research programs'
      ],

      subjects: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'Biology'
      ],

      examPattern: [
        'Computer-based examination',
        'Objective questions',
        'Science-focused sections',
        'Time-bound examination'
      ],

      preparationTips: [
        'Strengthen science fundamentals.',
        'Practice objective questions.',
        'Revise Class 11 and 12 topics.',
        'Solve mock papers.',
        'Focus on conceptual clarity.'
      ],

      importantPoints: [
        'Check the current NEST notification.',
        'Verify eligibility.',
        'Review participating institutions.',
        'Check the latest examination pattern.'
      ],

      suitableFor: [
        'Science students',
        'Research aspirants',
        'Students interested in integrated science education'
      ]
    },


    /* =====================================================
       NATA
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
        'NATA is an aptitude examination associated with admission-related requirements for architecture education.',

      purpose:
        'The examination assesses aptitude relevant to architecture education and is used under the applicable admission framework.',

      popularFor: [
        'B.Arch',
        'Architecture programs'
      ],

      subjects: [
        'Mathematics',
        'General Aptitude',
        'Drawing / Visual Aptitude',
        'Architecture-related aptitude'
      ],

      examPattern: [
        'Computer-based components',
        'Aptitude-based questions',
        'Drawing or visual aptitude components where applicable',
        'Current pattern is specified by the conducting authority'
      ],

      preparationTips: [
        'Practice architectural visualization.',
        'Improve drawing skills.',
        'Study mathematics fundamentals.',
        'Practice aptitude questions.',
        'Develop spatial reasoning.'
      ],

      importantPoints: [
        'Check the latest Council of Architecture notification.',
        'Verify current eligibility requirements.',
        'Check the applicable admission rules.',
        'Review the current examination pattern.'
      ],

      suitableFor: [
        'Architecture aspirants',
        'Students interested in B.Arch',
        'Students interested in design and built environments'
      ]
    },


    /* =====================================================
       UCEED
       ===================================================== */

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
        'UCEED is an entrance examination for undergraduate design programs at participating institutions.',

      purpose:
        'The examination is used for admission to applicable undergraduate design programs.',

      popularFor: [
        'B.Des',
        'Design programs'
      ],

      subjects: [
        'Visualization and Spatial Reasoning',
        'Observation and Design Sensitivity',
        'Environment and Society',
        'Analytical and Logical Reasoning',
        'Language'
      ],

      examPattern: [
        'Computer-based examination',
        'Aptitude-oriented questions',
        'Multiple question formats',
        'Design and visual reasoning'
      ],

      preparationTips: [
        'Practice visual reasoning.',
        'Develop observation skills.',
        'Practice logical reasoning.',
        'Improve design awareness.',
        'Solve previous UCEED papers.'
      ],

      importantPoints: [
        'Check the current UCEED notification.',
        'Verify participating institutions.',
        'Review current eligibility criteria.',
        'Check the current examination pattern.'
      ],

      suitableFor: [
        'Design aspirants',
        'Students interested in B.Des',
        'Students interested in product and visual design'
      ]
    },


    /* =====================================================
       CEED
       ===================================================== */

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
        'CEED is a national-level examination associated with postgraduate design admissions at participating institutes.',

      purpose:
        'The examination is used for admission-related processes for postgraduate design education.',

      popularFor: [
        'M.Des',
        'Design programs'
      ],

      subjects: [
        'Visualization',
        'Environmental and Social Awareness',
        'Analytical and Logical Reasoning',
        'Language',
        'Creativity and Design Aptitude'
      ],

      examPattern: [
        'Multiple examination parts',
        'Objective components',
        'Design aptitude assessment',
        'Current pattern is specified by the conducting authority'
      ],

      preparationTips: [
        'Practice sketching and visualization.',
        'Develop observation skills.',
        'Improve logical reasoning.',
        'Study design fundamentals.',
        'Solve previous CEED papers.'
      ],

      importantPoints: [
        'Check the current CEED notification.',
        'Verify institute-specific eligibility.',
        'Review current admission requirements.',
        'Check the latest examination pattern.'
      ],

      suitableFor: [
        'Design graduates',
        'M.Des aspirants',
        'Students interested in postgraduate design education'
      ]
    },


    /* =====================================================
       CUET UG
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
        'CUET UG is a national entrance examination used by participating universities for undergraduate admissions.',

      purpose:
        'The examination provides an entrance route for eligible undergraduate programs at participating universities.',

      popularFor: [
        'BA',
        'B.Sc',
        'B.Com',
        'BBA'
      ],

      subjects: [
        'Language subjects',
        'Domain subjects',
        'General Aptitude Test where applicable'
      ],

      examPattern: [
        'Computer-based examination',
        'Subject selection depends on the program',
        'Objective questions',
        'Current pattern is specified by NTA'
      ],

      preparationTips: [
        'Understand university and program requirements.',
        'Choose subjects carefully.',
        'Revise Class 12 concepts.',
        'Practice objective questions.',
        'Take timed mock tests.'
      ],

      importantPoints: [
        'Check participating universities.',
        'Review program-specific subject requirements.',
        'Check the latest NTA notification.',
        'Verify application dates.'
      ],

      suitableFor: [
        'Class 12 students',
        'Students targeting participating central universities',
        'Students interested in undergraduate programs'
      ]
    },


    /* =====================================================
       CUET PG
       ===================================================== */

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
        'CUET PG is a postgraduate entrance examination used by participating universities.',

      purpose:
        'The examination provides an entrance route to applicable postgraduate programs at participating universities.',

      popularFor: [
        'MA',
        'M.Sc',
        'M.Com',
        'MCA'
      ],

      subjects: [
        'Program-specific subject areas',
        'Domain knowledge',
        'Subject-specific concepts'
      ],

      examPattern: [
        'Computer-based examination',
        'Subject-specific question paper',
        'Objective questions',
        'Current pattern is specified by NTA'
      ],

      preparationTips: [
        'Understand the target program syllabus.',
        'Revise undergraduate-level concepts.',
        'Practice objective questions.',
        'Solve previous questions where available.',
        'Take timed mock tests.'
      ],

      importantPoints: [
        'Check participating universities.',
        'Review program-specific eligibility.',
        'Check the latest NTA notification.',
        'Verify application dates.'
      ],

      suitableFor: [
        'Bachelor degree graduates',
        'Postgraduate aspirants',
        'Students targeting participating universities'
      ]
    }

  ];


  constructor(
    private route: ActivatedRoute,
    private readonly userState: UserState
  ) {}


  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const id = params.get('id') ?? '';

      this.examId.set(id);

      const selectedExam = this.exams.find(
        exam => exam.id === id
      );

      this.exam.set(selectedExam ?? null);

      /*
       * =====================================================
       * ADD TO RECENTLY VIEWED
       * =====================================================
       */

      if (selectedExam) {

        const recentExam: UserExam = {

          id: selectedExam.id,

          title: selectedExam.name,

          category: selectedExam.category,

          icon: selectedExam.icon,

          description: selectedExam.description

        };

        this.userState.addRecentExam(recentExam);

      }

    });

  }

}