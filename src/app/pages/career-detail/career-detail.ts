import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { UserState } from '../../services/user-state';

interface RoadmapStep {
  title: string;
  description: string;
}

interface CareerInfo {
  id: string;
  title: string;
  icon: string;
  category: string;
  description: string;
  education: string[];
  entranceExams: string[];
  skills: string[];
  responsibilities: string[];
  industries: string[];
  roadmap: RoadmapStep[];
  relatedCareers: string[];
}

@Component({
  selector: 'app-career-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './career-detail.html',
  styleUrl: './career-detail.css'
})
export class CareerDetail {

  private readonly route = inject(ActivatedRoute);

  private readonly router = inject(Router);

  private readonly auth = inject(Auth);

  private readonly userState = inject(UserState);


  // =========================================================
  // LOGGED-IN USER
  // =========================================================

  readonly isLoggedIn =
    this.auth.isLoggedIn;


  // =========================================================
  // CAREER DATA
  // =========================================================

  careers: CareerInfo[] = [

    // =======================================================
    // SOFTWARE DEVELOPER
    // =======================================================

    {
      id: 'software-developer',
      title: 'Software Developer',
      icon: '💻',
      category: 'Technology',

      description:
        'Design, develop and maintain software applications that solve real-world problems.',

      education: [
        'B.Tech / B.E. Computer Science',
        'BCA',
        'B.Sc. Computer Science',
        'MCA'
      ],

      entranceExams: [
        'JEE Main',
        'State Engineering Entrance Exams',
        'University Entrance Exams'
      ],

      skills: [
        'Programming',
        'Problem Solving',
        'Data Structures',
        'Git'
      ],

      responsibilities: [
        'Develop software applications',
        'Write and maintain code',
        'Test and debug applications',
        'Collaborate with development teams'
      ],

      industries: [
        'Software',
        'FinTech',
        'E-Commerce',
        'SaaS'
      ],

      roadmap: [
        {
          title: 'Choose your pathway',
          description:
            'Choose Computer Science, Information Technology or a related technology pathway.'
        },
        {
          title: 'Learn programming',
          description:
            'Build strong fundamentals in programming, algorithms and problem solving.'
        },
        {
          title: 'Build projects',
          description:
            'Create practical projects to strengthen your development skills and portfolio.'
        },
        {
          title: 'Learn modern technologies',
          description:
            'Learn frameworks, databases, APIs, Git and other development tools.'
        },
        {
          title: 'Start your career',
          description:
            'Apply for internships and entry-level software development opportunities.'
        }
      ],

      relatedCareers: [
        'Web Developer',
        'Cloud Engineer',
        'Cybersecurity Analyst'
      ]
    },


    // =======================================================
    // WEB DEVELOPER
    // =======================================================

    {
      id: 'web-developer',
      title: 'Web Developer',
      icon: '🌐',
      category: 'Technology',

      description:
        'Build responsive websites and modern web applications using frontend and backend technologies.',

      education: [
        'B.Tech / B.E.',
        'BCA',
        'B.Sc. Computer Science',
        'Web Development Certification'
      ],

      entranceExams: [
        'JEE Main',
        'State Engineering Entrance Exams',
        'University Entrance Exams'
      ],

      skills: [
        'HTML & CSS',
        'JavaScript',
        'Angular / React',
        'APIs'
      ],

      responsibilities: [
        'Build responsive websites',
        'Develop web applications',
        'Integrate APIs',
        'Optimize user experience'
      ],

      industries: [
        'Software',
        'E-Commerce',
        'Startups',
        'Digital Media'
      ],

      roadmap: [
        {
          title: 'Learn HTML & CSS',
          description:
            'Learn the fundamentals of web structure, styling and responsive layouts.'
        },
        {
          title: 'Learn JavaScript',
          description:
            'Understand programming concepts and create interactive web experiences.'
        },
        {
          title: 'Learn a framework',
          description:
            'Learn modern frameworks such as Angular or React.'
        },
        {
          title: 'Learn backend development',
          description:
            'Understand APIs, servers, databases and backend technologies.'
        },
        {
          title: 'Build your portfolio',
          description:
            'Create real-world projects and prepare for internships and developer roles.'
        }
      ],

      relatedCareers: [
        'Software Developer',
        'UI/UX Designer',
        'Cloud Engineer'
      ]
    },


    // =======================================================
    // CYBERSECURITY ANALYST
    // =======================================================

    {
      id: 'cybersecurity-analyst',
      title: 'Cybersecurity Analyst',
      icon: '🔐',
      category: 'Technology',

      description:
        'Help protect applications, systems and networks from security threats.',

      education: [
        'B.Tech CSE',
        'B.Tech IT',
        'BCA',
        'Cybersecurity Certifications'
      ],

      entranceExams: [
        'JEE Main',
        'State Engineering Entrance Exams',
        'University Entrance Exams'
      ],

      skills: [
        'Networking',
        'Security',
        'Linux',
        'Threat Analysis'
      ],

      responsibilities: [
        'Monitor security systems',
        'Identify security threats',
        'Respond to security incidents',
        'Protect systems and networks'
      ],

      industries: [
        'Cybersecurity',
        'Banking',
        'Government',
        'Technology'
      ],

      roadmap: [
        {
          title: 'Learn computer fundamentals',
          description:
            'Build a strong foundation in computers, operating systems and networking.'
        },
        {
          title: 'Learn networking',
          description:
            'Understand TCP/IP, DNS, HTTP, firewalls and network security concepts.'
        },
        {
          title: 'Learn cybersecurity',
          description:
            'Study common vulnerabilities, security tools, threats and defensive techniques.'
        },
        {
          title: 'Build practical skills',
          description:
            'Practice security labs, Linux administration and security analysis.'
        },
        {
          title: 'Start your cybersecurity career',
          description:
            'Apply for internships and entry-level cybersecurity analyst positions.'
        }
      ],

      relatedCareers: [
        'Software Developer',
        'Cloud Engineer',
        'Web Developer'
      ]
    },


    // =======================================================
    // CLOUD ENGINEER
    // =======================================================

    {
      id: 'cloud-engineer',
      title: 'Cloud Engineer',
      icon: '☁️',
      category: 'Technology',

      description:
        'Design, deploy and maintain cloud infrastructure and services.',

      education: [
        'B.Tech CSE',
        'B.Tech IT',
        'BCA',
        'Cloud Certifications'
      ],

      entranceExams: [
        'JEE Main',
        'State Engineering Entrance Exams',
        'University Entrance Exams'
      ],

      skills: [
        'Cloud Computing',
        'Linux',
        'Networking',
        'DevOps'
      ],

      responsibilities: [
        'Deploy cloud infrastructure',
        'Manage cloud services',
        'Monitor cloud systems',
        'Improve infrastructure reliability'
      ],

      industries: [
        'Cloud',
        'Software',
        'SaaS',
        'Enterprise IT'
      ],

      roadmap: [
        {
          title: 'Learn computer fundamentals',
          description:
            'Understand operating systems, networking and basic computer architecture.'
        },
        {
          title: 'Learn Linux and networking',
          description:
            'Develop practical Linux administration and networking skills.'
        },
        {
          title: 'Learn cloud platforms',
          description:
            'Learn services and deployment concepts from platforms such as AWS, Azure or Google Cloud.'
        },
        {
          title: 'Learn DevOps',
          description:
            'Study containers, CI/CD, infrastructure automation and monitoring.'
        },
        {
          title: 'Build cloud projects',
          description:
            'Deploy real applications and build practical cloud infrastructure projects.'
        }
      ],

      relatedCareers: [
        'Software Developer',
        'Cybersecurity Analyst',
        'Web Developer'
      ]
    },


    // =======================================================
    // DOCTOR
    // =======================================================

    {
      id: 'doctor',
      title: 'Doctor',
      icon: '🩺',
      category: 'Medical',

      description:
        'Diagnose, treat and help prevent illnesses while providing patient care.',

      education: [
        'MBBS',
        'MD',
        'MS',
        'Medical Specialization'
      ],

      entranceExams: [
        'NEET UG',
        'NEET PG'
      ],

      skills: [
        'Medical Knowledge',
        'Clinical Skills',
        'Communication',
        'Attention to Detail'
      ],

      responsibilities: [
        'Diagnose medical conditions',
        'Treat patients',
        'Maintain medical records',
        'Provide healthcare guidance'
      ],

      industries: [
        'Hospitals',
        'Clinics',
        'Healthcare',
        'Research'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 with the required science subjects for medical education.'
        },
        {
          title: 'Prepare for NEET',
          description:
            'Prepare for the medical entrance examination and build strong science fundamentals.'
        },
        {
          title: 'Complete MBBS',
          description:
            'Complete the MBBS program and develop foundational medical knowledge and clinical skills.'
        },
        {
          title: 'Complete internship',
          description:
            'Gain practical clinical experience through the required medical internship.'
        },
        {
          title: 'Choose specialization',
          description:
            'Pursue postgraduate education and specialize in a chosen medical field.'
        }
      ],

      relatedCareers: [
        'Pharmacist',
        'Nurse',
        'Medical Technologist'
      ]
    },


    // =======================================================
    // PHARMACIST
    // =======================================================

    {
      id: 'pharmacist',
      title: 'Pharmacist',
      icon: '💊',
      category: 'Medical',

      description:
        'Work with medicines, pharmaceutical care and medication safety.',

      education: [
        'B.Pharm',
        'D.Pharm',
        'M.Pharm',
        'Pharmacy Certifications'
      ],

      entranceExams: [
        'State Pharmacy Entrance Exams',
        'University Entrance Exams'
      ],

      skills: [
        'Pharmacology',
        'Accuracy',
        'Communication',
        'Patient Care'
      ],

      responsibilities: [
        'Dispense medicines',
        'Provide medication guidance',
        'Maintain medicine records',
        'Support medication safety'
      ],

      industries: [
        'Hospitals',
        'Pharmaceuticals',
        'Research',
        'Retail'
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
            'Choose B.Pharm, D.Pharm or another recognized pharmacy pathway.'
        },
        {
          title: 'Study pharmaceutical sciences',
          description:
            'Develop knowledge of medicines, pharmacology and pharmaceutical practices.'
        },
        {
          title: 'Gain practical experience',
          description:
            'Develop practical experience through training and internships.'
        },
        {
          title: 'Start your pharmacy career',
          description:
            'Explore opportunities in hospitals, pharmaceutical companies, research and retail.'
        }
      ],

      relatedCareers: [
        'Doctor',
        'Nurse'
      ]
    },


    // =======================================================
    // NURSE
    // =======================================================

    {
      id: 'nurse',
      title: 'Nurse',
      icon: '🏥',
      category: 'Medical',

      description:
        'Provide patient care and support healthcare professionals in clinical environments.',

      education: [
        'B.Sc. Nursing',
        'GNM',
        'ANM',
        'Nursing Specializations'
      ],

      entranceExams: [
        'University / Nursing Entrance Exams',
        'State Nursing Entrance Exams'
      ],

      skills: [
        'Patient Care',
        'Communication',
        'Clinical Skills',
        'Empathy'
      ],

      responsibilities: [
        'Provide patient care',
        'Monitor patient conditions',
        'Assist doctors and healthcare teams',
        'Maintain patient records'
      ],

      industries: [
        'Hospitals',
        'Clinics',
        'Healthcare',
        'Community Health'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 with the required science subjects for nursing education.'
        },
        {
          title: 'Choose nursing education',
          description:
            'Choose B.Sc. Nursing, GNM, ANM or another recognized nursing pathway.'
        },
        {
          title: 'Complete nursing training',
          description:
            'Develop theoretical knowledge and practical clinical nursing skills.'
        },
        {
          title: 'Complete clinical experience',
          description:
            'Gain practical experience through clinical training and internships.'
        },
        {
          title: 'Start your nursing career',
          description:
            'Apply for nursing positions in hospitals, clinics and healthcare organizations.'
        }
      ],

      relatedCareers: [
        'Doctor',
        'Pharmacist'
      ]
    },


    // =======================================================
    // CHARTERED ACCOUNTANT
    // =======================================================

    {
      id: 'chartered-accountant',
      title: 'Chartered Accountant',
      icon: '🧮',
      category: 'Finance',

      description:
        'Work across accounting, auditing, taxation and financial management.',

      education: [
        'CA Foundation',
        'CA Intermediate',
        'CA Final',
        'Commerce Education'
      ],

      entranceExams: [
        'CA Foundation'
      ],

      skills: [
        'Accounting',
        'Taxation',
        'Financial Analysis',
        'Attention to Detail'
      ],

      responsibilities: [
        'Prepare financial statements',
        'Conduct audits',
        'Handle taxation',
        'Provide financial advice'
      ],

      industries: [
        'Accounting',
        'Banking',
        'Finance',
        'Consulting'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 and build a strong foundation in accounting and commerce.'
        },
        {
          title: 'Register for CA Foundation',
          description:
            'Begin the Chartered Accountancy pathway and prepare for the Foundation examination.'
        },
        {
          title: 'Clear CA Intermediate',
          description:
            'Complete the Intermediate level and develop deeper knowledge of accounting, taxation and law.'
        },
        {
          title: 'Complete articleship',
          description:
            'Gain practical experience through the required professional training.'
        },
        {
          title: 'Clear CA Final',
          description:
            'Complete the final level and fulfill the requirements to qualify as a Chartered Accountant.'
        }
      ],

      relatedCareers: [
        'Financial Analyst',
        'Business Analyst'
      ]
    },


    // =======================================================
    // FINANCIAL ANALYST
    // =======================================================

    {
      id: 'financial-analyst',
      title: 'Financial Analyst',
      icon: '📈',
      category: 'Finance',

      description:
        'Analyze financial data to support business and investment decisions.',

      education: [
        'B.Com',
        'BBA Finance',
        'Economics',
        'MBA Finance'
      ],

      entranceExams: [
        'University Entrance Exams',
        'Management Entrance Exams'
      ],

      skills: [
        'Financial Analysis',
        'Excel',
        'Economics',
        'Communication'
      ],

      responsibilities: [
        'Analyze financial data',
        'Prepare reports',
        'Study market trends',
        'Support business decisions'
      ],

      industries: [
        'Banking',
        'Investment',
        'Consulting',
        'FinTech'
      ],

      roadmap: [
        {
          title: 'Choose a finance pathway',
          description:
            'Choose commerce, finance, economics or a related educational pathway.'
        },
        {
          title: 'Learn financial concepts',
          description:
            'Build knowledge of accounting, economics, financial markets and business.'
        },
        {
          title: 'Develop analytical skills',
          description:
            'Improve Excel, financial modeling, data interpretation and analytical skills.'
        },
        {
          title: 'Gain practical experience',
          description:
            'Complete internships or projects related to finance and business analysis.'
        },
        {
          title: 'Apply for analyst roles',
          description:
            'Build your resume and apply for financial analyst and related entry-level roles.'
        }
      ],

      relatedCareers: [
        'Chartered Accountant',
        'Business Analyst',
        'Investment Analyst'
      ]
    },


    // =======================================================
    // BUSINESS ANALYST
    // =======================================================

    {
      id: 'business-analyst',
      title: 'Business Analyst',
      icon: '📊',
      category: 'Business',

      description:
        'Analyze business requirements, processes and data to support better decisions.',

      education: [
        'BBA',
        'B.Com',
        'B.Tech',
        'MBA'
      ],

      entranceExams: [
        'University Entrance Exams',
        'Management Entrance Exams'
      ],

      skills: [
        'Analysis',
        'Communication',
        'Business Strategy',
        'Data Interpretation'
      ],

      responsibilities: [
        'Analyze business requirements',
        'Document business processes',
        'Prepare analytical reports',
        'Support business decisions'
      ],

      industries: [
        'Consulting',
        'Banking',
        'Technology',
        'E-Commerce'
      ],

      roadmap: [
        {
          title: 'Choose an educational pathway',
          description:
            'Choose business, commerce, economics, technology or a related degree.'
        },
        {
          title: 'Learn business fundamentals',
          description:
            'Understand business processes, finance, operations and organizational structures.'
        },
        {
          title: 'Develop analytical skills',
          description:
            'Learn data analysis, documentation, problem solving and business communication.'
        },
        {
          title: 'Build practical projects',
          description:
            'Work on business case studies and projects that demonstrate analytical ability.'
        },
        {
          title: 'Start your career',
          description:
            'Apply for business analyst internships and entry-level analyst roles.'
        }
      ],

      relatedCareers: [
        'Financial Analyst',
        'Software Developer',
        'Web Developer'
      ]
    },


    // =======================================================
    // ENTREPRENEUR
    // =======================================================

    {
      id: 'entrepreneur',
      title: 'Entrepreneur',
      icon: '🚀',
      category: 'Business',

      description:
        'Create and manage businesses, products and services.',

      education: [
        'BBA',
        'B.Com',
        'Business Management',
        'MBA'
      ],

      entranceExams: [
        'University Entrance Exams',
        'Management Entrance Exams'
      ],

      skills: [
        'Leadership',
        'Decision Making',
        'Communication',
        'Business Strategy'
      ],

      responsibilities: [
        'Develop business ideas',
        'Build products and services',
        'Manage business operations',
        'Lead teams and make decisions'
      ],

      industries: [
        'Startups',
        'Technology',
        'Retail',
        'Services'
      ],

      roadmap: [
        {
          title: 'Develop business knowledge',
          description:
            'Learn fundamentals of finance, marketing, operations and business management.'
        },
        {
          title: 'Identify opportunities',
          description:
            'Study customer problems and identify opportunities for useful products or services.'
        },
        {
          title: 'Develop a business idea',
          description:
            'Create a business model and validate the idea with potential users or customers.'
        },
        {
          title: 'Build and launch',
          description:
            'Develop your product or service and begin operating the business.'
        },
        {
          title: 'Grow the business',
          description:
            'Improve operations, build teams and expand the business sustainably.'
        }
      ],

      relatedCareers: [
        'Business Analyst',
        'Financial Analyst',
        'UI/UX Designer'
      ]
    },


    // =======================================================
    // UI/UX DESIGNER
    // =======================================================

    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      icon: '🎨',
      category: 'Design',

      description:
        'Design useful, intuitive and engaging digital products and interfaces.',

      education: [
        'B.Des',
        'BFA',
        'UI/UX Design',
        'Visual Communication'
      ],

      entranceExams: [
        'NID DAT',
        'UCEED',
        'University Entrance Exams'
      ],

      skills: [
        'User Research',
        'Visual Design',
        'Prototyping',
        'Design Tools'
      ],

      responsibilities: [
        'Research user needs',
        'Design interfaces',
        'Create prototypes',
        'Test user experiences'
      ],

      industries: [
        'Technology',
        'Startups',
        'E-Commerce',
        'Product Companies'
      ],

      roadmap: [
        {
          title: 'Learn design fundamentals',
          description:
            'Understand visual hierarchy, typography, color, spacing and composition.'
        },
        {
          title: 'Learn UI/UX principles',
          description:
            'Study user research, information architecture and interaction design.'
        },
        {
          title: 'Master design tools',
          description:
            'Practice with tools used for wireframes, prototypes and interface design.'
        },
        {
          title: 'Build a design portfolio',
          description:
            'Create case studies that demonstrate your design process and problem solving.'
        },
        {
          title: 'Start your career',
          description:
            'Apply for internships and entry-level UI/UX and product design opportunities.'
        }
      ],

      relatedCareers: [
        'Graphic Designer',
        'Web Developer'
      ]
    },


    // =======================================================
    // GRAPHIC DESIGNER
    // =======================================================

    {
      id: 'graphic-designer',
      title: 'Graphic Designer',
      icon: '🖌️',
      category: 'Design',

      description:
        'Create visual content for brands, products, marketing and communication.',

      education: [
        'B.Des',
        'BFA',
        'Graphic Design',
        'Visual Communication'
      ],

      entranceExams: [
        'NID DAT',
        'UCEED',
        'University Entrance Exams'
      ],

      skills: [
        'Typography',
        'Visual Design',
        'Branding',
        'Design Tools'
      ],

      responsibilities: [
        'Create visual designs',
        'Develop brand assets',
        'Design marketing materials',
        'Work with clients and creative teams'
      ],

      industries: [
        'Advertising',
        'Media',
        'Technology',
        'Marketing'
      ],

      roadmap: [
        {
          title: 'Learn design fundamentals',
          description:
            'Understand typography, layout, color theory and visual composition.'
        },
        {
          title: 'Learn design software',
          description:
            'Practice with tools used for graphics, illustrations and visual content.'
        },
        {
          title: 'Develop your design style',
          description:
            'Create different design projects and develop a strong visual portfolio.'
        },
        {
          title: 'Build a portfolio',
          description:
            'Create professional projects that demonstrate your creativity and design process.'
        },
        {
          title: 'Start your career',
          description:
            'Apply for graphic design internships, freelance opportunities and design roles.'
        }
      ],

      relatedCareers: [
        'UI/UX Designer',
        'Web Developer'
      ]
    },


    // =======================================================
    // LAWYER
    // =======================================================

    {
      id: 'lawyer',
      title: 'Lawyer',
      icon: '⚖️',
      category: 'Law & Humanities',

      description:
        'Provide legal advice, represent clients and work with legal systems.',

      education: [
        'LLB',
        'BA LLB',
        'BBA LLB',
        'LLM'
      ],

      entranceExams: [
        'CLAT',
        'AILET',
        'University Entrance Exams'
      ],

      skills: [
        'Legal Research',
        'Communication',
        'Critical Thinking',
        'Writing'
      ],

      responsibilities: [
        'Research legal matters',
        'Prepare legal documents',
        'Represent clients',
        'Provide legal advice'
      ],

      industries: [
        'Law Firms',
        'Corporate',
        'Government',
        'Legal Consulting'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 and explore undergraduate law education options.'
        },
        {
          title: 'Prepare for law entrance exams',
          description:
            'Prepare for relevant law entrance examinations and university admissions.'
        },
        {
          title: 'Complete law education',
          description:
            'Complete an integrated law degree or LLB program.'
        },
        {
          title: 'Gain practical experience',
          description:
            'Develop practical legal skills through internships and legal training.'
        },
        {
          title: 'Start your legal career',
          description:
            'Explore opportunities in law firms, corporate legal teams and other legal environments.'
        }
      ],

      relatedCareers: [
        'Business Analyst',
        'Financial Analyst'
      ]
    },


    // =======================================================
    // PSYCHOLOGIST
    // =======================================================

    {
      id: 'psychologist',
      title: 'Psychologist',
      icon: '🧠',
      category: 'Law & Humanities',

      description:
        'Study human behavior and psychological processes across different settings.',

      education: [
        'BA Psychology',
        'B.Sc. Psychology',
        'MA Psychology',
        'Psychology Specializations'
      ],

      entranceExams: [
        'University Entrance Exams',
        'Postgraduate Entrance Exams'
      ],

      skills: [
        'Observation',
        'Communication',
        'Research',
        'Empathy'
      ],

      responsibilities: [
        'Study human behavior',
        'Conduct psychological assessments',
        'Support individuals through appropriate interventions',
        'Conduct research and maintain records'
      ],

      industries: [
        'Healthcare',
        'Education',
        'Research',
        'Organizations'
      ],

      roadmap: [
        {
          title: 'Complete Class 12',
          description:
            'Complete Class 12 and explore psychology-related undergraduate programs.'
        },
        {
          title: 'Study psychology',
          description:
            'Complete an undergraduate psychology program and build foundational knowledge.'
        },
        {
          title: 'Develop practical skills',
          description:
            'Develop research, communication, observation and assessment skills.'
        },
        {
          title: 'Pursue specialization',
          description:
            'Consider postgraduate education and a suitable area of specialization.'
        },
        {
          title: 'Build professional experience',
          description:
            'Gain supervised experience and explore appropriate psychology-related career opportunities.'
        }
      ],

      relatedCareers: [
        'Nurse',
        'Business Analyst',
        'UI/UX Designer'
      ]
    }

  ];


  // =========================================================
  // READ ID FROM URL
  // =========================================================

  careerId = signal('software-developer');


  // =========================================================
  // CURRENT CAREER
  // =========================================================

  currentCareer = computed(() => {

    const id = this.careerId();

    const career = this.careers.find(
      item => item.id === id
    );

    return career ?? this.careers[0];

  });


  // =========================================================
  // CONSTRUCTOR
  // =========================================================

  constructor() {

    this.route.paramMap.subscribe(params => {

      const id = params.get('id');

      console.log('Career URL ID:', id);

      if (id) {

        this.careerId.set(id);

        const career = this.careers.find(
          item => item.id === id
        );

        if (career) {

          this.userState.addRecentCareer({
            id: career.id,
            title: career.title,
            category: career.category,
            icon: career.icon,
            description: career.description
          });

        }

      }

    });

  }


  // =========================================================
  // SAVE / UNSAVE CAREER
  // =========================================================

  isSaved(): boolean {

    return this.userState.isCareerSaved(
      this.currentCareer().id
    );

  }


  toggleSave(): void {

    /*
     * Only logged-in users are allowed
     * to save careers.
     */

    if (!this.isLoggedIn()) {

      this.router.navigate(
        ['/login'],
        {
          replaceUrl: true
        }
      );

      return;

    }


    const career = this.currentCareer();

    this.userState.toggleSavedCareer({

      id: career.id,

      title: career.title,

      category: career.category,

      icon: career.icon,

      description: career.description

    });

  }


  // =========================================================
  // RELATED CAREER TRACKING
  // =========================================================

  trackRelatedCareer(
    index: number,
    career: string
  ): string {

    return career;

  }


  // =========================================================
  // BACK TO CAREERS
  // =========================================================

  goBackToCareers(): void {

    this.router.navigate([
      '/careers'
    ]);

  }

}