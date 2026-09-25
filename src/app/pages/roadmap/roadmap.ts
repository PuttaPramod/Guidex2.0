import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserState } from '../../services/user-state';

interface RoadmapStep {
  title: string;
  description: string;
  duration: string;
  skills: string[];
}

interface CareerRoadmap {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  duration: string;
  level: string;
  steps: RoadmapStep[];
  skills: string[];
  careers: string[];
}

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './roadmap.html',
  styleUrl: './roadmap.css'
})
export class Roadmap implements OnInit {

  private readonly userState = inject(UserState);

  constructor(
    private route: ActivatedRoute
  ) {}


  // =========================================================
  // SELECTED ROADMAP
  // =========================================================

  selectedRoadmapId = '';

  /*
   * Stores completion state of each step.
   *
   * Example for 7 steps:
   *
   * [
   *   true,
   *   true,
   *   false,
   *   false,
   *   false,
   *   false,
   *   false
   * ]
   */
  completedSteps: boolean[] = [];


  // =========================================================
  // ROADMAP DATA
  // =========================================================

  roadmaps: CareerRoadmap[] = [

    // =======================================================
    // 1. SOFTWARE DEVELOPER
    // =======================================================

    {
      id: 'software-developer',
      title: 'Software Developer',
      category: 'Technology',
      icon: '💻',

      description:
        'A structured path from programming fundamentals to building professional software applications.',

      duration: '2–4 years',
      level: 'Beginner → Advanced',

      steps: [
        {
          title: 'Learn Programming Fundamentals',
          description:
            'Learn variables, data types, conditions, loops, functions and programming logic.',
          duration: '2–3 months',
          skills: [
            'Programming',
            'Problem Solving',
            'Algorithms'
          ]
        },
        {
          title: 'Learn Data Structures',
          description:
            'Understand arrays, strings, stacks, queues, linked lists, trees and basic algorithms.',
          duration: '2–3 months',
          skills: [
            'DSA',
            'Algorithms',
            'Problem Solving'
          ]
        },
        {
          title: 'Learn Web Development',
          description:
            'Build a strong foundation in HTML, CSS and JavaScript.',
          duration: '2–3 months',
          skills: [
            'HTML',
            'CSS',
            'JavaScript'
          ]
        },
        {
          title: 'Learn Frontend Development',
          description:
            'Learn Angular or React and build modern responsive applications.',
          duration: '2–4 months',
          skills: [
            'Angular',
            'TypeScript',
            'Components'
          ]
        },
        {
          title: 'Learn Backend Development',
          description:
            'Learn servers, APIs, authentication and backend application development.',
          duration: '3–4 months',
          skills: [
            'Node.js',
            'Express',
            'REST API'
          ]
        },
        {
          title: 'Learn Databases',
          description:
            'Learn how applications store and manage structured and unstructured data.',
          duration: '1–2 months',
          skills: [
            'MongoDB',
            'SQL',
            'Database Design'
          ]
        },
        {
          title: 'Build Projects',
          description:
            'Create complete applications and publish them in your portfolio.',
          duration: '3–6 months',
          skills: [
            'Git',
            'GitHub',
            'Deployment'
          ]
        }
      ],

      skills: [
        'Programming',
        'Data Structures',
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Node.js',
        'Express',
        'MongoDB',
        'Git',
        'GitHub'
      ],

      careers: [
        'Software Developer',
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer'
      ]
    },


    // =======================================================
    // 2. WEB DEVELOPER
    // =======================================================

    {
      id: 'web-developer',
      title: 'Web Developer',
      category: 'Technology',
      icon: '🌐',

      description:
        'Learn how to design, develop and deploy modern responsive websites and web applications.',

      duration: '1–2 years',
      level: 'Beginner → Advanced',

      steps: [
        {
          title: 'Learn HTML',
          description:
            'Understand semantic HTML, page structure, forms, links and accessibility.',
          duration: '3–4 weeks',
          skills: [
            'HTML5',
            'Semantic HTML',
            'Forms'
          ]
        },
        {
          title: 'Learn CSS',
          description:
            'Learn responsive layouts, Flexbox, Grid, animations and modern styling.',
          duration: '1–2 months',
          skills: [
            'CSS3',
            'Flexbox',
            'Grid'
          ]
        },
        {
          title: 'Learn JavaScript',
          description:
            'Learn JavaScript fundamentals, DOM manipulation and asynchronous programming.',
          duration: '2–3 months',
          skills: [
            'JavaScript',
            'DOM',
            'Async Programming'
          ]
        },
        {
          title: 'Learn Angular or React',
          description:
            'Build modern component-based web applications using a frontend framework.',
          duration: '2–4 months',
          skills: [
            'Angular',
            'React',
            'TypeScript'
          ]
        },
        {
          title: 'Learn APIs',
          description:
            'Understand HTTP, REST APIs, JSON and frontend-backend communication.',
          duration: '1–2 months',
          skills: [
            'REST',
            'HTTP',
            'JSON'
          ]
        },
        {
          title: 'Build Web Projects',
          description:
            'Create responsive websites and complete web applications.',
          duration: '2–4 months',
          skills: [
            'Git',
            'GitHub',
            'Deployment'
          ]
        }
      ],

      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Responsive Design',
        'REST APIs',
        'Git',
        'GitHub'
      ],

      careers: [
        'Web Developer',
        'Frontend Developer',
        'UI Developer',
        'Full Stack Developer'
      ]
    },


    // =======================================================
    // 3. CYBERSECURITY ANALYST
    // =======================================================

    {
      id: 'cybersecurity',
      title: 'Cybersecurity Analyst',
      category: 'Technology',
      icon: '🔐',

      description:
        'Build the technical foundation needed to understand systems, networks, threats and security operations.',

      duration: '2–4 years',
      level: 'Beginner → Advanced',

      steps: [
        {
          title: 'Learn Computer Fundamentals',
          description:
            'Understand operating systems, hardware, processes and basic troubleshooting.',
          duration: '1–2 months',
          skills: [
            'Operating Systems',
            'Linux',
            'Windows'
          ]
        },
        {
          title: 'Learn Networking',
          description:
            'Understand IP addresses, protocols, ports, routing and network architecture.',
          duration: '2–3 months',
          skills: [
            'Networking',
            'TCP/IP',
            'DNS'
          ]
        },
        {
          title: 'Learn Linux',
          description:
            'Develop practical Linux administration and command-line skills.',
          duration: '1–2 months',
          skills: [
            'Linux',
            'Shell',
            'Permissions'
          ]
        },
        {
          title: 'Learn Security Fundamentals',
          description:
            'Understand vulnerabilities, authentication, threats and security controls.',
          duration: '2–3 months',
          skills: [
            'Security',
            'Threats',
            'Vulnerabilities'
          ]
        },
        {
          title: 'Learn Security Tools',
          description:
            'Practice monitoring, scanning and defensive security analysis in authorized environments.',
          duration: '2–4 months',
          skills: [
            'Security Tools',
            'Monitoring',
            'Analysis'
          ]
        },
        {
          title: 'Build Security Projects',
          description:
            'Create security labs and portfolio projects demonstrating defensive techniques.',
          duration: '2–4 months',
          skills: [
            'Labs',
            'Incident Analysis',
            'Documentation'
          ]
        }
      ],

      skills: [
        'Networking',
        'Linux',
        'Security Fundamentals',
        'Threat Analysis',
        'Monitoring',
        'Incident Response',
        'Security Tools'
      ],

      careers: [
        'Cybersecurity Analyst',
        'Security Analyst',
        'SOC Analyst',
        'Information Security Analyst'
      ]
    },


    // =======================================================
    // 4. CLOUD ENGINEER
    // =======================================================

    {
      id: 'cloud-engineer',
      title: 'Cloud Engineer',
      category: 'Technology',
      icon: '☁️',

      description:
        'Learn cloud infrastructure, networking, automation, containers and deployment.',

      duration: '2–4 years',
      level: 'Intermediate → Advanced',

      steps: [
        {
          title: 'Learn Linux',
          description:
            'Build strong command-line and system administration fundamentals.',
          duration: '1–2 months',
          skills: [
            'Linux',
            'Shell',
            'System Administration'
          ]
        },
        {
          title: 'Learn Networking',
          description:
            'Understand IP addressing, DNS, routing, firewalls and load balancing.',
          duration: '2–3 months',
          skills: [
            'Networking',
            'TCP/IP',
            'DNS'
          ]
        },
        {
          title: 'Learn Cloud Fundamentals',
          description:
            'Understand compute, storage, databases, networking and identity.',
          duration: '2–3 months',
          skills: [
            'Cloud',
            'Compute',
            'Storage'
          ]
        },
        {
          title: 'Learn Docker',
          description:
            'Understand containerization and application deployment.',
          duration: '1–2 months',
          skills: [
            'Docker',
            'Containers',
            'Images'
          ]
        },
        {
          title: 'Learn CI/CD',
          description:
            'Automate application building, testing and deployment.',
          duration: '1–2 months',
          skills: [
            'CI/CD',
            'Automation',
            'GitHub Actions'
          ]
        },
        {
          title: 'Build Cloud Projects',
          description:
            'Deploy applications and infrastructure in cloud environments.',
          duration: '2–4 months',
          skills: [
            'Deployment',
            'Monitoring',
            'Cloud Projects'
          ]
        }
      ],

      skills: [
        'Linux',
        'Networking',
        'Cloud Computing',
        'Docker',
        'CI/CD',
        'Infrastructure',
        'Monitoring'
      ],

      careers: [
        'Cloud Engineer',
        'Cloud Administrator',
        'DevOps Engineer',
        'Cloud Support Engineer'
      ]
    },


    // =======================================================
    // 5. DOCTOR
    // =======================================================

    {
      id: 'doctor',
      title: 'Doctor',
      category: 'Medical',
      icon: '🩺',

      description:
        'Follow the medical education pathway from undergraduate medical education to clinical practice.',

      duration: '5–10+ years',
      level: 'Beginner → Professional',

      steps: [
        {
          title: 'Complete Higher Secondary Education',
          description:
            'Build a strong foundation in Physics, Chemistry and Biology.',
          duration: '2 years',
          skills: [
            'Biology',
            'Physics',
            'Chemistry'
          ]
        },
        {
          title: 'Prepare for Medical Entrance',
          description:
            'Prepare for the applicable medical entrance examination.',
          duration: '1–2 years',
          skills: [
            'Biology',
            'Chemistry',
            'Physics'
          ]
        },
        {
          title: 'Complete MBBS',
          description:
            'Study basic medical sciences, clinical subjects and patient care.',
          duration: '5–6 years',
          skills: [
            'Medical Science',
            'Clinical Skills',
            'Patient Care'
          ]
        },
        {
          title: 'Clinical Training',
          description:
            'Gain supervised clinical experience across medical departments.',
          duration: '1 year',
          skills: [
            'Diagnosis',
            'Communication',
            'Clinical Practice'
          ]
        },
        {
          title: 'Choose Specialization',
          description:
            'Pursue postgraduate education in a selected medical specialty.',
          duration: '3+ years',
          skills: [
            'Specialization',
            'Clinical Practice',
            'Research'
          ]
        }
      ],

      skills: [
        'Medical Knowledge',
        'Clinical Skills',
        'Diagnosis',
        'Communication',
        'Patient Care',
        'Research'
      ],

      careers: [
        'Doctor',
        'Medical Officer',
        'Specialist Doctor',
        'Medical Researcher'
      ]
    },


    // =======================================================
    // 6. PHARMACIST
    // =======================================================

    {
      id: 'pharmacist',
      title: 'Pharmacist',
      category: 'Medical',
      icon: '💊',

      description:
        'Build knowledge in medicines, pharmaceutical sciences, patient care and medication safety.',

      duration: '2–5 years',
      level: 'Beginner → Professional',

      steps: [
        {
          title: 'Learn Basic Sciences',
          description:
            'Build foundations in chemistry, biology and pharmaceutical concepts.',
          duration: '3–6 months',
          skills: [
            'Chemistry',
            'Biology',
            'Pharmaceutical Basics'
          ]
        },
        {
          title: 'Complete Pharmacy Education',
          description:
            'Study pharmaceutical sciences through an appropriate pharmacy program.',
          duration: '2–4 years',
          skills: [
            'Pharmacology',
            'Pharmaceutics',
            'Pharmaceutical Chemistry'
          ]
        },
        {
          title: 'Learn Patient Care',
          description:
            'Understand medication use, dosage, safety and patient communication.',
          duration: '3–6 months',
          skills: [
            'Patient Care',
            'Medication Safety',
            'Communication'
          ]
        },
        {
          title: 'Gain Practical Experience',
          description:
            'Gain practical exposure through pharmacy, hospital or industry environments.',
          duration: '3–12 months',
          skills: [
            'Dispensing',
            'Inventory',
            'Quality Control'
          ]
        },
        {
          title: 'Choose Career Path',
          description:
            'Explore hospital, pharmaceutical, research or retail pharmacy careers.',
          duration: '1–3 months',
          skills: [
            'Professional Skills',
            'Research',
            'Communication'
          ]
        }
      ],

      skills: [
        'Pharmacology',
        'Pharmaceutics',
        'Medication Safety',
        'Patient Care',
        'Communication',
        'Quality Control'
      ],

      careers: [
        'Pharmacist',
        'Hospital Pharmacist',
        'Clinical Pharmacist',
        'Pharmaceutical Professional'
      ]
    },


    // =======================================================
    // 7. NURSE
    // =======================================================

    {
      id: 'nurse',
      title: 'Nurse',
      category: 'Medical',
      icon: '🏥',

      description:
        'Develop clinical, patient-care and communication skills for professional nursing.',

      duration: '2–4 years',
      level: 'Beginner → Professional',

      steps: [
        {
          title: 'Learn Biology and Health Sciences',
          description:
            'Build a foundation in biology, anatomy and basic health sciences.',
          duration: '3–6 months',
          skills: [
            'Biology',
            'Anatomy',
            'Health Science'
          ]
        },
        {
          title: 'Complete Nursing Education',
          description:
            'Complete an appropriate nursing education program.',
          duration: '2–4 years',
          skills: [
            'Nursing Science',
            'Anatomy',
            'Physiology'
          ]
        },
        {
          title: 'Develop Clinical Skills',
          description:
            'Learn patient assessment, medication administration and clinical procedures.',
          duration: '6–12 months',
          skills: [
            'Clinical Skills',
            'Patient Assessment',
            'Medication'
          ]
        },
        {
          title: 'Complete Clinical Training',
          description:
            'Gain supervised experience in hospitals and healthcare environments.',
          duration: '6–12 months',
          skills: [
            'Patient Care',
            'Emergency Care',
            'Teamwork'
          ]
        },
        {
          title: 'Build Professional Career',
          description:
            'Explore hospital, community health and specialized nursing opportunities.',
          duration: '1–3 months',
          skills: [
            'Communication',
            'Leadership',
            'Patient Care'
          ]
        }
      ],

      skills: [
        'Patient Care',
        'Clinical Skills',
        'Communication',
        'Emergency Care',
        'Teamwork',
        'Empathy'
      ],

      careers: [
        'Nurse',
        'Staff Nurse',
        'Clinical Nurse',
        'Community Health Nurse'
      ]
    },


    // =======================================================
    // 8. CHARTERED ACCOUNTANT
    // =======================================================

    {
      id: 'chartered-accountant',
      title: 'Chartered Accountant',
      category: 'Finance',
      icon: '🧮',

      description:
        'Build a structured foundation in accounting, taxation, auditing, financial reporting and professional CA preparation.',

      duration: '3–5 years',
      level: 'Beginner → Professional',

      steps: [
        {
          title: 'Build Commerce Fundamentals',
          description:
            'Learn accounting, economics, business studies and basic financial concepts.',
          duration: '2–3 months',
          skills: [
            'Accounting Basics',
            'Economics',
            'Business Fundamentals'
          ]
        },
        {
          title: 'Prepare for CA Foundation',
          description:
            'Study accounting, business law, quantitative aptitude and economics.',
          duration: '4–6 months',
          skills: [
            'Accounting',
            'Business Law',
            'Quantitative Aptitude',
            'Economics'
          ]
        },
        {
          title: 'Complete CA Intermediate',
          description:
            'Develop deeper knowledge of accounting, taxation, auditing and financial management.',
          duration: '8–12 months',
          skills: [
            'Advanced Accounting',
            'Taxation',
            'Auditing',
            'Financial Management'
          ]
        },
        {
          title: 'Develop Practical Skills',
          description:
            'Gain practical exposure to accounting software, financial statements and taxation.',
          duration: '6–12 months',
          skills: [
            'Tally',
            'Excel',
            'GST',
            'Income Tax'
          ]
        },
        {
          title: 'Complete Articleship',
          description:
            'Gain professional experience in accounting, audit, taxation and compliance.',
          duration: '2–3 years',
          skills: [
            'Audit',
            'Taxation',
            'Accounting',
            'Compliance'
          ]
        },
        {
          title: 'Prepare for CA Final',
          description:
            'Develop advanced professional knowledge and prepare for the final stage.',
          duration: '8–12 months',
          skills: [
            'Financial Reporting',
            'Auditing',
            'Direct Tax',
            'Indirect Tax'
          ]
        },
        {
          title: 'Start Your Professional Career',
          description:
            'Build your professional profile and explore finance, audit and taxation opportunities.',
          duration: '1–3 months',
          skills: [
            'Resume',
            'Communication',
            'Interview Skills'
          ]
        }
      ],

      skills: [
        'Accounting',
        'Auditing',
        'Taxation',
        'Financial Reporting',
        'Excel',
        'Tally',
        'GST',
        'Financial Analysis',
        'Corporate Law',
        'Communication'
      ],

      careers: [
        'Chartered Accountant',
        'Tax Consultant',
        'Audit Associate',
        'Financial Consultant',
        'Finance Manager'
      ]
    },


    // =======================================================
    // 9. FINANCIAL ANALYST
    // =======================================================

    {
      id: 'financial-analyst',
      title: 'Financial Analyst',
      category: 'Finance',
      icon: '📈',

      description:
        'Learn financial analysis, modeling, reporting and business decision support.',

      duration: '1–3 years',
      level: 'Beginner → Professional',

      steps: [
        {
          title: 'Learn Accounting',
          description:
            'Understand financial statements, accounting principles and business transactions.',
          duration: '2–3 months',
          skills: [
            'Accounting',
            'Financial Statements'
          ]
        },
        {
          title: 'Learn Excel',
          description:
            'Develop spreadsheet, formula and financial analysis skills.',
          duration: '1–2 months',
          skills: [
            'Excel',
            'Formulas',
            'Data Analysis'
          ]
        },
        {
          title: 'Learn Financial Analysis',
          description:
            'Analyze company performance, ratios and financial statements.',
          duration: '2–3 months',
          skills: [
            'Financial Analysis',
            'Ratios',
            'Reporting'
          ]
        },
        {
          title: 'Learn Financial Modeling',
          description:
            'Build models for forecasting, valuation and business planning.',
          duration: '2–4 months',
          skills: [
            'Financial Modeling',
            'Forecasting',
            'Valuation'
          ]
        },
        {
          title: 'Build Projects',
          description:
            'Analyze companies and create financial analysis projects for your portfolio.',
          duration: '2–3 months',
          skills: [
            'Research',
            'Analysis',
            'Presentation'
          ]
        }
      ],

      skills: [
        'Financial Analysis',
        'Excel',
        'Accounting',
        'Financial Modeling',
        'Forecasting',
        'Economics',
        'Communication'
      ],

      careers: [
        'Financial Analyst',
        'Investment Analyst',
        'Business Analyst',
        'Finance Analyst'
      ]
    },


    // =======================================================
    // 10. BUSINESS ANALYST
    // =======================================================

    {
      id: 'business-analyst',
      title: 'Business Analyst',
      category: 'Business',
      icon: '📊',

      description:
        'Learn business analysis, requirements gathering, process improvement and data interpretation.',

      duration: '1–2 years',
      level: 'Beginner → Professional',

      steps: [
        {
          title: 'Learn Business Fundamentals',
          description:
            'Understand organizations, business processes, markets and business functions.',
          duration: '1–2 months',
          skills: [
            'Business Basics',
            'Processes',
            'Markets'
          ]
        },
        {
          title: 'Learn Requirements Analysis',
          description:
            'Learn how to identify, document and communicate business requirements.',
          duration: '2–3 months',
          skills: [
            'Requirements',
            'Documentation',
            'Communication'
          ]
        },
        {
          title: 'Learn Data Analysis',
          description:
            'Use spreadsheets, SQL and dashboards to analyze business information.',
          duration: '2–3 months',
          skills: [
            'Excel',
            'SQL',
            'Data Analysis'
          ]
        },
        {
          title: 'Learn Process Modeling',
          description:
            'Understand process mapping, workflows and process improvement.',
          duration: '1–2 months',
          skills: [
            'Process Mapping',
            'BPMN',
            'Workflows'
          ]
        },
        {
          title: 'Build Business Projects',
          description:
            'Create requirement documents, process maps and analysis reports.',
          duration: '2–3 months',
          skills: [
            'Projects',
            'Reporting',
            'Presentation'
          ]
        }
      ],

      skills: [
        'Business Analysis',
        'Requirements',
        'Excel',
        'SQL',
        'Process Mapping',
        'Communication',
        'Data Interpretation'
      ],

      careers: [
        'Business Analyst',
        'Systems Analyst',
        'Product Analyst',
        'Process Analyst'
      ]
    },


    // =======================================================
    // 11. ENTREPRENEUR
    // =======================================================

    {
      id: 'entrepreneur',
      title: 'Entrepreneur',
      category: 'Business',
      icon: '🚀',

      description:
        'Learn how to identify opportunities, build products and manage a business.',

      duration: '1–3 years',
      level: 'Beginner → Advanced',

      steps: [
        {
          title: 'Learn Business Fundamentals',
          description:
            'Understand markets, customers, business models and basic finance.',
          duration: '1–2 months',
          skills: [
            'Business',
            'Finance',
            'Markets'
          ]
        },
        {
          title: 'Identify a Problem',
          description:
            'Find real customer problems and validate potential business opportunities.',
          duration: '1–2 months',
          skills: [
            'Research',
            'Problem Solving',
            'Customer Discovery'
          ]
        },
        {
          title: 'Build a Business Model',
          description:
            'Define customers, value proposition, revenue streams and business operations.',
          duration: '1–2 months',
          skills: [
            'Business Model',
            'Strategy',
            'Planning'
          ]
        },
        {
          title: 'Build an MVP',
          description:
            'Create and test a minimum viable product with real users.',
          duration: '2–6 months',
          skills: [
            'MVP',
            'Product Development',
            'Testing'
          ]
        },
        {
          title: 'Learn Marketing and Sales',
          description:
            'Develop customer acquisition, marketing and sales strategies.',
          duration: '2–3 months',
          skills: [
            'Marketing',
            'Sales',
            'Branding'
          ]
        },
        {
          title: 'Scale the Business',
          description:
            'Learn operations, hiring, finance and sustainable business growth.',
          duration: '1–3 years',
          skills: [
            'Leadership',
            'Finance',
            'Operations'
          ]
        }
      ],

      skills: [
        'Leadership',
        'Business Strategy',
        'Communication',
        'Marketing',
        'Sales',
        'Finance',
        'Decision Making'
      ],

      careers: [
        'Entrepreneur',
        'Startup Founder',
        'Business Owner',
        'Product Founder'
      ]
    },


    // =======================================================
    // 12. UI/UX DESIGNER
    // =======================================================

    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      category: 'Design',
      icon: '🎨',

      description:
        'Learn user research, interface design, prototyping and design systems.',

      duration: '1–2 years',
      level: 'Beginner → Professional',

      steps: [
        {
          title: 'Learn Design Fundamentals',
          description:
            'Understand typography, spacing, composition, color and visual hierarchy.',
          duration: '1–2 months',
          skills: [
            'Typography',
            'Color',
            'Layout'
          ]
        },
        {
          title: 'Learn UX Research',
          description:
            'Understand users, personas, journeys and information architecture.',
          duration: '1–2 months',
          skills: [
            'UX Research',
            'Personas',
            'User Flows'
          ]
        },
        {
          title: 'Learn Figma',
          description:
            'Create wireframes, interfaces and interactive prototypes.',
          duration: '1–2 months',
          skills: [
            'Figma',
            'Wireframing',
            'Prototyping'
          ]
        },
        {
          title: 'Design Interfaces',
          description:
            'Create responsive and accessible digital interfaces.',
          duration: '2–3 months',
          skills: [
            'UI Design',
            'Components',
            'Accessibility'
          ]
        },
        {
          title: 'Learn Design Systems',
          description:
            'Build reusable components and maintain visual consistency.',
          duration: '1–2 months',
          skills: [
            'Design Systems',
            'Components',
            'Consistency'
          ]
        },
        {
          title: 'Build a Portfolio',
          description:
            'Create case studies and document your design process.',
          duration: '2–3 months',
          skills: [
            'Case Studies',
            'Portfolio',
            'Presentation'
          ]
        }
      ],

      skills: [
        'UI Design',
        'UX Research',
        'Figma',
        'Wireframing',
        'Prototyping',
        'Design Systems',
        'Visual Design'
      ],

      careers: [
        'UI Designer',
        'UX Designer',
        'Product Designer',
        'Interaction Designer'
      ]
    },


    // =======================================================
    // 13. GRAPHIC DESIGNER
    // =======================================================

    {
      id: 'graphic-designer',
      title: 'Graphic Designer',
      category: 'Design',
      icon: '🖌️',

      description:
        'Learn visual communication, branding, typography and digital design.',

      duration: '1–2 years',
      level: 'Beginner → Professional',

      steps: [
        {
          title: 'Learn Design Principles',
          description:
            'Understand composition, balance, contrast, hierarchy and visual communication.',
          duration: '1–2 months',
          skills: [
            'Composition',
            'Contrast',
            'Hierarchy'
          ]
        },
        {
          title: 'Learn Typography',
          description:
            'Understand fonts, typography systems and text hierarchy.',
          duration: '1 month',
          skills: [
            'Typography',
            'Fonts',
            'Layout'
          ]
        },
        {
          title: 'Learn Design Tools',
          description:
            'Learn professional tools for creating digital graphics.',
          duration: '2–3 months',
          skills: [
            'Figma',
            'Photoshop',
            'Illustrator'
          ]
        },
        {
          title: 'Learn Branding',
          description:
            'Create logos, color systems and visual identities.',
          duration: '2–3 months',
          skills: [
            'Branding',
            'Logo Design',
            'Visual Identity'
          ]
        },
        {
          title: 'Build a Portfolio',
          description:
            'Create design projects covering different visual communication needs.',
          duration: '2–3 months',
          skills: [
            'Portfolio',
            'Presentation',
            'Creative Direction'
          ]
        }
      ],

      skills: [
        'Graphic Design',
        'Typography',
        'Branding',
        'Visual Design',
        'Figma',
        'Photoshop',
        'Illustrator'
      ],

      careers: [
        'Graphic Designer',
        'Visual Designer',
        'Brand Designer',
        'Creative Designer'
      ]
    },


    // =======================================================
    // 14. LAWYER
    // =======================================================

    {
      id: 'lawyer',
      title: 'Lawyer',
      category: 'Law & Humanities',
      icon: '⚖️',

      description:
        'Build knowledge of law, legal research, communication and professional legal practice.',

      duration: '3–6 years',
      level: 'Beginner → Professional',

      steps: [
        {
          title: 'Build Academic Foundation',
          description:
            'Develop strong reading, writing, reasoning and communication skills.',
          duration: '1–2 years',
          skills: [
            'Reading',
            'Writing',
            'Reasoning'
          ]
        },
        {
          title: 'Study Law',
          description:
            'Complete an appropriate undergraduate or integrated law program.',
          duration: '3–5 years',
          skills: [
            'Legal Studies',
            'Constitutional Law',
            'Contracts'
          ]
        },
        {
          title: 'Learn Legal Research',
          description:
            'Learn case analysis, legal databases and legal research methods.',
          duration: '3–6 months',
          skills: [
            'Legal Research',
            'Case Analysis',
            'Writing'
          ]
        },
        {
          title: 'Gain Practical Experience',
          description:
            'Develop practical exposure through internships and legal work.',
          duration: '6–12 months',
          skills: [
            'Drafting',
            'Court Procedures',
            'Client Communication'
          ]
        },
        {
          title: 'Build Professional Career',
          description:
            'Choose an area such as corporate law, litigation or legal consulting.',
          duration: '1–2 years',
          skills: [
            'Advocacy',
            'Negotiation',
            'Professional Communication'
          ]
        }
      ],

      skills: [
        'Legal Research',
        'Communication',
        'Critical Thinking',
        'Legal Writing',
        'Negotiation',
        'Advocacy'
      ],

      careers: [
        'Lawyer',
        'Corporate Lawyer',
        'Legal Consultant',
        'Legal Advisor'
      ]
    },


    // =======================================================
    // 15. PSYCHOLOGIST
    // =======================================================

    {
      id: 'psychologist',
      title: 'Psychologist',
      category: 'Law & Humanities',
      icon: '🧠',

      description:
        'Learn psychology, human behavior, research methods and professional psychological practice.',

      duration: '3–7 years',
      level: 'Beginner → Professional',

      steps: [
        {
          title: 'Learn Psychology Fundamentals',
          description:
            'Understand human behavior, cognition, emotion and development.',
          duration: '3–6 months',
          skills: [
            'Psychology',
            'Human Behavior',
            'Cognition'
          ]
        },
        {
          title: 'Complete Psychology Degree',
          description:
            'Study core areas of psychology and research methods.',
          duration: '3–4 years',
          skills: [
            'Psychology',
            'Research Methods',
            'Statistics'
          ]
        },
        {
          title: 'Choose a Specialization',
          description:
            'Explore areas such as clinical, counseling, organizational or educational psychology.',
          duration: '1–2 years',
          skills: [
            'Specialization',
            'Assessment',
            'Research'
          ]
        },
        {
          title: 'Gain Practical Experience',
          description:
            'Develop supervised practical experience relevant to your specialization.',
          duration: '6–12 months',
          skills: [
            'Observation',
            'Communication',
            'Assessment'
          ]
        },
        {
          title: 'Build Professional Skills',
          description:
            'Develop communication, research, documentation and professional practice skills.',
          duration: '3–6 months',
          skills: [
            'Communication',
            'Documentation',
            'Research'
          ]
        }
      ],

      skills: [
        'Psychology',
        'Observation',
        'Communication',
        'Research',
        'Assessment',
        'Empathy',
        'Critical Thinking'
      ],

      careers: [
        'Psychologist',
        'Counseling Professional',
        'Organizational Psychology Professional',
        'Researcher'
      ]
    }

  ];


  // =========================================================
  // INITIALIZE
  // =========================================================

  ngOnInit(): void {

    this.route.queryParamMap.subscribe((params) => {

      const careerId = params.get('career');


      /*
       * No career in URL means:
       * User opened Roadmap from Navbar.
       *
       * Therefore no roadmap is selected.
       */
      if (!careerId) {

        this.selectedRoadmapId = '';

        this.completedSteps = [];

        return;

      }


      /*
       * Career ID exists:
       * User came from Careers → Roadmap
       * or clicked a roadmap card.
       */
      const roadmap = this.roadmaps.find(
        item => item.id === careerId
      );


      if (roadmap) {

        this.selectedRoadmapId =
          roadmap.id;


        /*
         * Load previously saved progress
         * for this roadmap.
         */
        this.loadRoadmapProgress(
          roadmap
        );


        // Add roadmap to Recently Viewed
        this.userState.addRecentRoadmap({

          id: roadmap.id,

          title: roadmap.title,

          icon: roadmap.icon

        });

      } else {

        this.selectedRoadmapId = '';

        this.completedSteps = [];

      }

    });

  }


  // =========================================================
  // LOAD ROADMAP PROGRESS
  // =========================================================

  private loadRoadmapProgress(
    roadmap: CareerRoadmap
  ): void {

    this.completedSteps =
      this.userState.getRoadmapProgress(

        roadmap.id,

        roadmap.steps.length

      );

  }


  // =========================================================
  // SELECTED ROADMAP
  // =========================================================

  get selectedRoadmap(): CareerRoadmap | null {

    if (!this.selectedRoadmapId) {
      return null;
    }

    return this.roadmaps.find(
      roadmap =>
        roadmap.id ===
        this.selectedRoadmapId
    ) ?? null;

  }


  // =========================================================
  // MANUAL ROADMAP SELECTION
  // =========================================================

  selectRoadmap(
    id: string
  ): void {

    const roadmap =
      this.roadmaps.find(
        item => item.id === id
      );


    if (!roadmap) {
      return;
    }


    this.selectedRoadmapId =
      roadmap.id;


    /*
     * Load saved progress when
     * manually selecting a roadmap.
     */
    this.loadRoadmapProgress(
      roadmap
    );


    /*
     * Add roadmap to Recently Viewed.
     */
    this.userState.addRecentRoadmap({

      id: roadmap.id,

      title: roadmap.title,

      icon: roadmap.icon

    });


    /*
     * Update URL.
     *
     * Example:
     * /roadmap?career=lawyer
     */
    window.history.replaceState(

      {},

      '',

      `/roadmap?career=${roadmap.id}`

    );


    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    });

  }


  // =========================================================
  // TOGGLE ROADMAP STEP
  // =========================================================

  toggleStep(
    stepIndex: number
  ): void {

    const roadmap =
      this.selectedRoadmap;


    if (!roadmap) {
      return;
    }


    /*
     * Make sure the requested step
     * exists.
     */
    if (
      stepIndex < 0 ||
      stepIndex >= roadmap.steps.length
    ) {

      return;

    }


    /*
     * Toggle current state.
     */
    const completed =
      !this.completedSteps[stepIndex];


    /*
     * Update local UI state.
     */
    this.completedSteps[stepIndex] =
      completed;


    /*
     * Save the state in UserState
     * and localStorage.
     */
    this.userState.setRoadmapStepCompleted(

      roadmap.id,

      stepIndex,

      completed,

      roadmap.steps.length

    );

  }


  // =========================================================
  // COMPLETED STEPS
  // =========================================================

  get completedStepCount(): number {

    return this.completedSteps
      .filter(Boolean)
      .length;

  }


  // =========================================================
  // PROGRESS PERCENTAGE
  // =========================================================

  get progressPercentage(): number {

    if (!this.totalSteps) {
      return 0;
    }


    return Math.round(

      (
        this.completedStepCount /
        this.totalSteps
      ) * 100

    );

  }


  // =========================================================
  // RESET ROADMAP PROGRESS
  // =========================================================

  resetProgress(): void {

    const roadmap =
      this.selectedRoadmap;


    if (!roadmap) {
      return;
    }


    /*
     * Remove saved progress from UserState.
     */
    this.userState.clearRoadmapProgress(
      roadmap.id
    );


    /*
     * Reset local UI state.
     */
    this.completedSteps =
      Array(
        roadmap.steps.length
      ).fill(false);

  }


  // =========================================================
  // TOTAL STEPS
  // =========================================================

  get totalSteps(): number {

    return this.selectedRoadmap
      ?.steps.length ?? 0;

  }


  // =========================================================
  // TOTAL SKILLS
  // =========================================================

  get totalSkills(): number {

    return this.selectedRoadmap
      ?.skills.length ?? 0;

  }

}