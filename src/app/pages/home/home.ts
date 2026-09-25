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

  streams = [
    {
      icon: '🔬',
      name: 'Science',
      description: 'Engineering, medicine & research',
      link: '/streams'
    },
    {
      icon: '📊',
      name: 'Commerce',
      description: 'Business, finance & accounting',
      link: '/streams'
    },
    {
      icon: '🎨',
      name: 'Arts & Humanities',
      description: 'Law, design, media & psychology',
      link: '/streams'
    },
    {
      icon: '🛠️',
      name: 'Polytechnic & ITI',
      description: 'Technical & skill-based careers',
      link: '/streams'
    }
  ];

  careers = [
    {
      icon: '💻',
      title: 'Software Developer',
      category: 'Technology',
      description: 'Build software, websites and applications.'
    },
    {
      icon: '🩺',
      title: 'Doctor',
      category: 'Healthcare',
      description: 'Explore medical education and healthcare careers.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Designer',
      category: 'Design',
      description: 'Create useful and engaging digital experiences.'
    },
    {
      icon: '⚖️',
      title: 'Lawyer',
      category: 'Law',
      description: 'Explore legal education and professional pathways.'
    }
  ];

  exams = [
    {
      name: 'JEE Main',
      category: 'Engineering',
      description: 'Engineering entrance'
    },
    {
      name: 'NEET',
      category: 'Medical',
      description: 'Medical entrance'
    },
    {
      name: 'CUET',
      category: 'University',
      description: 'University admissions'
    },
    {
      name: 'AP EAPCET',
      category: 'Engineering / Medical',
      description: 'Andhra Pradesh entrance'
    },
    {
      name: 'AP POLYCET',
      category: 'Polytechnic',
      description: 'Diploma entrance'
    }
  ];

}