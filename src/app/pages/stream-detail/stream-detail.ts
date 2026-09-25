import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface StreamInfo {
  id: string;
  name: string;
  icon: string;
  category: string;
  tagline: string;
  description: string;

  subjects: {
    name: string;
    icon: string;
    description: string;
  }[];

  careers: {
    name: string;
    icon: string;
    description: string;
  }[];

  courses: string[];
  exams: string[];
  skills: string[];

  roadmap: {
    step: string;
    title: string;
    description: string;
  }[];
}

@Component({
  selector: 'app-stream-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './stream-detail.html',
  styleUrl: './stream-detail.css'
})
export class StreamDetail {

  // =========================================================
  // CURRENT STREAM ID
  // =========================================================

  streamId = signal('science');


  // =========================================================
  // ALL STREAM DATA
  // =========================================================

  streams: StreamInfo[] = [

    // =======================================================
    // 1. SCIENCE
    // =======================================================

    {
      id: 'science',
      name: 'Science',
      icon: '🔬',
      category: 'Academic',

      tagline:
        'Build your future through science, technology and discovery.',

      description:
        'The Science stream opens pathways into engineering, medicine, research, technology and many other professional fields.',

      subjects: [
        {
          name: 'Physics',
          icon: '⚛️',
          description:
            'Understand matter, energy, motion and the laws of nature.'
        },
        {
          name: 'Chemistry',
          icon: '🧪',
          description:
            'Learn about substances, reactions, materials and chemical processes.'
        },
        {
          name: 'Mathematics',
          icon: '📐',
          description:
            'Develop logical thinking, problem solving and quantitative skills.'
        },
        {
          name: 'Biology',
          icon: '🧬',
          description:
            'Explore living organisms, genetics, anatomy and life sciences.'
        }
      ],

      careers: [
        {
          name: 'Software Engineer',
          icon: '💻',
          description:
            'Build software applications and technology products.'
        },
        {
          name: 'Doctor',
          icon: '🩺',
          description:
            'Diagnose and treat patients through medical practice.'
        },
        {
          name: 'Engineer',
          icon: '⚙️',
          description:
            'Design and develop systems, products and technologies.'
        },
        {
          name: 'Scientist',
          icon: '🔭',
          description:
            'Conduct research and develop scientific knowledge.'
        }
      ],

      courses: [
        'B.Tech / B.E.',
        'MBBS',
        'B.Sc.',
        'B.Pharm',
        'BCA',
        'B.Sc. Computer Science',
        'Biotechnology',
        'Architecture'
      ],

      exams: [
        'JEE Main',
        'JEE Advanced',
        'NEET',
        'CUET',
        'State Entrance Exams'
      ],

      skills: [
        'Problem Solving',
        'Logical Thinking',
        'Mathematics',
        'Analytical Thinking',
        'Research',
        'Communication'
      ],

      roadmap: [
        {
          step: '01',
          title: 'Choose your subjects',
          description:
            'Select the Science subjects that match your interests and future goals.'
        },
        {
          step: '02',
          title: 'Build strong fundamentals',
          description:
            'Focus on Physics, Chemistry, Mathematics and Biology concepts.'
        },
        {
          step: '03',
          title: 'Explore career options',
          description:
            'Compare different courses and career paths available after Science.'
        },
        {
          step: '04',
          title: 'Prepare for entrance exams',
          description:
            'Identify the entrance exams required for your chosen course.'
        },
        {
          step: '05',
          title: 'Choose your course',
          description:
            'Select a degree and institution based on your career direction.'
        }
      ]
    },


    // =======================================================
    // 2. COMMERCE
    // =======================================================

    {
      id: 'commerce',
      name: 'Commerce',
      icon: '📊',
      category: 'Academic',

      tagline:
        'Turn your understanding of business and finance into a career.',

      description:
        'Commerce provides pathways into accounting, finance, banking, business, economics and management.',

      subjects: [
        {
          name: 'Accountancy',
          icon: '🧾',
          description:
            'Learn financial records, accounting principles and reporting.'
        },
        {
          name: 'Economics',
          icon: '📈',
          description:
            'Understand markets, businesses, resources and economic systems.'
        },
        {
          name: 'Business Studies',
          icon: '💼',
          description:
            'Explore business organizations, management and entrepreneurship.'
        },
        {
          name: 'Mathematics',
          icon: '📐',
          description:
            'Build quantitative and analytical skills for commerce careers.'
        }
      ],

      careers: [
        {
          name: 'Chartered Accountant',
          icon: '🧮',
          description:
            'Work in accounting, taxation, auditing and financial management.'
        },
        {
          name: 'Financial Analyst',
          icon: '📊',
          description:
            'Analyze financial information and support business decisions.'
        },
        {
          name: 'Business Analyst',
          icon: '📋',
          description:
            'Analyze business processes and identify improvements.'
        },
        {
          name: 'Entrepreneur',
          icon: '🚀',
          description:
            'Build and manage your own business or startup.'
        }
      ],

      courses: [
        'B.Com',
        'BBA',
        'CA',
        'CS',
        'CMA',
        'B.Com (Honours)',
        'Economics',
        'Finance'
      ],

      exams: [
        'CUET',
        'CA Foundation',
        'CSEET',
        'CMA Foundation',
        'University Entrance Exams'
      ],

      skills: [
        'Financial Analysis',
        'Communication',
        'Business Thinking',
        'Numerical Skills',
        'Decision Making',
        'Leadership'
      ],

      roadmap: [
        {
          step: '01',
          title: 'Choose Commerce subjects',
          description:
            'Understand the subjects and select combinations based on your goals.'
        },
        {
          step: '02',
          title: 'Build business fundamentals',
          description:
            'Develop a strong foundation in accounting, economics and business.'
        },
        {
          step: '03',
          title: 'Explore careers',
          description:
            'Compare careers in finance, accounting, management and entrepreneurship.'
        },
        {
          step: '04',
          title: 'Choose a qualification',
          description:
            'Select a degree or professional qualification that matches your goals.'
        },
        {
          step: '05',
          title: 'Build professional skills',
          description:
            'Develop communication, analytical and business skills alongside your studies.'
        }
      ]
    },


    // =======================================================
    // 3. ARTS & HUMANITIES
    // =======================================================

    {
      id: 'arts',
      name: 'Arts & Humanities',
      icon: '🎨',
      category: 'Academic',

      tagline:
        'Understand people, society, culture and the world around you.',

      description:
        'Arts and Humanities offers diverse pathways across law, psychology, media, design, education and social sciences.',

      subjects: [
        {
          name: 'History',
          icon: '🏛️',
          description:
            'Explore civilizations, events and the development of societies.'
        },
        {
          name: 'Political Science',
          icon: '⚖️',
          description:
            'Understand governments, institutions and political systems.'
        },
        {
          name: 'Psychology',
          icon: '🧠',
          description:
            'Study human behavior, thoughts and mental processes.'
        },
        {
          name: 'Languages',
          icon: '📚',
          description:
            'Develop communication, literature and language skills.'
        }
      ],

      careers: [
        {
          name: 'Lawyer',
          icon: '⚖️',
          description:
            'Work in legal practice, corporate law or public service.'
        },
        {
          name: 'Psychologist',
          icon: '🧠',
          description:
            'Study human behavior and support people through psychology.'
        },
        {
          name: 'Journalist',
          icon: '📰',
          description:
            'Research, write and communicate information to audiences.'
        },
        {
          name: 'Designer',
          icon: '🎨',
          description:
            'Create visual and digital experiences across different media.'
        }
      ],

      courses: [
        'BA',
        'BA Psychology',
        'BA Journalism',
        'LLB',
        'Bachelor of Design',
        'BA English',
        'Social Sciences'
      ],

      exams: [
        'CUET',
        'CLAT',
        'AILET',
        'University Entrance Exams'
      ],

      skills: [
        'Communication',
        'Critical Thinking',
        'Writing',
        'Research',
        'Creativity',
        'Presentation'
      ],

      roadmap: [
        {
          step: '01',
          title: 'Identify your interests',
          description:
            'Explore subjects such as psychology, history, languages and social sciences.'
        },
        {
          step: '02',
          title: 'Develop communication skills',
          description:
            'Strengthen writing, presentation and analytical abilities.'
        },
        {
          step: '03',
          title: 'Explore careers',
          description:
            'Research careers across law, media, design, education and social sciences.'
        },
        {
          step: '04',
          title: 'Choose your specialization',
          description:
            'Select a degree and specialization that aligns with your interests.'
        },
        {
          step: '05',
          title: 'Build practical experience',
          description:
            'Use internships, projects and activities to develop real-world skills.'
        }
      ]
    },


    // =======================================================
    // 4. POLYTECHNIC & ITI
    // =======================================================

    {
      id: 'polytechnic',
      name: 'Polytechnic & ITI',
      icon: '🔧',
      category: 'Technical',

      tagline:
        'Build practical skills for technical and industry-focused careers.',

      description:
        'Polytechnic and ITI pathways provide hands-on technical education and practical skills for a wide range of industries.',

      subjects: [
        {
          name: 'Mechanical',
          icon: '⚙️',
          description:
            'Learn machines, manufacturing processes and mechanical systems.'
        },
        {
          name: 'Electrical',
          icon: '⚡',
          description:
            'Understand electrical systems, circuits and equipment.'
        },
        {
          name: 'Civil',
          icon: '🏗️',
          description:
            'Explore construction, infrastructure and civil engineering fundamentals.'
        },
        {
          name: 'Computer',
          icon: '💻',
          description:
            'Develop practical computer and information technology skills.'
        }
      ],

      careers: [
        {
          name: 'Technician',
          icon: '🔧',
          description:
            'Install, maintain and repair technical equipment and systems.'
        },
        {
          name: 'Junior Engineer',
          icon: '⚙️',
          description:
            'Support engineering teams with technical and practical work.'
        },
        {
          name: 'Electrician',
          icon: '⚡',
          description:
            'Install and maintain electrical systems and equipment.'
        },
        {
          name: 'Technical Assistant',
          icon: '🛠️',
          description:
            'Provide technical support across industrial and technical environments.'
        }
      ],

      courses: [
        'Diploma in Engineering',
        'ITI',
        'Diploma in Computer Engineering',
        'Diploma in Mechanical Engineering',
        'Diploma in Electrical Engineering',
        'Diploma in Civil Engineering'
      ],

      exams: [
        'Polytechnic Entrance Exams',
        'ITI Admission',
        'State Polytechnic Exams'
      ],

      skills: [
        'Technical Skills',
        'Problem Solving',
        'Practical Knowledge',
        'Equipment Handling',
        'Safety Awareness',
        'Communication'
      ],

      roadmap: [
        {
          step: '01',
          title: 'Choose a technical field',
          description:
            'Select an area such as mechanical, electrical, civil or computer technology.'
        },
        {
          step: '02',
          title: 'Build practical knowledge',
          description:
            'Learn technical concepts through classroom and practical training.'
        },
        {
          step: '03',
          title: 'Develop hands-on skills',
          description:
            'Practice using tools, equipment and industry-relevant technologies.'
        },
        {
          step: '04',
          title: 'Complete your qualification',
          description:
            'Finish your diploma or ITI program and prepare for employment.'
        },
        {
          step: '05',
          title: 'Enter the industry',
          description:
            'Apply your technical skills through jobs, apprenticeships or further education.'
        }
      ]
    },


    // =======================================================
    // 5. COMPUTER & IT
    // =======================================================

    {
      id: 'computer',
      name: 'Computer & IT',
      icon: '💻',
      category: 'Technology',

      tagline:
        'Build digital products and solve problems with technology.',

      description:
        'Computer and IT pathways cover software development, web development, databases, networking and cybersecurity.',

      subjects: [
        {
          name: 'Programming',
          icon: '👨‍💻',
          description:
            'Learn programming concepts and develop software solutions.'
        },
        {
          name: 'Web Development',
          icon: '🌐',
          description:
            'Build modern websites and web applications.'
        },
        {
          name: 'Databases',
          icon: '🗄️',
          description:
            'Learn how data is stored, managed and accessed.'
        },
        {
          name: 'Networking',
          icon: '🔗',
          description:
            'Understand computer networks and communication systems.'
        }
      ],

      careers: [
        {
          name: 'Software Developer',
          icon: '💻',
          description:
            'Design, develop and maintain software applications.'
        },
        {
          name: 'Web Developer',
          icon: '🌐',
          description:
            'Build websites and modern web applications.'
        },
        {
          name: 'Cybersecurity Analyst',
          icon: '🔐',
          description:
            'Help protect systems, applications and networks.'
        },
        {
          name: 'Cloud Engineer',
          icon: '☁️',
          description:
            'Work with cloud infrastructure and digital services.'
        }
      ],

      courses: [
        'B.Tech CSE',
        'BCA',
        'B.Sc. Computer Science',
        'B.Tech IT',
        'MCA',
        'Diploma in Computer Engineering'
      ],

      exams: [
        'JEE Main',
        'CUET',
        'State Entrance Exams',
        'University Entrance Exams'
      ],

      skills: [
        'Programming',
        'Problem Solving',
        'Data Structures',
        'Web Development',
        'Database Management',
        'Communication'
      ],

      roadmap: [
        {
          step: '01',
          title: 'Learn programming basics',
          description:
            'Start with programming fundamentals and logical problem solving.'
        },
        {
          step: '02',
          title: 'Explore technology areas',
          description:
            'Try web development, databases, networking and other IT fields.'
        },
        {
          step: '03',
          title: 'Choose a specialization',
          description:
            'Identify an area that matches your interests and career goals.'
        },
        {
          step: '04',
          title: 'Build projects',
          description:
            'Create practical projects to apply your technical knowledge.'
        },
        {
          step: '05',
          title: 'Prepare for your career',
          description:
            'Build a portfolio, improve communication and prepare for interviews.'
        }
      ]
    },


    // =======================================================
    // 6. MEDICAL & HEALTH
    // =======================================================

    {
      id: 'medical',
      name: 'Medical & Health',
      icon: '🩺',
      category: 'Professional',

      tagline:
        'Build a career focused on healthcare, medicine and human wellbeing.',

      description:
        'Medical and Health pathways offer opportunities across medicine, pharmacy, nursing and allied healthcare.',

      subjects: [
        {
          name: 'Biology',
          icon: '🧬',
          description:
            'Study living organisms, human biology and biological processes.'
        },
        {
          name: 'Chemistry',
          icon: '🧪',
          description:
            'Understand chemical processes relevant to medicine and healthcare.'
        },
        {
          name: 'Physics',
          icon: '⚛️',
          description:
            'Learn physical principles used in science and medical applications.'
        },
        {
          name: 'Health Science',
          icon: '🩺',
          description:
            'Explore health, disease prevention and healthcare systems.'
        }
      ],

      careers: [
        {
          name: 'Doctor',
          icon: '🩺',
          description:
            'Diagnose and treat patients through medical practice.'
        },
        {
          name: 'Pharmacist',
          icon: '💊',
          description:
            'Work with medicines, medication safety and pharmaceutical care.'
        },
        {
          name: 'Nurse',
          icon: '🏥',
          description:
            'Provide patient care and support healthcare teams.'
        },
        {
          name: 'Medical Technologist',
          icon: '🔬',
          description:
            'Perform laboratory and diagnostic procedures in healthcare settings.'
        }
      ],

      courses: [
        'MBBS',
        'BDS',
        'B.Pharm',
        'B.Sc. Nursing',
        'BPT',
        'Medical Laboratory Technology',
        'Allied Health Sciences'
      ],

      exams: [
        'NEET',
        'CUET',
        'State Medical Entrance Exams',
        'University Entrance Exams'
      ],

      skills: [
        'Biology',
        'Observation',
        'Communication',
        'Empathy',
        'Attention to Detail',
        'Scientific Thinking'
      ],

      roadmap: [
        {
          step: '01',
          title: 'Build your Science foundation',
          description:
            'Develop strong knowledge in Biology, Chemistry and Physics.'
        },
        {
          step: '02',
          title: 'Explore healthcare careers',
          description:
            'Compare medicine, pharmacy, nursing and allied healthcare pathways.'
        },
        {
          step: '03',
          title: 'Identify entrance requirements',
          description:
            'Understand the examinations and eligibility requirements for your target course.'
        },
        {
          step: '04',
          title: 'Choose your healthcare course',
          description:
            'Select a professional degree or healthcare program that fits your goals.'
        },
        {
          step: '05',
          title: 'Develop professional skills',
          description:
            'Build practical, communication and patient-care skills during your education.'
        }
      ]
    },


    // =======================================================
    // 7. MANAGEMENT
    // =======================================================

    {
      id: 'management',
      name: 'Management',
      icon: '💼',
      category: 'Professional',

      tagline:
        'Turn leadership, business and strategy into professional opportunities.',

      description:
        'Management pathways cover business administration, entrepreneurship, marketing, finance and human resources.',

      subjects: [
        {
          name: 'Business',
          icon: '💼',
          description:
            'Understand how organizations operate and create value.'
        },
        {
          name: 'Economics',
          icon: '📈',
          description:
            'Study markets, resources and economic decision-making.'
        },
        {
          name: 'Finance',
          icon: '💰',
          description:
            'Learn financial planning, investment and business finance.'
        },
        {
          name: 'Marketing',
          icon: '📣',
          description:
            'Explore branding, customers, communication and market strategy.'
        }
      ],

      careers: [
        {
          name: 'Business Manager',
          icon: '💼',
          description:
            'Coordinate teams, operations and business activities.'
        },
        {
          name: 'Entrepreneur',
          icon: '🚀',
          description:
            'Create and manage businesses, products or services.'
        },
        {
          name: 'Marketing Manager',
          icon: '📣',
          description:
            'Plan marketing strategies and connect products with customers.'
        },
        {
          name: 'HR Manager',
          icon: '👥',
          description:
            'Manage recruitment, employee development and organizational needs.'
        }
      ],

      courses: [
        'BBA',
        'BBM',
        'B.Com',
        'Bachelor of Management Studies',
        'MBA',
        'Business Administration'
      ],

      exams: [
        'CUET',
        'IPMAT',
        'University Entrance Exams',
        'Management Entrance Exams'
      ],

      skills: [
        'Leadership',
        'Communication',
        'Business Strategy',
        'Decision Making',
        'Teamwork',
        'Presentation'
      ],

      roadmap: [
        {
          step: '01',
          title: 'Understand business',
          description:
            'Learn the basics of business, economics and organizational management.'
        },
        {
          step: '02',
          title: 'Explore management areas',
          description:
            'Discover marketing, finance, HR, operations and entrepreneurship.'
        },
        {
          step: '03',
          title: 'Choose a specialization',
          description:
            'Identify the management area that matches your interests.'
        },
        {
          step: '04',
          title: 'Build practical experience',
          description:
            'Develop your skills through projects, internships and business activities.'
        },
        {
          step: '05',
          title: 'Start your career',
          description:
            'Build professional experience or explore entrepreneurship opportunities.'
        }
      ]
    },


    // =======================================================
    // 8. DESIGN & CREATIVE
    // =======================================================

    {
      id: 'design',
      name: 'Design & Creative',
      icon: '✨',
      category: 'Creative',

      tagline:
        'Turn creativity and imagination into meaningful digital and visual experiences.',

      description:
        'Design and Creative pathways combine creativity, technology and communication across visual design, UI/UX, animation and media.',

      subjects: [
        {
          name: 'Visual Design',
          icon: '🎨',
          description:
            'Learn visual composition, typography, color and design principles.'
        },
        {
          name: 'UI/UX',
          icon: '🖥️',
          description:
            'Design useful and engaging digital products and interfaces.'
        },
        {
          name: 'Animation',
          icon: '🎬',
          description:
            'Create motion graphics, animation and visual storytelling.'
        },
        {
          name: 'Media',
          icon: '📹',
          description:
            'Explore photography, video, communication and digital media.'
        }
      ],

      careers: [
        {
          name: 'UI/UX Designer',
          icon: '🖥️',
          description:
            'Design intuitive interfaces and digital user experiences.'
        },
        {
          name: 'Graphic Designer',
          icon: '🎨',
          description:
            'Create visual designs for brands, products and communication.'
        },
        {
          name: 'Animator',
          icon: '🎬',
          description:
            'Create animated visuals, characters and motion experiences.'
        },
        {
          name: 'Creative Director',
          icon: '✨',
          description:
            'Lead creative direction across brands, campaigns and experiences.'
        }
      ],

      courses: [
        'B.Des',
        'BFA',
        'Graphic Design',
        'UI/UX Design',
        'Animation',
        'Visual Communication',
        'Multimedia Design'
      ],

      exams: [
        'NID DAT',
        'UCEED',
        'NIFT Entrance Exam',
        'University Entrance Exams'
      ],

      skills: [
        'Creativity',
        'Visual Thinking',
        'Design',
        'Communication',
        'Problem Solving',
        'Digital Tools'
      ],

      roadmap: [
        {
          step: '01',
          title: 'Explore your creativity',
          description:
            'Experiment with drawing, visual design, digital media and creative projects.'
        },
        {
          step: '02',
          title: 'Learn design fundamentals',
          description:
            'Build knowledge of composition, typography, color and visual communication.'
        },
        {
          step: '03',
          title: 'Choose a specialization',
          description:
            'Explore UI/UX, graphic design, animation, media or another creative field.'
        },
        {
          step: '04',
          title: 'Build your portfolio',
          description:
            'Create projects that demonstrate your design process and creative abilities.'
        },
        {
          step: '05',
          title: 'Enter the creative industry',
          description:
            'Use your portfolio and practical experience to pursue creative opportunities.'
        }
      ]
    }

  ];


  // =========================================================
  // GET CURRENT STREAM
  // =========================================================

  currentStream = computed(() => {

    const id = this.streamId();

    return this.streams.find(
      stream => stream.id === id
    ) ?? this.streams[0];

  });


  // =========================================================
  // READ URL PARAMETER
  // =========================================================

  constructor(
    private route: ActivatedRoute
  ) {

    this.route.paramMap.subscribe(params => {

      const id = params.get('id');

      if (id) {
        this.streamId.set(id);
      }

    });

  }

}