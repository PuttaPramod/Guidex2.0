import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Career {
  id: string;
  title: string;
  roadmapId: string;
  icon: string;
  category: string;
  description: string;
  education: string[];
  skills: string[];
  industries: string[];
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './careers.html',
  styleUrl: './careers.css'
})
export class Careers {

  // =========================================================
  // SEARCH + FILTER
  // =========================================================

  searchQuery = signal('');
  selectedCategory = signal('All');


  // =========================================================
  // CAREER DATA
  // =========================================================

  careers: Career[] = [

    // -------------------------------------------------------
    // 1. SOFTWARE DEVELOPER
    // -------------------------------------------------------

    {
      id: 'software-developer',
      title: 'Software Developer',
      roadmapId: 'software-developer',
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

      skills: [
        'Programming',
        'Problem Solving',
        'Data Structures',
        'Git'
      ],

      industries: [
        'Software',
        'FinTech',
        'E-Commerce',
        'SaaS'
      ]
    },


    // -------------------------------------------------------
    // 2. WEB DEVELOPER
    // -------------------------------------------------------

    {
      id: 'web-developer',
      title: 'Web Developer',
      roadmapId: 'web-developer',
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

      skills: [
        'HTML & CSS',
        'JavaScript',
        'Angular / React',
        'APIs'
      ],

      industries: [
        'Software',
        'E-Commerce',
        'Startups',
        'Digital Media'
      ]
    },


    // -------------------------------------------------------
    // 3. CYBERSECURITY ANALYST
    // -------------------------------------------------------

    {
      id: 'cybersecurity-analyst',
      title: 'Cybersecurity Analyst',
      roadmapId: 'cybersecurity',
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

      skills: [
        'Networking',
        'Security',
        'Linux',
        'Threat Analysis'
      ],

      industries: [
        'Cybersecurity',
        'Banking',
        'Government',
        'Technology'
      ]
    },


    // -------------------------------------------------------
    // 4. CLOUD ENGINEER
    // -------------------------------------------------------

    {
      id: 'cloud-engineer',
      title: 'Cloud Engineer',
      roadmapId: 'cloud-engineer',
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

      skills: [
        'Cloud Computing',
        'Linux',
        'Networking',
        'DevOps'
      ],

      industries: [
        'Cloud',
        'Software',
        'SaaS',
        'Enterprise IT'
      ]
    },


    // -------------------------------------------------------
    // 5. DOCTOR
    // -------------------------------------------------------

    {
      id: 'doctor',
      title: 'Doctor',
      roadmapId: 'doctor',
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

      skills: [
        'Medical Knowledge',
        'Clinical Skills',
        'Communication',
        'Attention to Detail'
      ],

      industries: [
        'Hospitals',
        'Clinics',
        'Healthcare',
        'Research'
      ]
    },


    // -------------------------------------------------------
    // 6. PHARMACIST
    // -------------------------------------------------------

    {
      id: 'pharmacist',
      title: 'Pharmacist',
      roadmapId: 'pharmacist',
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

      skills: [
        'Pharmacology',
        'Accuracy',
        'Communication',
        'Patient Care'
      ],

      industries: [
        'Hospitals',
        'Pharmaceuticals',
        'Research',
        'Retail'
      ]
    },


    // -------------------------------------------------------
    // 7. NURSE
    // -------------------------------------------------------

    {
      id: 'nurse',
      title: 'Nurse',
      roadmapId: 'nurse',
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

      skills: [
        'Patient Care',
        'Communication',
        'Clinical Skills',
        'Empathy'
      ],

      industries: [
        'Hospitals',
        'Clinics',
        'Healthcare',
        'Community Health'
      ]
    },


    // -------------------------------------------------------
    // 8. CHARTERED ACCOUNTANT
    // -------------------------------------------------------

    {
      id: 'chartered-accountant',
      title: 'Chartered Accountant',
      roadmapId: 'chartered-accountant',
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

      skills: [
        'Accounting',
        'Taxation',
        'Financial Analysis',
        'Attention to Detail'
      ],

      industries: [
        'Accounting',
        'Banking',
        'Finance',
        'Consulting'
      ]
    },


    // -------------------------------------------------------
    // 9. FINANCIAL ANALYST
    // -------------------------------------------------------

    {
      id: 'financial-analyst',
      title: 'Financial Analyst',
      roadmapId: 'financial-analyst',
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

      skills: [
        'Financial Analysis',
        'Excel',
        'Economics',
        'Communication'
      ],

      industries: [
        'Banking',
        'Investment',
        'Consulting',
        'FinTech'
      ]
    },


    // -------------------------------------------------------
    // 10. BUSINESS ANALYST
    // -------------------------------------------------------

    {
      id: 'business-analyst',
      title: 'Business Analyst',
      roadmapId: 'business-analyst',
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

      skills: [
        'Analysis',
        'Communication',
        'Business Strategy',
        'Data Interpretation'
      ],

      industries: [
        'Consulting',
        'Banking',
        'Technology',
        'E-Commerce'
      ]
    },


    // -------------------------------------------------------
    // 11. ENTREPRENEUR
    // -------------------------------------------------------

    {
      id: 'entrepreneur',
      title: 'Entrepreneur',
      roadmapId: 'entrepreneur',
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

      skills: [
        'Leadership',
        'Decision Making',
        'Communication',
        'Business Strategy'
      ],

      industries: [
        'Startups',
        'Technology',
        'Retail',
        'Services'
      ]
    },


    // -------------------------------------------------------
    // 12. UI/UX DESIGNER
    // -------------------------------------------------------

    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      roadmapId: 'ui-ux-designer',
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

      skills: [
        'User Research',
        'Visual Design',
        'Prototyping',
        'Design Tools'
      ],

      industries: [
        'Technology',
        'Startups',
        'E-Commerce',
        'Product Companies'
      ]
    },


    // -------------------------------------------------------
    // 13. GRAPHIC DESIGNER
    // -------------------------------------------------------

    {
      id: 'graphic-designer',
      title: 'Graphic Designer',
      roadmapId: 'graphic-designer',
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

      skills: [
        'Typography',
        'Visual Design',
        'Branding',
        'Design Tools'
      ],

      industries: [
        'Advertising',
        'Media',
        'Technology',
        'Marketing'
      ]
    },


    // -------------------------------------------------------
    // 14. LAWYER
    // -------------------------------------------------------

    {
      id: 'lawyer',
      title: 'Lawyer',
      roadmapId: 'lawyer',
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

      skills: [
        'Legal Research',
        'Communication',
        'Critical Thinking',
        'Writing'
      ],

      industries: [
        'Law Firms',
        'Corporate',
        'Government',
        'Legal Consulting'
      ]
    },


    // -------------------------------------------------------
    // 15. PSYCHOLOGIST
    // -------------------------------------------------------

    {
      id: 'psychologist',
      title: 'Psychologist',
      roadmapId: 'psychologist',
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

      skills: [
        'Observation',
        'Communication',
        'Research',
        'Empathy'
      ],

      industries: [
        'Healthcare',
        'Education',
        'Research',
        'Organizations'
      ]
    }

  ];


  // =========================================================
  // CATEGORIES
  // =========================================================

  categories = [
    'All',
    'Technology',
    'Medical',
    'Finance',
    'Business',
    'Design',
    'Law & Humanities'
  ];


  // =========================================================
  // FILTERED CAREERS
  // =========================================================

  filteredCareers = computed(() => {

    const query = this.searchQuery()
      .trim()
      .toLowerCase();

    const category = this.selectedCategory();

    return this.careers.filter(career => {

      const matchesCategory =
        category === 'All' ||
        career.category === category;

      const matchesSearch =
        !query ||
        career.title.toLowerCase().includes(query) ||
        career.description.toLowerCase().includes(query) ||
        career.skills.some(skill =>
          skill.toLowerCase().includes(query)
        ) ||
        career.industries.some(industry =>
          industry.toLowerCase().includes(query)
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
  // TRACK BY
  // =========================================================

  trackByCareer(
    index: number,
    career: Career
  ): string {
    return career.id;
  }

}