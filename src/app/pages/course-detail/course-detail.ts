import {
  Component,
  computed,
  inject,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ActivatedRoute,
  Router,
  RouterLink
} from '@angular/router';

import {
  SavedCourse,
  UserState
} from '../../services/user-state';


interface RoadmapStep {
  title: string;
  description: string;
}


interface CourseInfo {
  id: string;
  title: string;
  icon: string;
  category: string;
  description: string;
  duration: string;
  eligibility: string;
  entranceExams: string[];
  skills: string[];
  subjects: string[];
  careers: string[];
  roadmap: RoadmapStep[];
  relatedCourses: string[];
}


@Component({
  selector: 'app-course-detail',

  standalone: true,

  imports: [
    CommonModule,
    RouterLink
  ],

  templateUrl: './course-detail.html',

  styleUrl: './course-detail.css'
})
export class CourseDetail {

  // =========================================================
  // SERVICES
  // =========================================================

  private route = inject(ActivatedRoute);

  private router = inject(Router);

  private userState = inject(UserState);


  // =========================================================
  // COURSE DATA
  // =========================================================

  courses: CourseInfo[] = [

    // =======================================================
    // COMPUTER SCIENCE ENGINEERING
    // =======================================================

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

      entranceExams: [
        'JEE Main',
        'State Engineering Entrance Exams',
        'University Entrance Exams'
      ],

      skills: [
        'Programming',
        'Data Structures',
        'Web Development',
        'Databases'
      ],

      subjects: [
        'Programming',
        'Data Structures & Algorithms',
        'Database Management',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering'
      ],

      careers: [
        'Software Developer',
        'Web Developer',
        'Cloud Engineer',
        'Cybersecurity Analyst'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 with Physics, Chemistry and Mathematics and meet the required eligibility criteria.'
        },
        {
          title: 'Prepare for entrance exams',
          description:
            'Prepare for engineering entrance examinations and choose suitable colleges and programs.'
        },
        {
          title: 'Build programming fundamentals',
          description:
            'Learn programming, data structures, algorithms and core computer science concepts.'
        },
        {
          title: 'Build practical projects',
          description:
            'Develop websites, applications and other projects to apply your technical knowledge.'
        },
        {
          title: 'Start your technology career',
          description:
            'Prepare for internships, placements and entry-level technology opportunities.'
        }
      ],

      relatedCourses: [
        'Information Technology',
        'BCA',
        'B.Sc. Computer Science'
      ]
    },


    // =======================================================
    // INFORMATION TECHNOLOGY
    // =======================================================

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

      entranceExams: [
        'JEE Main',
        'State Engineering Entrance Exams',
        'University Entrance Exams'
      ],

      skills: [
        'Programming',
        'Networking',
        'Databases',
        'System Administration'
      ],

      subjects: [
        'Programming',
        'Computer Networks',
        'Database Management',
        'Web Technologies',
        'Operating Systems',
        'Information Security'
      ],

      careers: [
        'Software Developer',
        'System Administrator',
        'Cloud Engineer',
        'IT Analyst'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 with the required science and mathematics subjects.'
        },
        {
          title: 'Choose an IT pathway',
          description:
            'Explore engineering colleges and information technology programs.'
        },
        {
          title: 'Learn core IT concepts',
          description:
            'Develop knowledge of programming, networking, databases and operating systems.'
        },
        {
          title: 'Build practical experience',
          description:
            'Create projects and gain experience with real-world IT technologies.'
        },
        {
          title: 'Begin your IT career',
          description:
            'Apply for internships and entry-level information technology positions.'
        }
      ],

      relatedCourses: [
        'Computer Science Engineering',
        'BCA',
        'MCA'
      ]
    },


    // =======================================================
    // ECE
    // =======================================================

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

      entranceExams: [
        'JEE Main',
        'State Engineering Entrance Exams',
        'University Entrance Exams'
      ],

      skills: [
        'Electronics',
        'Communication Systems',
        'Embedded Systems',
        'Programming'
      ],

      subjects: [
        'Digital Electronics',
        'Communication Systems',
        'Microprocessors',
        'Embedded Systems',
        'Signal Processing',
        'Control Systems'
      ],

      careers: [
        'Embedded Engineer',
        'Electronics Engineer',
        'Network Engineer',
        'Hardware Engineer'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 with Physics, Chemistry and Mathematics.'
        },
        {
          title: 'Prepare for engineering entrance',
          description:
            'Prepare for relevant engineering entrance examinations.'
        },
        {
          title: 'Learn electronics fundamentals',
          description:
            'Build knowledge of electronic circuits, digital systems and communication.'
        },
        {
          title: 'Develop practical skills',
          description:
            'Work with embedded systems, microcontrollers and electronics projects.'
        },
        {
          title: 'Explore engineering careers',
          description:
            'Apply your knowledge through internships and engineering opportunities.'
        }
      ],

      relatedCourses: [
        'Computer Science Engineering',
        'Information Technology'
      ]
    },


    // =======================================================
    // BCA
    // =======================================================

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

      entranceExams: [
        'University Entrance Exams',
        'State Entrance Exams',
        'College Admission Tests'
      ],

      skills: [
        'Programming',
        'Web Development',
        'Databases',
        'Software Development'
      ],

      subjects: [
        'Programming',
        'Database Management',
        'Web Development',
        'Computer Networks',
        'Software Engineering',
        'Computer Applications'
      ],

      careers: [
        'Web Developer',
        'Software Developer',
        'Application Developer',
        'Technical Support'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 and check the admission requirements of your preferred institutions.'
        },
        {
          title: 'Join BCA',
          description:
            'Choose a recognized BCA program based on your interests and career goals.'
        },
        {
          title: 'Learn programming',
          description:
            'Build strong foundations in programming, databases and web development.'
        },
        {
          title: 'Build projects',
          description:
            'Create applications and websites to develop practical development skills.'
        },
        {
          title: 'Start your career',
          description:
            'Apply for internships, entry-level developer and technical support roles.'
        }
      ],

      relatedCourses: [
        'B.Sc. Computer Science',
        'Computer Science Engineering',
        'MCA'
      ]
    },


    // =======================================================
    // BSC COMPUTER SCIENCE
    // =======================================================

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

      entranceExams: [
        'University Entrance Exams',
        'State Entrance Exams'
      ],

      skills: [
        'Programming',
        'Algorithms',
        'Computer Networks',
        'Databases'
      ],

      subjects: [
        'Programming',
        'Data Structures',
        'Computer Architecture',
        'Database Management',
        'Operating Systems',
        'Computer Networks'
      ],

      careers: [
        'Software Developer',
        'Web Developer',
        'System Analyst',
        'Technical Support'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 and review the admission requirements of universities.'
        },
        {
          title: 'Study computer science',
          description:
            'Build strong theoretical and practical foundations in computer science.'
        },
        {
          title: 'Learn programming',
          description:
            'Develop programming and algorithmic problem-solving skills.'
        },
        {
          title: 'Build projects',
          description:
            'Create software projects to apply your knowledge.'
        },
        {
          title: 'Prepare for career or higher studies',
          description:
            'Choose between employment, certifications or postgraduate education.'
        }
      ],

      relatedCourses: [
        'BCA',
        'Computer Science Engineering',
        'MCA'
      ]
    },


    // =======================================================
    // MCA
    // =======================================================

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

      entranceExams: [
        'University Entrance Exams',
        'State Entrance Exams',
        'MCA Entrance Examinations'
      ],

      skills: [
        'Software Development',
        'Advanced Programming',
        'Databases',
        'Cloud Technologies'
      ],

      subjects: [
        'Advanced Programming',
        'Software Engineering',
        'Cloud Computing',
        'Database Systems',
        'Web Technologies',
        'Project Development'
      ],

      careers: [
        'Software Developer',
        'Application Developer',
        'Cloud Engineer',
        'Technical Consultant'
      ],

      roadmap: [
        {
          title: 'Complete your bachelor degree',
          description:
            'Complete a relevant undergraduate degree and meet the admission requirements.'
        },
        {
          title: 'Prepare for admission',
          description:
            'Prepare for university or state-level postgraduate entrance requirements.'
        },
        {
          title: 'Develop advanced technical skills',
          description:
            'Study advanced programming, software engineering and modern technologies.'
        },
        {
          title: 'Complete projects',
          description:
            'Build substantial software projects and gain practical development experience.'
        },
        {
          title: 'Start your technology career',
          description:
            'Apply for software, cloud, consulting and application development roles.'
        }
      ],

      relatedCourses: [
        'BCA',
        'B.Sc. Computer Science',
        'Information Technology'
      ]
    },


    // =======================================================
    // MBBS
    // =======================================================

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

      entranceExams: [
        'NEET UG'
      ],

      skills: [
        'Medical Knowledge',
        'Clinical Skills',
        'Patient Care',
        'Diagnosis'
      ],

      subjects: [
        'Anatomy',
        'Physiology',
        'Biochemistry',
        'Pathology',
        'Pharmacology',
        'Clinical Medicine'
      ],

      careers: [
        'Doctor',
        'Medical Officer',
        'Clinical Practitioner',
        'Medical Researcher'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 with Physics, Chemistry and Biology.'
        },
        {
          title: 'Prepare for NEET',
          description:
            'Prepare for the medical entrance examination and build strong science fundamentals.'
        },
        {
          title: 'Complete MBBS',
          description:
            'Study medical sciences and develop clinical knowledge and practical skills.'
        },
        {
          title: 'Complete internship',
          description:
            'Gain practical clinical experience through the required internship.'
        },
        {
          title: 'Choose your medical pathway',
          description:
            'Continue with medical practice, postgraduate education or a suitable specialization.'
        }
      ],

      relatedCourses: [
        'B.Sc. Nursing',
        'B.Pharm'
      ]
    },


    // =======================================================
    // BSC NURSING
    // =======================================================

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

      entranceExams: [
        'University / Nursing Entrance Exams',
        'State Nursing Entrance Exams'
      ],

      skills: [
        'Patient Care',
        'Clinical Skills',
        'Communication',
        'Healthcare'
      ],

      subjects: [
        'Anatomy',
        'Physiology',
        'Nursing Foundation',
        'Community Health Nursing',
        'Medical-Surgical Nursing',
        'Child Health Nursing'
      ],

      careers: [
        'Nurse',
        'Clinical Nurse',
        'Community Health Nurse',
        'Nursing Educator'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 with the required science subjects.'
        },
        {
          title: 'Choose a nursing program',
          description:
            'Apply to a recognized B.Sc. Nursing program.'
        },
        {
          title: 'Learn nursing fundamentals',
          description:
            'Study nursing science, patient care and healthcare practices.'
        },
        {
          title: 'Complete clinical training',
          description:
            'Develop practical nursing skills through clinical experience.'
        },
        {
          title: 'Start your nursing career',
          description:
            'Explore opportunities in hospitals, clinics and healthcare organizations.'
        }
      ],

      relatedCourses: [
        'MBBS',
        'B.Pharm'
      ]
    },


    // =======================================================
    // B PHARM
    // =======================================================

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

      entranceExams: [
        'State Pharmacy Entrance Exams',
        'University Entrance Exams'
      ],

      skills: [
        'Pharmacology',
        'Drug Analysis',
        'Pharmaceutical Sciences',
        'Patient Care'
      ],

      subjects: [
        'Pharmaceutics',
        'Pharmaceutical Chemistry',
        'Pharmacology',
        'Pharmacognosy',
        'Biochemistry',
        'Clinical Pharmacy'
      ],

      careers: [
        'Pharmacist',
        'Clinical Pharmacist',
        'Drug Inspector',
        'Pharmaceutical Researcher'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 with the required science subjects.'
        },
        {
          title: 'Choose pharmacy education',
          description:
            'Apply to a recognized Bachelor of Pharmacy program.'
        },
        {
          title: 'Study pharmaceutical sciences',
          description:
            'Develop knowledge of medicines, pharmacology and pharmaceutical practices.'
        },
        {
          title: 'Complete practical training',
          description:
            'Gain laboratory and practical experience during your course.'
        },
        {
          title: 'Explore pharmacy careers',
          description:
            'Explore opportunities in hospitals, pharmaceutical companies, research and retail.'
        }
      ],

      relatedCourses: [
        'MBBS',
        'B.Sc. Nursing'
      ]
    },


    // =======================================================
    // BCOM
    // =======================================================

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

      entranceExams: [
        'University Entrance Exams',
        'College Admission Tests'
      ],

      skills: [
        'Accounting',
        'Finance',
        'Taxation',
        'Business'
      ],

      subjects: [
        'Financial Accounting',
        'Business Economics',
        'Corporate Accounting',
        'Taxation',
        'Business Law',
        'Financial Management'
      ],

      careers: [
        'Chartered Accountant',
        'Financial Analyst',
        'Accountant',
        'Finance Executive'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 and develop a strong foundation in commerce subjects.'
        },
        {
          title: 'Join B.Com',
          description:
            'Choose a suitable B.Com program based on your interests.'
        },
        {
          title: 'Build accounting skills',
          description:
            'Develop strong knowledge of accounting, finance, taxation and economics.'
        },
        {
          title: 'Gain practical experience',
          description:
            'Use internships, projects and practical exercises to build professional skills.'
        },
        {
          title: 'Choose your career path',
          description:
            'Explore finance, accounting, banking, taxation or higher education opportunities.'
        }
      ],

      relatedCourses: [
        'BBA',
        'MBA'
      ]
    },


    // =======================================================
    // BBA
    // =======================================================

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

      entranceExams: [
        'University Entrance Exams',
        'Management Entrance Exams'
      ],

      skills: [
        'Management',
        'Marketing',
        'Finance',
        'Leadership'
      ],

      subjects: [
        'Principles of Management',
        'Marketing Management',
        'Financial Management',
        'Human Resource Management',
        'Business Communication',
        'Business Strategy'
      ],

      careers: [
        'Business Analyst',
        'Management Trainee',
        'Marketing Executive',
        'Entrepreneur'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 and explore business and management programs.'
        },
        {
          title: 'Join BBA',
          description:
            'Choose a suitable BBA specialization and institution.'
        },
        {
          title: 'Develop management skills',
          description:
            'Learn business strategy, finance, marketing and organizational management.'
        },
        {
          title: 'Gain practical experience',
          description:
            'Complete internships, projects and business case studies.'
        },
        {
          title: 'Start your management career',
          description:
            'Explore business, marketing, operations or entrepreneurship opportunities.'
        }
      ],

      relatedCourses: [
        'B.Com',
        'MBA'
      ]
    },


    // =======================================================
    // MBA
    // =======================================================

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

      entranceExams: [
        'CAT',
        'MAT',
        'XAT',
        'University Entrance Exams'
      ],

      skills: [
        'Business Strategy',
        'Leadership',
        'Finance',
        'Marketing'
      ],

      subjects: [
        'Business Strategy',
        'Marketing Management',
        'Financial Management',
        'Operations Management',
        'Human Resources',
        'Business Analytics'
      ],

      careers: [
        'Business Analyst',
        'Finance Manager',
        'Marketing Manager',
        'Business Consultant'
      ],

      roadmap: [
        {
          title: 'Complete your bachelor degree',
          description:
            'Complete a recognized undergraduate degree.'
        },
        {
          title: 'Prepare for management entrance exams',
          description:
            'Prepare for relevant management entrance examinations and applications.'
        },
        {
          title: 'Choose a specialization',
          description:
            'Select an area such as finance, marketing, operations or human resources.'
        },
        {
          title: 'Gain practical experience',
          description:
            'Complete internships, projects and business case studies.'
        },
        {
          title: 'Begin your management career',
          description:
            'Explore management, consulting, finance, marketing and business roles.'
        }
      ],

      relatedCourses: [
        'BBA',
        'B.Com'
      ]
    },


    // =======================================================
    // BA ENGLISH
    // =======================================================

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

      entranceExams: [
        'University Entrance Exams',
        'College Admission Tests'
      ],

      skills: [
        'Communication',
        'Writing',
        'Critical Thinking',
        'Research'
      ],

      subjects: [
        'English Literature',
        'Language Studies',
        'Literary Criticism',
        'Creative Writing',
        'Communication',
        'Cultural Studies'
      ],

      careers: [
        'Content Writer',
        'Editor',
        'Teacher',
        'Copywriter'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 and explore undergraduate humanities programs.'
        },
        {
          title: 'Study English',
          description:
            'Develop knowledge of literature, language and communication.'
        },
        {
          title: 'Develop writing skills',
          description:
            'Practice creative writing, professional communication and research.'
        },
        {
          title: 'Build practical experience',
          description:
            'Create writing samples, projects and gain experience through internships.'
        },
        {
          title: 'Choose your career direction',
          description:
            'Explore content, education, publishing, media or communication careers.'
        }
      ],

      relatedCourses: [
        'B.A. Psychology',
        'B.Des'
      ]
    },


    // =======================================================
    // BA PSYCHOLOGY
    // =======================================================

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

      entranceExams: [
        'University Entrance Exams',
        'College Admission Tests'
      ],

      skills: [
        'Observation',
        'Research',
        'Communication',
        'Empathy'
      ],

      subjects: [
        'Introduction to Psychology',
        'Developmental Psychology',
        'Social Psychology',
        'Cognitive Psychology',
        'Research Methods',
        'Abnormal Psychology'
      ],

      careers: [
        'Psychologist',
        'Counsellor',
        'Research Assistant',
        'HR Professional'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 and explore psychology degree programs.'
        },
        {
          title: 'Study psychology',
          description:
            'Build foundational knowledge of human behavior and psychological processes.'
        },
        {
          title: 'Develop research skills',
          description:
            'Learn observation, research methodology and analytical skills.'
        },
        {
          title: 'Gain practical experience',
          description:
            'Complete projects, internships or supervised learning opportunities.'
        },
        {
          title: 'Choose further specialization',
          description:
            'Consider postgraduate education or suitable psychology-related career paths.'
        }
      ],

      relatedCourses: [
        'B.A. English',
        'BBA'
      ]
    },


    // =======================================================
    // B.DES
    // =======================================================

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

      entranceExams: [
        'NID DAT',
        'UCEED',
        'University Entrance Exams'
      ],

      skills: [
        'Visual Design',
        'UI/UX',
        'Prototyping',
        'Creative Thinking'
      ],

      subjects: [
        'Design Fundamentals',
        'Visual Communication',
        'Typography',
        'Interaction Design',
        'Design Research',
        'Product Design'
      ],

      careers: [
        'UI/UX Designer',
        'Product Designer',
        'Graphic Designer',
        'Visual Designer'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 and explore design education pathways.'
        },
        {
          title: 'Prepare for design entrance exams',
          description:
            'Prepare for relevant design entrance examinations and portfolio requirements.'
        },
        {
          title: 'Learn design fundamentals',
          description:
            'Develop knowledge of visual design, typography, composition and user experience.'
        },
        {
          title: 'Build a design portfolio',
          description:
            'Create projects and case studies that demonstrate your design process.'
        },
        {
          title: 'Start your design career',
          description:
            'Apply for internships and entry-level design opportunities.'
        }
      ],

      relatedCourses: [
        'B.A. English',
        'B.A. Psychology'
      ]
    }

  ];


  // =========================================================
  // URL ID
  // =========================================================

  courseId = signal(
    'computer-science-engineering'
  );


  // =========================================================
  // CURRENT COURSE
  // =========================================================

  currentCourse = computed(() => {

    const id = this.courseId();

    const course = this.courses.find(
      item => item.id === id
    );

    return course ?? this.courses[0];

  });


  // =========================================================
  // READ URL
  // =========================================================

  constructor() {

    this.route.paramMap.subscribe(params => {

      const id = params.get('id');

      console.log(
        'Course URL ID:',
        id
      );

      if (id) {

        this.courseId.set(id);

        const course = this.courses.find(
          item => item.id === id
        );

        if (course) {

          this.userState.addRecentCourse({

            id: course.id,

            title: course.title,

            category: course.category,

            icon: course.icon,

            description: course.description

          });

        }

      }

    });

  }


  // =========================================================
  // SAVED COURSE
  // =========================================================

  isCourseSaved(): boolean {

    return this.userState.isCourseSaved(
      this.currentCourse().id
    );

  }


  toggleSavedCourse(): void {

    const course =
      this.currentCourse();

    const savedCourse: SavedCourse = {

      id: course.id,

      title: course.title,

      category: course.category,

      icon: course.icon,

      description: course.description,

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
  // COURSE PROGRESS
  // =========================================================

  courseProgress(): number {

    return this.userState.getCourseProgress(
      this.currentCourse().id
    );

  }


  updateCourseProgress(
    progress: number
  ): void {

    // Only update progress if the course
    // is already saved.
    if (!this.isCourseSaved()) {
      return;
    }

    this.userState.updateCourseProgress(

      this.currentCourse().id,

      progress

    );

  }


  // =========================================================
  // BACK
  // =========================================================

  goBackToCourses(): void {

    this.router.navigate([
      '/courses'
    ]);

  }

}