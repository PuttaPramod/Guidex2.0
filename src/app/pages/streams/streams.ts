import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Stream {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  subjects: string[];
  careers: string[];
}

@Component({
  selector: 'app-streams',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './streams.html',
  styleUrl: './streams.css'
})
export class Streams {

  /* =====================================================
     SEARCH
     ===================================================== */

  searchQuery = signal('');

  selectedCategory = signal('All');


  /* =====================================================
     STREAM DATA
     ===================================================== */

  streams: Stream[] = [

    {
      id: 'science',
      name: 'Science',
      icon: '🔬',
      category: 'Academic',
      description:
        'Explore engineering, medicine, research and technology pathways.',
      subjects: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'Biology'
      ],
      careers: [
        'Engineer',
        'Doctor',
        'Scientist',
        'Researcher'
      ]
    },

    {
      id: 'commerce',
      name: 'Commerce',
      icon: '📊',
      category: 'Academic',
      description:
        'Build pathways in business, finance, accounting and management.',
      subjects: [
        'Accountancy',
        'Economics',
        'Business Studies',
        'Mathematics'
      ],
      careers: [
        'Accountant',
        'Financial Analyst',
        'Business Analyst',
        'Manager'
      ]
    },

    {
      id: 'arts',
      name: 'Arts & Humanities',
      icon: '🎨',
      category: 'Academic',
      description:
        'Discover opportunities in law, media, design, psychology and society.',
      subjects: [
        'History',
        'Political Science',
        'Psychology',
        'Languages'
      ],
      careers: [
        'Lawyer',
        'Psychologist',
        'Journalist',
        'Designer'
      ]
    },

    {
      id: 'polytechnic',
      name: 'Polytechnic & ITI',
      icon: '🔧',
      category: 'Technical',
      description:
        'Choose practical and skill-based pathways for technical careers.',
      subjects: [
        'Mechanical',
        'Electrical',
        'Civil',
        'Computer'
      ],
      careers: [
        'Technician',
        'Junior Engineer',
        'Electrician',
        'Technical Assistant'
      ]
    },

    {
      id: 'computer',
      name: 'Computer & IT',
      icon: '💻',
      category: 'Technology',
      description:
        'Explore software, web development, cybersecurity and IT careers.',
      subjects: [
        'Programming',
        'Web Development',
        'Databases',
        'Networking'
      ],
      careers: [
        'Software Developer',
        'Web Developer',
        'Cybersecurity Analyst',
        'Cloud Engineer'
      ]
    },

    {
      id: 'medical',
      name: 'Medical & Health',
      icon: '🩺',
      category: 'Professional',
      description:
        'Explore healthcare, medicine, pharmacy and allied health careers.',
      subjects: [
        'Biology',
        'Chemistry',
        'Physics',
        'Health Science'
      ],
      careers: [
        'Doctor',
        'Pharmacist',
        'Nurse',
        'Medical Technologist'
      ]
    },

    {
      id: 'management',
      name: 'Management',
      icon: '💼',
      category: 'Professional',
      description:
        'Build careers in management, entrepreneurship, marketing and finance.',
      subjects: [
        'Business',
        'Economics',
        'Finance',
        'Marketing'
      ],
      careers: [
        'Manager',
        'Entrepreneur',
        'Marketing Manager',
        'HR Manager'
      ]
    },

    {
      id: 'design',
      name: 'Design & Creative',
      icon: '✨',
      category: 'Creative',
      description:
        'Turn creativity into careers across design, media and digital experiences.',
      subjects: [
        'Visual Design',
        'UI/UX',
        'Animation',
        'Media'
      ],
      careers: [
        'UI/UX Designer',
        'Graphic Designer',
        'Animator',
        'Creative Director'
      ]
    }

  ];


  /* =====================================================
     CATEGORIES
     ===================================================== */

  categories = [
    'All',
    'Academic',
    'Technical',
    'Technology',
    'Professional',
    'Creative'
  ];


  /* =====================================================
     FILTERED STREAMS
     ===================================================== */

  filteredStreams = computed(() => {

    const query =
      this.searchQuery()
        .trim()
        .toLowerCase();

    const category =
      this.selectedCategory();

    return this.streams.filter(stream => {

      const matchesCategory =
        category === 'All' ||
        stream.category === category;

      const matchesSearch =
        !query ||
        stream.name.toLowerCase().includes(query) ||
        stream.description.toLowerCase().includes(query) ||
        stream.subjects.some(subject =>
          subject.toLowerCase().includes(query)
        ) ||
        stream.careers.some(career =>
          career.toLowerCase().includes(query)
        );

      return matchesCategory && matchesSearch;

    });

  });


  /* =====================================================
     CATEGORY SELECTOR
     ===================================================== */

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }


  /* =====================================================
     SEARCH CLEAR
     ===================================================== */

  clearSearch(): void {
    this.searchQuery.set('');
  }


  /* =====================================================
     TRACK BY
     ===================================================== */

  trackByStream(
    index: number,
    stream: Stream
  ): string {
    return stream.id;
  }

}