import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { UserState } from '../../services/user-state';

interface QuizOption {
  text: string;
  scores: Record<string, number>;
}

interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  icon: string;
  options: QuizOption[];
}

interface CareerResult {
  id: string;
  roadmapId: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  score: number;
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz {

  /* =====================================================
     USER STATE
  ===================================================== */

  private readonly userState = inject(UserState);


  /* =====================================================
     QUIZ STATE
  ===================================================== */

  currentQuestion = signal(0);

  answers = signal<Record<number, number>>({});

  quizStarted = signal(false);

  quizCompleted = signal(false);


  /* =====================================================
     CAREER DATA
  ===================================================== */

  careers = [
    {
      id: 'software-developer',
      roadmapId: 'software-developer',
      title: 'Software Developer',
      category: 'Technology',
      icon: '💻',
      description:
        'Build applications, websites and software systems using programming and problem-solving skills.'
    },

    {
      id: 'web-developer',
      roadmapId: 'web-developer',
      title: 'Web Developer',
      category: 'Technology',
      icon: '🌐',
      description:
        'Create modern websites and web applications using frontend and backend technologies.'
    },

    {
      id: 'cybersecurity-analyst',
      roadmapId: 'cybersecurity',
      title: 'Cybersecurity Analyst',
      category: 'Technology',
      icon: '🔐',
      description:
        'Protect systems, networks and information from security threats and cyber attacks.'
    },

    {
      id: 'cloud-engineer',
      roadmapId: 'cloud-engineer',
      title: 'Cloud Engineer',
      category: 'Technology',
      icon: '☁️',
      description:
        'Design, deploy and manage cloud infrastructure and scalable technology systems.'
    },

    {
      id: 'data-analyst',
      roadmapId: 'data-analyst',
      title: 'Data Analyst',
      category: 'Technology',
      icon: '📊',
      description:
        'Analyze data, identify patterns and help organizations make informed decisions.'
    },

    {
      id: 'ui-ux-designer',
      roadmapId: 'ui-ux-designer',
      title: 'UI/UX Designer',
      category: 'Design',
      icon: '🎨',
      description:
        'Design useful, attractive and user-friendly digital products and experiences.'
    },

    {
      id: 'doctor',
      roadmapId: 'doctor',
      title: 'Doctor',
      category: 'Medical',
      icon: '🩺',
      description:
        'Diagnose and treat patients while working across healthcare and medical environments.'
    },

    {
      id: 'pharmacist',
      roadmapId: 'pharmacist',
      title: 'Pharmacist',
      category: 'Medical',
      icon: '💊',
      description:
        'Work with medicines, pharmaceutical care and patient health.'
    },

    {
      id: 'nurse',
      roadmapId: 'nurse',
      title: 'Nurse',
      category: 'Medical',
      icon: '👩‍⚕️',
      description:
        'Provide patient care, clinical support and healthcare services.'
    },

    {
      id: 'chartered-accountant',
      roadmapId: 'chartered-accountant',
      title: 'Chartered Accountant',
      category: 'Commerce',
      icon: '📈',
      description:
        'Work with accounting, taxation, auditing and financial management.'
    },

    {
      id: 'financial-analyst',
      roadmapId: 'financial-analyst',
      title: 'Financial Analyst',
      category: 'Finance',
      icon: '💰',
      description:
        'Analyze financial information and support investment and business decisions.'
    },

    {
      id: 'business-analyst',
      roadmapId: 'business-analyst',
      title: 'Business Analyst',
      category: 'Business',
      icon: '📋',
      description:
        'Analyze business requirements, processes and data to improve organizational decisions.'
    },

    {
      id: 'entrepreneur',
      roadmapId: 'entrepreneur',
      title: 'Entrepreneur',
      category: 'Business',
      icon: '🚀',
      description:
        'Build products, launch businesses and turn ideas into opportunities.'
    },

    {
      id: 'graphic-designer',
      roadmapId: 'graphic-designer',
      title: 'Graphic Designer',
      category: 'Design',
      icon: '🖌️',
      description:
        'Create visual communication through graphics, branding and digital design.'
    },

    {
      id: 'lawyer',
      roadmapId: 'lawyer',
      title: 'Lawyer',
      category: 'Law',
      icon: '⚖️',
      description:
        'Work with legal systems, research, documentation and representation.'
    },

    {
      id: 'psychologist',
      roadmapId: 'psychologist',
      title: 'Psychologist',
      category: 'Psychology',
      icon: '🧠',
      description:
        'Study human behavior and support people through psychological assessment and guidance.'
    }
  ];


  /* =====================================================
     QUESTIONS
  ===================================================== */

  questions: QuizQuestion[] = [

    {
      id: 1,
      question:
        'Which type of activity would you enjoy the most?',
      subtitle:
        'Think about what you naturally enjoy doing.',
      icon: '✨',
      options: [

        {
          text: 'Building software or solving technical problems',
          scores: {
            'software-developer': 4,
            'web-developer': 4,
            'cloud-engineer': 3,
            'cybersecurity-analyst': 3,
            'data-analyst': 2
          }
        },

        {
          text: 'Designing visuals and creative digital experiences',
          scores: {
            'ui-ux-designer': 4,
            'graphic-designer': 4,
            'web-developer': 1
          }
        },

        {
          text: 'Understanding people and helping them',
          scores: {
            doctor: 3,
            nurse: 4,
            psychologist: 4,
            pharmacist: 2
          }
        },

        {
          text: 'Working with business, money or organizations',
          scores: {
            'chartered-accountant': 4,
            'financial-analyst': 4,
            'business-analyst': 4,
            entrepreneur: 3,
            lawyer: 2
          }
        }

      ]
    },

    {
      id: 2,
      question:
        'Which subject area interests you the most?',
      subtitle:
        'Choose the area you would most like to explore.',
      icon: '📚',
      options: [

        {
          text: 'Computer Science and Programming',
          scores: {
            'software-developer': 4,
            'web-developer': 4,
            'cloud-engineer': 3,
            'cybersecurity-analyst': 4
          }
        },

        {
          text: 'Biology and Human Health',
          scores: {
            doctor: 4,
            nurse: 4,
            pharmacist: 4,
            psychologist: 3
          }
        },

        {
          text: 'Commerce, Finance and Business',
          scores: {
            'chartered-accountant': 4,
            'financial-analyst': 4,
            'business-analyst': 4,
            entrepreneur: 4
          }
        },

        {
          text: 'Art, Design and Communication',
          scores: {
            'ui-ux-designer': 4,
            'graphic-designer': 4,
            lawyer: 1
          }
        }

      ]
    },

    {
      id: 3,
      question:
        'What kind of problem would you enjoy solving?',
      subtitle:
        'Think about the type of challenge that interests you.',
      icon: '🧩',
      options: [

        {
          text: 'A technical or programming problem',
          scores: {
            'software-developer': 4,
            'web-developer': 4,
            'cloud-engineer': 4,
            'cybersecurity-analyst': 4
          }
        },

        {
          text: 'A visual or user-experience problem',
          scores: {
            'ui-ux-designer': 4,
            'graphic-designer': 4
          }
        },

        {
          text: 'A health or human-behavior problem',
          scores: {
            doctor: 4,
            nurse: 4,
            pharmacist: 3,
            psychologist: 4
          }
        },

        {
          text: 'A business, financial or legal problem',
          scores: {
            'chartered-accountant': 4,
            'financial-analyst': 4,
            'business-analyst': 4,
            lawyer: 4,
            entrepreneur: 3
          }
        }

      ]
    },

    {
      id: 4,
      question:
        'Which work environment sounds most interesting?',
      subtitle:
        'Imagine your ideal working environment.',
      icon: '🏢',
      options: [

        {
          text: 'Technology company or software team',
          scores: {
            'software-developer': 4,
            'web-developer': 4,
            'cloud-engineer': 4,
            'cybersecurity-analyst': 4
          }
        },

        {
          text: 'Creative studio or design team',
          scores: {
            'ui-ux-designer': 4,
            'graphic-designer': 4
          }
        },

        {
          text: 'Hospital or healthcare organization',
          scores: {
            doctor: 4,
            nurse: 4,
            pharmacist: 4,
            psychologist: 3
          }
        },

        {
          text: 'Corporate, financial or legal organization',
          scores: {
            'chartered-accountant': 4,
            'financial-analyst': 4,
            'business-analyst': 4,
            lawyer: 4
          }
        }

      ]
    },

    {
      id: 5,
      question:
        'How do you prefer to work?',
      subtitle:
        'Choose the working style closest to you.',
      icon: '⚙️',
      options: [

        {
          text: 'Building and experimenting with technology',
          scores: {
            'software-developer': 4,
            'web-developer': 4,
            'cloud-engineer': 4
          }
        },

        {
          text: 'Creating and improving visual experiences',
          scores: {
            'ui-ux-designer': 4,
            'graphic-designer': 4
          }
        },

        {
          text: 'Helping and communicating with people',
          scores: {
            doctor: 3,
            nurse: 4,
            psychologist: 4,
            lawyer: 2
          }
        },

        {
          text: 'Analyzing information and making decisions',
          scores: {
            'data-analyst': 4,
            'financial-analyst': 4,
            'business-analyst': 4,
            'chartered-accountant': 3
          }
        }

      ]
    },

    {
      id: 6,
      question:
        'Which skill would you most like to develop?',
      subtitle:
        'Choose the skill you would enjoy improving.',
      icon: '🚀',
      options: [

        {
          text: 'Programming and software development',
          scores: {
            'software-developer': 5,
            'web-developer': 4,
            'cloud-engineer': 3
          }
        },

        {
          text: 'Design and visual communication',
          scores: {
            'ui-ux-designer': 5,
            'graphic-designer': 5
          }
        },

        {
          text: 'Medical and human-care skills',
          scores: {
            doctor: 5,
            nurse: 5,
            pharmacist: 4
          }
        },

        {
          text: 'Finance, analysis and business strategy',
          scores: {
            'chartered-accountant': 5,
            'financial-analyst': 5,
            'business-analyst': 5,
            entrepreneur: 4
          }
        }

      ]
    },

    {
      id: 7,
      question:
        'What motivates you most?',
      subtitle:
        'Choose the outcome that feels most meaningful.',
      icon: '🎯',
      options: [

        {
          text: 'Creating useful technology',
          scores: {
            'software-developer': 4,
            'web-developer': 4,
            'cloud-engineer': 4
          }
        },

        {
          text: 'Creating something visually impressive',
          scores: {
            'ui-ux-designer': 4,
            'graphic-designer': 4
          }
        },

        {
          text: 'Improving people’s health and wellbeing',
          scores: {
            doctor: 5,
            nurse: 5,
            pharmacist: 4,
            psychologist: 5
          }
        },

        {
          text: 'Growing businesses or managing resources',
          scores: {
            'chartered-accountant': 4,
            'financial-analyst': 4,
            'business-analyst': 4,
            entrepreneur: 5
          }
        }

      ]
    },

    {
      id: 8,
      question:
        'Which type of work sounds most satisfying?',
      subtitle:
        'Choose the type of result you would like to create.',
      icon: '💡',
      options: [

        {
          text: 'A working application or technical system',
          scores: {
            'software-developer': 5,
            'web-developer': 5,
            'cloud-engineer': 4
          }
        },

        {
          text: 'A beautiful and easy-to-use design',
          scores: {
            'ui-ux-designer': 5,
            'graphic-designer': 5
          }
        },

        {
          text: 'A positive outcome for a person',
          scores: {
            doctor: 4,
            nurse: 5,
            psychologist: 5,
            pharmacist: 4
          }
        },

        {
          text: 'A successful business or financial decision',
          scores: {
            'chartered-accountant': 4,
            'financial-analyst': 5,
            'business-analyst': 5,
            entrepreneur: 5
          }
        }

      ]
    },

    {
      id: 9,
      question:
        'Which type of thinking do you prefer?',
      subtitle:
        'Choose the approach that feels most natural.',
      icon: '🧠',
      options: [

        {
          text: 'Logical and technical thinking',
          scores: {
            'software-developer': 4,
            'cybersecurity-analyst': 5,
            'cloud-engineer': 4,
            'data-analyst': 4
          }
        },

        {
          text: 'Creative and visual thinking',
          scores: {
            'ui-ux-designer': 5,
            'graphic-designer': 5
          }
        },

        {
          text: 'Empathetic and people-focused thinking',
          scores: {
            doctor: 3,
            nurse: 4,
            psychologist: 5,
            lawyer: 2
          }
        },

        {
          text: 'Analytical and strategic thinking',
          scores: {
            'financial-analyst': 5,
            'business-analyst': 5,
            'chartered-accountant': 5,
            entrepreneur: 4,
            lawyer: 4
          }
        }

      ]
    },

    {
      id: 10,
      question:
        'Which future would you be most excited to explore?',
      subtitle:
        'Choose the direction that interests you most.',
      icon: '🌟',
      options: [

        {
          text: 'Building the next generation of technology',
          scores: {
            'software-developer': 5,
            'web-developer': 4,
            'cloud-engineer': 5,
            'cybersecurity-analyst': 4
          }
        },

        {
          text: 'Creating innovative digital experiences',
          scores: {
            'ui-ux-designer': 5,
            'graphic-designer': 4,
            'web-developer': 2
          }
        },

        {
          text: 'Working in healthcare and helping people',
          scores: {
            doctor: 5,
            nurse: 5,
            pharmacist: 5,
            psychologist: 5
          }
        },

        {
          text: 'Leading organizations and making strategic decisions',
          scores: {
            'chartered-accountant': 4,
            'financial-analyst': 4,
            'business-analyst': 5,
            entrepreneur: 5,
            lawyer: 3
          }
        }

      ]
    }

  ];


  /* =====================================================
     CURRENT QUESTION
  ===================================================== */

  currentQuestionData = computed(() => {
    return this.questions[this.currentQuestion()];
  });


  /* =====================================================
     PROGRESS
  ===================================================== */

  progress = computed(() => {

    if (!this.quizStarted()) {
      return 0;
    }

    return (
      ((this.currentQuestion() + 1) / this.questions.length) * 100
    );

  });


  /* =====================================================
     SELECTED ANSWER
  ===================================================== */

  selectedAnswer = computed(() => {

    return this.answers()[this.currentQuestion() + 1] ?? null;

  });


  /* =====================================================
     START QUIZ
  ===================================================== */

  startQuiz(): void {

    this.quizStarted.set(true);

    this.quizCompleted.set(false);

    this.currentQuestion.set(0);

    this.answers.set({});

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }


  /* =====================================================
     SELECT ANSWER
  ===================================================== */

  selectAnswer(index: number): void {

    this.answers.update(current => ({
      ...current,
      [this.currentQuestion() + 1]: index
    }));

  }


  /* =====================================================
     NEXT QUESTION
  ===================================================== */

  nextQuestion(): void {

    if (this.selectedAnswer() === null) {
      return;
    }

    if (this.currentQuestion() < this.questions.length - 1) {

      this.currentQuestion.update(
        value => value + 1
      );

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      return;
    }

    this.finishQuiz();

  }


  /* =====================================================
     PREVIOUS QUESTION
  ===================================================== */

  previousQuestion(): void {

    if (this.currentQuestion() > 0) {

      this.currentQuestion.update(
        value => value - 1
      );

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    }

  }


  /* =====================================================
     FINISH QUIZ
  ===================================================== */

  finishQuiz(): void {

    /*
     * Calculate the current quiz results.
     */
    const quizResults = this.results();

    /*
     * Save the TOP 3 career matches.
     */
    this.userState.addQuizResult(
      quizResults.slice(0, 3)
    );

    /*
     * IMPORTANT:
     * Mark the quiz as completed so quiz.html
     * can switch from the questions screen
     * to the results screen.
     */
    this.quizCompleted.set(true);

    /*
     * Scroll back to the top so the result
     * screen starts from the beginning.
     */
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }


  /* =====================================================
     CAREER RESULTS
  ===================================================== */

  results = computed<CareerResult[]>(() => {

    const scoreMap: Record<string, number> = {};

    /*
     * Initialize every career with zero.
     */
    for (const career of this.careers) {
      scoreMap[career.id] = 0;
    }

    const currentAnswers = this.answers();

    /*
     * Calculate scores from every answered question.
     */
    this.questions.forEach((question, questionIndex) => {

      const answerIndex =
        currentAnswers[questionIndex + 1];

      if (answerIndex === undefined) {
        return;
      }

      const selectedOption =
        question.options[answerIndex];

      if (!selectedOption) {
        return;
      }

      Object.entries(selectedOption.scores).forEach(
        ([careerId, score]) => {

          scoreMap[careerId] =
            (scoreMap[careerId] ?? 0) + score;

        }
      );

    });

    /*
     * Create career results,
     * sort by score and keep top 6
     * for the Quiz result screen.
     */
    return this.careers
      .map(career => ({
        ...career,
        score: scoreMap[career.id] ?? 0
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

  });


  /* =====================================================
     RESTART
  ===================================================== */

  restartQuiz(): void {

    this.quizStarted.set(false);

    this.quizCompleted.set(false);

    this.currentQuestion.set(0);

    this.answers.set({});

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }


  /* =====================================================
     CHECK ANSWER
  ===================================================== */

  isAnswerSelected(index: number): boolean {

    return this.selectedAnswer() === index;

  }


  /* =====================================================
     TRACK
  ===================================================== */

  trackCareer(
    index: number,
    career: CareerResult
  ): string {

    return career.id;

  }

}