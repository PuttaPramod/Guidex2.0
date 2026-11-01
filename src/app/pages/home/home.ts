
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  quickActions = [
    {
      icon: '🧠',
      title: 'Smart Quiz',
      description: 'Find paths that match your interests.',
      link: '/quiz'
    },
    {
      icon: '💼',
      title: 'Careers',
      description: 'Explore careers and required skills.',
      link: '/careers'
    },
    {
      icon: '🏫',
      title: 'Colleges',
      description: 'Explore courses and colleges.',
      link: '/colleges'
    }
  ];

  // Streams
  
streams = [
  {
    icon: '🔬',
    name: 'Science',
    description: 'Engineering, medicine & research',
    link: '/streams/science'
  },
  {
    icon: '📊',
    name: 'Commerce',
    description: 'Business, finance & accounting',
    link: '/streams/commerce'
  },
  {
    icon: '🎨',
    name: 'Arts & Humanities',
    description: 'Law, design, media & psychology',
    link: '/streams/arts'
  },
  {
    icon: '🛠️',
    name: 'Polytechnic & ITI',
    description: 'Technical & skill-based careers',
    link: '/streams/polytechnic'
  }
];


  // Popular Careers
  careers = [
    {
      icon: '💻',
      title: 'Software Developer',
      category: 'Technology',
      description: 'Build software, websites and applications.',
      link: '/careers/software-developer'
    },
    {
      icon: '🩺',
      title: 'Doctor',
      category: 'Healthcare',
      description: 'Explore medical education and healthcare careers.',
      link: '/careers/doctor'
    },
    {
      icon: '🎨',
      title: 'UI/UX Designer',
      category: 'Design',
      description: 'Create useful and engaging digital experiences.',
      link: '/careers/ui-ux-designer'
    },
    {
      icon: '⚖️',
      title: 'Lawyer',
      category: 'Law',
      description: 'Explore legal education and professional pathways.',
      link: '/careers/lawyer'
    }
  ];

  // Entrance Exams
  
exams = [
  {
    name: 'JEE Main',
    category: 'Engineering',
    description: 'Engineering entrance',
    link: '/exams/jee-main'
  },
  {
    name: 'NEET',
    category: 'Medical',
    description: 'Medical entrance',
    link: '/exams/neet-ug'
  },
  {
    name: 'CUET',
    category: 'University',
    description: 'University admissions',
    link: '/exams/cuet-ug'
  },
  {
    name: 'AP EAPCET',
    category: 'Engineering / Medical',
    description: 'Andhra Pradesh entrance',
    link: '/exams/ap-eapcet'
  },
  {
    name: 'AP POLYCET',
    category: 'Polytechnic',
    description: 'Diploma entrance',
    link: '/exams/ap-polycet'
  }
];


}
