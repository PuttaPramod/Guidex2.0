import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface College {
  id: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  type: string;
  established: number;
  icon: string;
  description: string;
  courses: string[];
  highlights: string[];
}

@Component({
  selector: 'app-colleges',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './colleges.html',
  styleUrl: './colleges.css'
})
export class Colleges {

  // =========================================================
  // FILTER STATE
  // =========================================================

  searchTerm = '';

  selectedState = 'All';

  selectedType = 'All';


  // =========================================================
  // STATES
  // =========================================================

  states: string[] = [
    'All',
    'Andhra Pradesh',
    'Telangana',
    'Tamil Nadu',
    'Karnataka'
  ];


  // =========================================================
  // COLLEGE TYPES
  // =========================================================

  types: string[] = [
    'All',
    'IIT',
    'NIT',
    'IIIT',
    'University',
    'Deemed University',
    'Private',
    'Medical',
    'Law',
    'Management',
    'Research'
  ];


  // =========================================================
  // COLLEGES
  // =========================================================

  colleges: College[] = [

    // =======================================================
    // ANDHRA PRADESH
    // =======================================================

    {
      id: 'iit-tirupati',
      name: 'Indian Institute of Technology Tirupati',
      shortName: 'IIT Tirupati',
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      type: 'IIT',
      established: 2015,
      icon: '🎓',
      description: 'Premier institute offering engineering, technology and research programs.',
      courses: ['B.Tech', 'M.Tech', 'M.Sc', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Research']
    },

    {
      id: 'nit-andhra-pradesh',
      name: 'National Institute of Technology Andhra Pradesh',
      shortName: 'NIT Andhra Pradesh',
      city: 'Tadepalligudem',
      state: 'Andhra Pradesh',
      type: 'NIT',
      established: 2015,
      icon: '🏛️',
      description: 'National institute focused on engineering, technology and scientific education.',
      courses: ['B.Tech', 'M.Tech', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Research']
    },

    {
      id: 'iiit-sri-city',
      name: 'Indian Institute of Information Technology Sri City',
      shortName: 'IIIT Sri City',
      city: 'Sri City',
      state: 'Andhra Pradesh',
      type: 'IIIT',
      established: 2013,
      icon: '💻',
      description: 'Information technology focused institute offering undergraduate and postgraduate education.',
      courses: ['B.Tech', 'M.Tech', 'Ph.D'],
      highlights: ['Computer Science', 'AI', 'Information Technology']
    },

    {
      id: 'iiitdm-kurnool',
      name: 'Indian Institute of Information Technology Design and Manufacturing Kurnool',
      shortName: 'IIITDM Kurnool',
      city: 'Kurnool',
      state: 'Andhra Pradesh',
      type: 'IIIT',
      established: 2015,
      icon: '⚙️',
      description: 'Institute specializing in information technology, design and manufacturing.',
      courses: ['B.Tech', 'M.Tech', 'Ph.D'],
      highlights: ['Design', 'Manufacturing', 'Computer Science']
    },

    {
      id: 'andhra-university',
      name: 'Andhra University',
      shortName: 'AU',
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      type: 'University',
      established: 1926,
      icon: '🏛️',
      description: 'One of the oldest universities in India with a wide range of academic programs.',
      courses: ['UG', 'PG', 'Engineering', 'Law', 'Ph.D'],
      highlights: ['Engineering', 'Arts', 'Science', 'Management']
    },

    {
      id: 'jntu-kakinada',
      name: 'Jawaharlal Nehru Technological University Kakinada',
      shortName: 'JNTUK',
      city: 'Kakinada',
      state: 'Andhra Pradesh',
      type: 'University',
      established: 2008,
      icon: '⚙️',
      description: 'Major technological university serving engineering and professional education.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Management']
    },

    {
      id: 'jntu-anantapur',
      name: 'Jawaharlal Nehru Technological University Anantapur',
      shortName: 'JNTUA',
      city: 'Anantapur',
      state: 'Andhra Pradesh',
      type: 'University',
      established: 2008,
      icon: '🎓',
      description: 'Technological university offering engineering, management and professional programs.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Management']
    },

    {
      id: 'sri-venkateswara-university',
      name: 'Sri Venkateswara University',
      shortName: 'SVU',
      city: 'Tirupati',
      state: 'Andhra Pradesh',
      type: 'University',
      established: 1954,
      icon: '🏛️',
      description: 'Major public university offering multidisciplinary higher education.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Management', 'Research']
    },

    {
      id: 'acharya-nagarjuna-university',
      name: 'Acharya Nagarjuna University',
      shortName: 'ANU',
      city: 'Guntur',
      state: 'Andhra Pradesh',
      type: 'University',
      established: 1976,
      icon: '🎓',
      description: 'Multidisciplinary university serving students across Andhra Pradesh.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Management']
    },

    {
      id: 'sri-krishnadevaraya-university',
      name: 'Sri Krishnadevaraya University',
      shortName: 'SKU',
      city: 'Anantapur',
      state: 'Andhra Pradesh',
      type: 'University',
      established: 1981,
      icon: '🏛️',
      description: 'Public university offering undergraduate, postgraduate and research programs.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Management']
    },

    {
      id: 'jntu-gv',
      name: 'Jawaharlal Nehru Technological University Gurajada Vizianagaram',
      shortName: 'JNTU-GV',
      city: 'Vizianagaram',
      state: 'Andhra Pradesh',
      type: 'University',
      established: 2021,
      icon: '⚙️',
      description: 'Technological university focused on engineering and professional education.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA'],
      highlights: ['Engineering', 'Technology']
    },

    {
      id: 'krishna-university',
      name: 'Krishna University',
      shortName: 'KRU',
      city: 'Machilipatnam',
      state: 'Andhra Pradesh',
      type: 'University',
      established: 2008,
      icon: '🎓',
      description: 'Public university offering multidisciplinary higher education.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Commerce']
    },

    {
      id: 'yogi-vemana-university',
      name: 'Yogi Vemana University',
      shortName: 'YVU',
      city: 'Kadapa',
      state: 'Andhra Pradesh',
      type: 'University',
      established: 2006,
      icon: '🏛️',
      description: 'State university providing multidisciplinary education and research.',
      courses: ['UG', 'PG', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Research']
    },

    {
      id: 'adikavi-nannaya-university',
      name: 'Adikavi Nannaya University',
      shortName: 'AKNU',
      city: 'Rajahmundry',
      state: 'Andhra Pradesh',
      type: 'University',
      established: 2006,
      icon: '📚',
      description: 'University serving students in eastern Andhra Pradesh.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Arts', 'Science', 'Commerce']
    },

    {
      id: 'vit-ap',
      name: 'VIT-AP University',
      shortName: 'VIT-AP',
      city: 'Amaravati',
      state: 'Andhra Pradesh',
      type: 'Private',
      established: 2017,
      icon: '💻',
      description: 'Private university offering engineering, management and science programs.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'BBA', 'Ph.D'],
      highlights: ['Computer Science', 'Engineering', 'Management']
    },

    {
      id: 'srm-ap',
      name: 'SRM University-AP',
      shortName: 'SRM AP',
      city: 'Amaravati',
      state: 'Andhra Pradesh',
      type: 'Private',
      established: 2017,
      icon: '🎓',
      description: 'Private research-oriented university offering multidisciplinary programs.',
      courses: ['B.Tech', 'B.Sc', 'BBA', 'MBA', 'Ph.D'],
      highlights: ['Engineering', 'Science', 'Management']
    },

    {
      id: 'gitam-visakhapatnam',
      name: 'GITAM University Visakhapatnam',
      shortName: 'GITAM',
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      type: 'Deemed University',
      established: 1980,
      icon: '🏛️',
      description: 'Deemed university offering programs in engineering, medicine, management and sciences.',
      courses: ['B.Tech', 'MBA', 'MBBS', 'B.Pharm', 'Ph.D'],
      highlights: ['Engineering', 'Medicine', 'Management']
    },

    {
      id: 'kl-university',
      name: 'KL University',
      shortName: 'KL',
      city: 'Vaddeswaram',
      state: 'Andhra Pradesh',
      type: 'Deemed University',
      established: 1980,
      icon: '🎓',
      description: 'Deemed university offering engineering, management, science and professional programs.',
      courses: ['B.Tech', 'MBA', 'MCA', 'BBA', 'Ph.D'],
      highlights: ['Engineering', 'Computer Science', 'Management']
    },

    {
      id: 'rvr-jc',
      name: 'R.V.R. & J.C. College of Engineering',
      shortName: 'RVR & JC',
      city: 'Guntur',
      state: 'Andhra Pradesh',
      type: 'Private',
      established: 1985,
      icon: '⚙️',
      description: 'Engineering college offering undergraduate and postgraduate technical programs.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA'],
      highlights: ['Engineering', 'Technology']
    },

    {
      id: 'velagapudi-ramakrishna',
      name: 'Velagapudi Ramakrishna Siddhartha Engineering College',
      shortName: 'VRSEC',
      city: 'Vijayawada',
      state: 'Andhra Pradesh',
      type: 'Private',
      established: 1977,
      icon: '⚙️',
      description: 'Established engineering institution offering technical and professional education.',
      courses: ['B.Tech', 'M.Tech', 'MBA'],
      highlights: ['Engineering', 'Technology']
    },

    {
      id: 'gvpce',
      name: 'Gayatri Vidya Parishad College of Engineering',
      shortName: 'GVPCE',
      city: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      type: 'Private',
      established: 1996,
      icon: '⚙️',
      description: 'Engineering institution offering undergraduate and postgraduate technical programs.',
      courses: ['B.Tech', 'M.Tech', 'MBA'],
      highlights: ['Engineering', 'Computer Science']
    },

    {
      id: 'aditya-engineering-college',
      name: 'Aditya Engineering College',
      shortName: 'AEC',
      city: 'Surampalem',
      state: 'Andhra Pradesh',
      type: 'Private',
      established: 2001,
      icon: '⚙️',
      description: 'Engineering college offering undergraduate and postgraduate programs.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA'],
      highlights: ['Engineering', 'Technology']
    },

    {
      id: 'andhra-loyola',
      name: 'Andhra Loyola College',
      shortName: 'ALC',
      city: 'Vijayawada',
      state: 'Andhra Pradesh',
      type: 'Private',
      established: 1953,
      icon: '📚',
      description: 'Autonomous college offering undergraduate and postgraduate education.',
      courses: ['BA', 'B.Com', 'B.Sc', 'MA', 'M.Sc'],
      highlights: ['Arts', 'Science', 'Commerce']
    },

    // =======================================================
    // TELANGANA
    // =======================================================

    {
      id: 'iit-hyderabad',
      name: 'Indian Institute of Technology Hyderabad',
      shortName: 'IIT Hyderabad',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'IIT',
      established: 2008,
      icon: '🎓',
      description: 'Premier institute for engineering, science, technology and research.',
      courses: ['B.Tech', 'M.Tech', 'M.Sc', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Research']
    },

    {
      id: 'nit-warangal',
      name: 'National Institute of Technology Warangal',
      shortName: 'NIT Warangal',
      city: 'Warangal',
      state: 'Telangana',
      type: 'NIT',
      established: 1959,
      icon: '🏛️',
      description: 'Premier national institute offering engineering, science and management education.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'M.Sc', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Research']
    },

    {
      id: 'iiit-hyderabad',
      name: 'International Institute of Information Technology Hyderabad',
      shortName: 'IIIT Hyderabad',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'IIIT',
      established: 1998,
      icon: '💻',
      description: 'Research-focused institute specializing in information technology and computer science.',
      courses: ['B.Tech', 'M.Tech', 'MS', 'Ph.D'],
      highlights: ['Computer Science', 'AI', 'Research']
    },

    {
      id: 'university-of-hyderabad',
      name: 'University of Hyderabad',
      shortName: 'UoH',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'University',
      established: 1974,
      icon: '🎓',
      description: 'Central university known for postgraduate education and research.',
      courses: ['MA', 'M.Sc', 'M.Tech', 'MBA', 'Ph.D'],
      highlights: ['Science', 'Humanities', 'Research']
    },

    {
      id: 'osmania-university',
      name: 'Osmania University',
      shortName: 'OU',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'University',
      established: 1918,
      icon: '🏛️',
      description: 'Historic public university offering multidisciplinary higher education.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Arts', 'Science', 'Commerce', 'Research']
    },

    {
      id: 'jntuh',
      name: 'Jawaharlal Nehru Technological University Hyderabad',
      shortName: 'JNTUH',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'University',
      established: 1972,
      icon: '⚙️',
      description: 'Major technological university offering engineering and professional education.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Management']
    },

    {
      id: 'kakatiya-university',
      name: 'Kakatiya University',
      shortName: 'KU',
      city: 'Warangal',
      state: 'Telangana',
      type: 'University',
      established: 1976,
      icon: '🎓',
      description: 'Public university offering multidisciplinary undergraduate and postgraduate programs.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Management']
    },

    {
      id: 'telangana-university',
      name: 'Telangana University',
      shortName: 'TU',
      city: 'Nizamabad',
      state: 'Telangana',
      type: 'University',
      established: 2006,
      icon: '🏛️',
      description: 'State university providing multidisciplinary higher education.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Arts', 'Science', 'Commerce']
    },

    {
      id: 'satavahana-university',
      name: 'Satavahana University',
      shortName: 'SU',
      city: 'Karimnagar',
      state: 'Telangana',
      type: 'University',
      established: 2008,
      icon: '🎓',
      description: 'State university offering undergraduate, postgraduate and research programs.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Management']
    },

    {
      id: 'mgu-telangana',
      name: 'Mahatma Gandhi University Telangana',
      shortName: 'MGU',
      city: 'Nalgonda',
      state: 'Telangana',
      type: 'University',
      established: 2007,
      icon: '🏛️',
      description: 'State university offering multidisciplinary higher education.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Management']
    },

    {
      id: 'palamuru-university',
      name: 'Palamuru University',
      shortName: 'PU',
      city: 'Mahbubnagar',
      state: 'Telangana',
      type: 'University',
      established: 2008,
      icon: '🎓',
      description: 'State university serving the Mahbubnagar region.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Commerce']
    },

    {
      id: 'eflu',
      name: 'The English and Foreign Languages University',
      shortName: 'EFLU',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'University',
      established: 1973,
      icon: '📚',
      description: 'Central university specializing in English and foreign language education.',
      courses: ['BA', 'MA', 'M.Phil', 'Ph.D'],
      highlights: ['Languages', 'Humanities', 'Research']
    },

    {
      id: 'nalsar',
      name: 'National Academy of Legal Studies and Research',
      shortName: 'NALSAR',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'Law',
      established: 1998,
      icon: '⚖️',
      description: 'Leading legal education and research institution.',
      courses: ['BA LLB', 'LLM', 'Ph.D'],
      highlights: ['Law', 'Legal Research']
    },

    {
      id: 'niper-hyderabad',
      name: 'National Institute of Pharmaceutical Education and Research Hyderabad',
      shortName: 'NIPER Hyderabad',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'Research',
      established: 2007,
      icon: '🧪',
      description: 'National institute specializing in pharmaceutical education and research.',
      courses: ['M.S.', 'M.Pharm', 'Ph.D'],
      highlights: ['Pharmacy', 'Research', 'Pharmaceutical Sciences']
    },

    {
      id: 'aiims-bibinagar',
      name: 'All India Institute of Medical Sciences Bibinagar',
      shortName: 'AIIMS Bibinagar',
      city: 'Bibinagar',
      state: 'Telangana',
      type: 'Medical',
      established: 2019,
      icon: '🏥',
      description: 'Central medical institute providing medical education, healthcare and research.',
      courses: ['MBBS', 'MD', 'MS', 'Ph.D'],
      highlights: ['Medicine', 'Healthcare', 'Research']
    },

    {
      id: 'cbit',
      name: 'Chaitanya Bharathi Institute of Technology',
      shortName: 'CBIT',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'Private',
      established: 1979,
      icon: '⚙️',
      description: 'Established engineering college offering technical and professional programs.',
      courses: ['B.Tech', 'M.Tech', 'MBA'],
      highlights: ['Engineering', 'Computer Science']
    },

    {
      id: 'vasavi-college',
      name: 'Vasavi College of Engineering',
      shortName: 'VCE',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'Private',
      established: 1981,
      icon: '⚙️',
      description: 'Engineering institution offering undergraduate and postgraduate technical education.',
      courses: ['B.Tech', 'M.Tech', 'MBA'],
      highlights: ['Engineering', 'Technology']
    },

    {
      id: 'vnrvjiet',
      name: 'VNR Vignana Jyothi Institute of Engineering and Technology',
      shortName: 'VNR VJIET',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'Private',
      established: 1995,
      icon: '⚙️',
      description: 'Engineering and technology institution in Hyderabad.',
      courses: ['B.Tech', 'M.Tech', 'MBA'],
      highlights: ['Engineering', 'Computer Science']
    },

    {
      id: 'cvr-college',
      name: 'CVR College of Engineering',
      shortName: 'CVR',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'Private',
      established: 2001,
      icon: '⚙️',
      description: 'Private engineering college offering technical programs.',
      courses: ['B.Tech', 'M.Tech', 'MBA'],
      highlights: ['Engineering', 'Technology']
    },

    {
      id: 'mallareddy-engineering',
      name: 'Malla Reddy College of Engineering and Technology',
      shortName: 'MRCET',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'Private',
      established: 2004,
      icon: '⚙️',
      description: 'Engineering college offering undergraduate and postgraduate programs.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA'],
      highlights: ['Engineering', 'Computer Science']
    },

    {
      id: 'anurag-university',
      name: 'Anurag University',
      shortName: 'Anurag University',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'Private',
      established: 2020,
      icon: '🎓',
      description: 'Private university offering engineering, pharmacy, management and health programs.',
      courses: ['B.Tech', 'B.Pharm', 'MBA', 'Pharm.D'],
      highlights: ['Engineering', 'Pharmacy', 'Management']
    },

    {
      id: 'woxsen-university',
      name: 'Woxsen University',
      shortName: 'Woxsen',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'Private',
      established: 2014,
      icon: '🎓',
      description: 'Private university offering programs in technology, business, design and architecture.',
      courses: ['B.Tech', 'BBA', 'MBA', 'B.Des'],
      highlights: ['Technology', 'Business', 'Design']
    },

    {
      id: 'gitam-hyderabad',
      name: 'GITAM Hyderabad Campus',
      shortName: 'GITAM Hyderabad',
      city: 'Hyderabad',
      state: 'Telangana',
      type: 'Deemed University',
      established: 2009,
      icon: '🎓',
      description: 'Multidisciplinary university campus offering engineering, management and science programs.',
      courses: ['B.Tech', 'BBA', 'MBA', 'M.Sc'],
      highlights: ['Engineering', 'Management', 'Science']
    },

    // =======================================================
    // TAMIL NADU
    // =======================================================

    {
      id: 'iit-madras',
      name: 'Indian Institute of Technology Madras',
      shortName: 'IIT Madras',
      city: 'Chennai',
      state: 'Tamil Nadu',
      type: 'IIT',
      established: 1959,
      icon: '🎓',
      description: 'Premier institute for engineering, science, technology and research.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'M.Sc', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Research']
    },

    {
      id: 'nit-trichy',
      name: 'National Institute of Technology Tiruchirappalli',
      shortName: 'NIT Trichy',
      city: 'Tiruchirappalli',
      state: 'Tamil Nadu',
      type: 'NIT',
      established: 1964,
      icon: '🏛️',
      description: 'Premier national institute offering engineering, science and management education.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'M.Sc', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Research']
    },

    {
      id: 'iiitdm-kancheepuram',
      name: 'IIITDM Kancheepuram',
      shortName: 'IIITDM Kancheepuram',
      city: 'Chennai',
      state: 'Tamil Nadu',
      type: 'IIIT',
      established: 2007,
      icon: '💻',
      description: 'Institute focused on information technology, design and manufacturing.',
      courses: ['B.Tech', 'M.Tech', 'Ph.D'],
      highlights: ['Computer Science', 'Design', 'Manufacturing']
    },

    {
      id: 'anna-university',
      name: 'Anna University',
      shortName: 'Anna University',
      city: 'Chennai',
      state: 'Tamil Nadu',
      type: 'University',
      established: 1978,
      icon: '🎓',
      description: 'Major public university specializing in engineering, technology and research.',
      courses: ['B.E', 'B.Tech', 'M.E', 'M.Tech', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Research']
    },

    {
      id: 'university-of-madras',
      name: 'University of Madras',
      shortName: 'University of Madras',
      city: 'Chennai',
      state: 'Tamil Nadu',
      type: 'University',
      established: 1857,
      icon: '🏛️',
      description: 'Historic public university offering multidisciplinary higher education.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Arts', 'Science', 'Commerce', 'Research']
    },

    {
      id: 'bharathiar-university',
      name: 'Bharathiar University',
      shortName: 'BU',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      type: 'University',
      established: 1982,
      icon: '🎓',
      description: 'Public university offering multidisciplinary education and research.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Management']
    },

    {
      id: 'bharathidasan-university',
      name: 'Bharathidasan University',
      shortName: 'BDU',
      city: 'Tiruchirappalli',
      state: 'Tamil Nadu',
      type: 'University',
      established: 1982,
      icon: '🎓',
      description: 'Public university offering multidisciplinary academic programs.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Research']
    },

    {
      id: 'madurai-kamaraj-university',
      name: 'Madurai Kamaraj University',
      shortName: 'MKU',
      city: 'Madurai',
      state: 'Tamil Nadu',
      type: 'University',
      established: 1966,
      icon: '🏛️',
      description: 'Major university offering undergraduate, postgraduate and research programs.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Management']
    },

    {
      id: 'alagappa-university',
      name: 'Alagappa University',
      shortName: 'Alagappa University',
      city: 'Karaikudi',
      state: 'Tamil Nadu',
      type: 'University',
      established: 1985,
      icon: '🎓',
      description: 'State university offering multidisciplinary education and research.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Management', 'Education']
    },

    {
      id: 'periyar-university',
      name: 'Periyar University',
      shortName: 'Periyar University',
      city: 'Salem',
      state: 'Tamil Nadu',
      type: 'University',
      established: 1997,
      icon: '🏛️',
      description: 'Public university offering programs across science, arts and management.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Management']
    },

    {
      id: 'annamalai-university',
      name: 'Annamalai University',
      shortName: 'Annamalai University',
      city: 'Chidambaram',
      state: 'Tamil Nadu',
      type: 'University',
      established: 1929,
      icon: '🎓',
      description: 'Large multidisciplinary university offering professional and academic programs.',
      courses: ['UG', 'PG', 'Engineering', 'Medicine', 'Ph.D'],
      highlights: ['Engineering', 'Medicine', 'Arts']
    },

    {
      id: 'tnau',
      name: 'Tamil Nadu Agricultural University',
      shortName: 'TNAU',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      type: 'University',
      established: 1971,
      icon: '🌱',
      description: 'Specialized university focused on agricultural education and research.',
      courses: ['B.Sc Agriculture', 'B.Tech', 'M.Sc', 'Ph.D'],
      highlights: ['Agriculture', 'Research', 'Food Technology']
    },

    {
      id: 'tanuvas',
      name: 'Tamil Nadu Veterinary and Animal Sciences University',
      shortName: 'TANUVAS',
      city: 'Chennai',
      state: 'Tamil Nadu',
      type: 'University',
      established: 1989,
      icon: '🐾',
      description: 'Specialized university for veterinary and animal sciences education.',
      courses: ['BVSc', 'M.V.Sc', 'Ph.D'],
      highlights: ['Veterinary', 'Animal Sciences', 'Research']
    },

    {
      id: 'tn-mgr-medical-university',
      name: 'The Tamil Nadu Dr. M.G.R. Medical University',
      shortName: 'TNMGRMU',
      city: 'Chennai',
      state: 'Tamil Nadu',
      type: 'Medical',
      established: 1987,
      icon: '🏥',
      description: 'Major medical university overseeing health science education.',
      courses: ['MBBS', 'BDS', 'B.Pharm', 'MD', 'MS'],
      highlights: ['Medicine', 'Dentistry', 'Pharmacy']
    },

    {
      id: 'vit-vellore',
      name: 'Vellore Institute of Technology',
      shortName: 'VIT',
      city: 'Vellore',
      state: 'Tamil Nadu',
      type: 'Private',
      established: 1984,
      icon: '💻',
      description: 'Private institution offering engineering, science and management programs.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'M.Sc', 'Ph.D'],
      highlights: ['Engineering', 'Computer Science', 'Research']
    },

    {
      id: 'srm-institute',
      name: 'SRM Institute of Science and Technology',
      shortName: 'SRMIST',
      city: 'Chennai',
      state: 'Tamil Nadu',
      type: 'Deemed University',
      established: 1985,
      icon: '🎓',
      description: 'Large multidisciplinary deemed university offering professional education.',
      courses: ['B.Tech', 'MBBS', 'MBA', 'B.Des', 'Ph.D'],
      highlights: ['Engineering', 'Medicine', 'Management']
    },

    {
      id: 'sathyabama',
      name: 'Sathyabama Institute of Science and Technology',
      shortName: 'Sathyabama',
      city: 'Chennai',
      state: 'Tamil Nadu',
      type: 'Deemed University',
      established: 1987,
      icon: '🎓',
      description: 'Deemed university offering engineering, science, architecture and management programs.',
      courses: ['B.Tech', 'B.Arch', 'MBA', 'M.Sc', 'Ph.D'],
      highlights: ['Engineering', 'Architecture', 'Science']
    },

    {
      id: 'ssn-college',
      name: 'SSN College of Engineering',
      shortName: 'SSN',
      city: 'Chennai',
      state: 'Tamil Nadu',
      type: 'Private',
      established: 1996,
      icon: '⚙️',
      description: 'Engineering institution offering undergraduate and postgraduate technical programs.',
      courses: ['B.E', 'B.Tech', 'M.E', 'M.Tech', 'Ph.D'],
      highlights: ['Engineering', 'Computer Science']
    },

    {
      id: 'psg-tech',
      name: 'PSG College of Technology',
      shortName: 'PSG Tech',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      type: 'Private',
      established: 1951,
      icon: '⚙️',
      description: 'Established autonomous engineering institution in Coimbatore.',
      courses: ['B.E', 'B.Tech', 'M.E', 'M.Tech', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Research']
    },

    {
      id: 'cit-coimbatore',
      name: 'Coimbatore Institute of Technology',
      shortName: 'CIT',
      city: 'Coimbatore',
      state: 'Tamil Nadu',
      type: 'Private',
      established: 1956,
      icon: '⚙️',
      description: 'Engineering and technology institution offering technical education.',
      courses: ['B.E', 'B.Tech', 'M.E', 'M.Tech'],
      highlights: ['Engineering', 'Technology']
    },

    {
      id: 'loyola-college',
      name: 'Loyola College',
      shortName: 'Loyola',
      city: 'Chennai',
      state: 'Tamil Nadu',
      type: 'Private',
      established: 1925,
      icon: '📚',
      description: 'Autonomous arts and science college offering undergraduate and postgraduate programs.',
      courses: ['BA', 'B.Com', 'B.Sc', 'MA', 'M.Sc'],
      highlights: ['Arts', 'Science', 'Commerce']
    },

    {
      id: 'madras-christian-college',
      name: 'Madras Christian College',
      shortName: 'MCC',
      city: 'Chennai',
      state: 'Tamil Nadu',
      type: 'Private',
      established: 1837,
      icon: '📚',
      description: 'Historic autonomous liberal arts and science college.',
      courses: ['BA', 'B.Com', 'B.Sc', 'MA', 'M.Sc'],
      highlights: ['Arts', 'Science', 'Commerce']
    },

    {
      id: 'stella-maris',
      name: 'Stella Maris College',
      shortName: 'SMC',
      city: 'Chennai',
      state: 'Tamil Nadu',
      type: 'Private',
      established: 1947,
      icon: '📚',
      description: 'Autonomous women-focused arts and science college.',
      courses: ['BA', 'B.Com', 'B.Sc', 'MA', 'M.Sc'],
      highlights: ['Arts', 'Science', 'Commerce']
    },

    // =======================================================
    // KARNATAKA
    // =======================================================

    {
      id: 'iisc-bangalore',
      name: 'Indian Institute of Science',
      shortName: 'IISc',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Research',
      established: 1909,
      icon: '🔬',
      description: 'Premier Indian research institution focused on science, engineering and technology.',
      courses: ['B.Tech', 'M.Tech', 'M.Sc', 'Ph.D'],
      highlights: ['Research', 'Science', 'Engineering']
    },

    {
      id: 'iit-dharwad',
      name: 'Indian Institute of Technology Dharwad',
      shortName: 'IIT Dharwad',
      city: 'Dharwad',
      state: 'Karnataka',
      type: 'IIT',
      established: 2016,
      icon: '🎓',
      description: 'Premier institute offering engineering, science and research programs.',
      courses: ['B.Tech', 'M.Tech', 'M.Sc', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Research']
    },

    {
      id: 'nitk-surathkal',
      name: 'National Institute of Technology Karnataka',
      shortName: 'NITK Surathkal',
      city: 'Surathkal',
      state: 'Karnataka',
      type: 'NIT',
      established: 1960,
      icon: '🏛️',
      description: 'Premier national institute for engineering, science and technology.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'M.Sc', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Research']
    },

    {
      id: 'iiit-bangalore',
      name: 'International Institute of Information Technology Bangalore',
      shortName: 'IIIT Bangalore',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'IIIT',
      established: 1999,
      icon: '💻',
      description: 'Research-oriented institute specializing in information technology.',
      courses: ['Integrated M.Tech', 'M.Tech', 'MS', 'Ph.D'],
      highlights: ['Computer Science', 'AI', 'Research']
    },

    {
      id: 'iiit-dharwad',
      name: 'Indian Institute of Information Technology Dharwad',
      shortName: 'IIIT Dharwad',
      city: 'Dharwad',
      state: 'Karnataka',
      type: 'IIIT',
      established: 2015,
      icon: '💻',
      description: 'Institute specializing in information technology and computer science.',
      courses: ['B.Tech', 'M.Tech', 'Ph.D'],
      highlights: ['Computer Science', 'Technology']
    },

    {
      id: 'iim-bangalore',
      name: 'Indian Institute of Management Bangalore',
      shortName: 'IIM Bangalore',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Management',
      established: 1973,
      icon: '📊',
      description: 'Premier management education and research institution.',
      courses: ['MBA', 'PGP', 'Ph.D', 'Executive Programs'],
      highlights: ['Management', 'Business', 'Research']
    },

    {
      id: 'nlsiu',
      name: 'National Law School of India University',
      shortName: 'NLSIU',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Law',
      established: 1986,
      icon: '⚖️',
      description: 'Premier national institution for legal education and research.',
      courses: ['BA LLB', 'LLM', 'Ph.D'],
      highlights: ['Law', 'Legal Research']
    },

    {
      id: 'bangalore-university',
      name: 'Bangalore University',
      shortName: 'BU',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'University',
      established: 1964,
      icon: '🎓',
      description: 'Public university offering multidisciplinary higher education.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Arts', 'Science', 'Commerce']
    },

    {
      id: 'vtu',
      name: 'Visvesvaraya Technological University',
      shortName: 'VTU',
      city: 'Belagavi',
      state: 'Karnataka',
      type: 'University',
      established: 1998,
      icon: '⚙️',
      description: 'Major technological university serving engineering education across Karnataka.',
      courses: ['B.E', 'B.Tech', 'M.E', 'M.Tech', 'Ph.D'],
      highlights: ['Engineering', 'Technology']
    },

    {
      id: 'university-of-mysore',
      name: 'University of Mysore',
      shortName: 'UoM',
      city: 'Mysuru',
      state: 'Karnataka',
      type: 'University',
      established: 1916,
      icon: '🏛️',
      description: 'Historic public university offering multidisciplinary education and research.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Arts', 'Science', 'Research']
    },

    {
      id: 'mangalore-university',
      name: 'Mangalore University',
      shortName: 'MU',
      city: 'Mangaluru',
      state: 'Karnataka',
      type: 'University',
      established: 1980,
      icon: '🎓',
      description: 'Public university offering multidisciplinary higher education.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Commerce']
    },

    {
      id: 'karnatak-university',
      name: 'Karnatak University',
      shortName: 'KUD',
      city: 'Dharwad',
      state: 'Karnataka',
      type: 'University',
      established: 1949,
      icon: '🏛️',
      description: 'Major public university offering multidisciplinary education and research.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Arts', 'Science', 'Research']
    },

    {
      id: 'kuvempu-university',
      name: 'Kuvempu University',
      shortName: 'Kuvempu University',
      city: 'Shivamogga',
      state: 'Karnataka',
      type: 'University',
      established: 1987,
      icon: '🎓',
      description: 'State university offering multidisciplinary undergraduate and postgraduate education.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Management']
    },

    {
      id: 'gulbarga-university',
      name: 'Gulbarga University',
      shortName: 'GUG',
      city: 'Kalaburagi',
      state: 'Karnataka',
      type: 'University',
      established: 1980,
      icon: '🎓',
      description: 'Public university serving northern Karnataka.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Management']
    },

    {
      id: 'tumkur-university',
      name: 'Tumkur University',
      shortName: 'TU',
      city: 'Tumakuru',
      state: 'Karnataka',
      type: 'University',
      established: 2004,
      icon: '🏛️',
      description: 'State university offering multidisciplinary programs.',
      courses: ['UG', 'PG', 'MBA', 'MCA', 'Ph.D'],
      highlights: ['Science', 'Arts', 'Commerce']
    },

    {
      id: 'christ-university',
      name: 'Christ University',
      shortName: 'CHRIST',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Deemed University',
      established: 1969,
      icon: '🎓',
      description: 'Multidisciplinary deemed university offering professional and academic programs.',
      courses: ['B.Tech', 'BBA', 'B.Com', 'MBA', 'Ph.D'],
      highlights: ['Management', 'Commerce', 'Computer Science']
    },

    {
      id: 'manipal-academy',
      name: 'Manipal Academy of Higher Education',
      shortName: 'MAHE',
      city: 'Manipal',
      state: 'Karnataka',
      type: 'Deemed University',
      established: 1953,
      icon: '🎓',
      description: 'Large multidisciplinary deemed university with programs across professional fields.',
      courses: ['B.Tech', 'MBBS', 'MBA', 'B.Pharm', 'Ph.D'],
      highlights: ['Medicine', 'Engineering', 'Management']
    },

    {
      id: 'rv-college-engineering',
      name: 'R.V. College of Engineering',
      shortName: 'RVCE',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Private',
      established: 1963,
      icon: '⚙️',
      description: 'Premier private engineering institution in Bengaluru.',
      courses: ['B.E', 'M.Tech', 'MBA', 'Ph.D'],
      highlights: ['Engineering', 'Computer Science', 'Technology']
    },

    {
      id: 'bms-college-engineering',
      name: 'BMS College of Engineering',
      shortName: 'BMSCE',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Private',
      established: 1946,
      icon: '⚙️',
      description: 'Established engineering college offering undergraduate and postgraduate technical education.',
      courses: ['B.E', 'M.Tech', 'MBA', 'Ph.D'],
      highlights: ['Engineering', 'Technology']
    },

    {
      id: 'msrit',
      name: 'M.S. Ramaiah Institute of Technology',
      shortName: 'MSRIT',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Private',
      established: 1962,
      icon: '⚙️',
      description: 'Engineering and technology institution offering professional programs.',
      courses: ['B.E', 'M.Tech', 'MBA', 'Ph.D'],
      highlights: ['Engineering', 'Computer Science']
    },

    {
      id: 'pes-university',
      name: 'PES University',
      shortName: 'PESU',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Private',
      established: 1972,
      icon: '🎓',
      description: 'Private university offering engineering, management, science and design programs.',
      courses: ['B.Tech', 'BBA', 'MBA', 'M.Tech', 'Ph.D'],
      highlights: ['Engineering', 'Computer Science', 'Management']
    },

    {
      id: 'rv-university',
      name: 'RV University',
      shortName: 'RVU',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Private',
      established: 2021,
      icon: '🎓',
      description: 'Private university offering programs across technology, design, business and law.',
      courses: ['B.Tech', 'BBA', 'B.Des', 'BA LLB'],
      highlights: ['Technology', 'Design', 'Business']
    },

    {
      id: 'jss-science-technology',
      name: 'JSS Science and Technology University',
      shortName: 'JSS STU',
      city: 'Mysuru',
      state: 'Karnataka',
      type: 'Private',
      established: 2016,
      icon: '⚙️',
      description: 'University offering engineering, technology and science programs.',
      courses: ['B.E', 'M.Tech', 'MBA', 'Ph.D'],
      highlights: ['Engineering', 'Technology', 'Science']
    },

    {
      id: 'nitte-university',
      name: 'NITTE University',
      shortName: 'NITTE',
      city: 'Mangaluru',
      state: 'Karnataka',
      type: 'Deemed University',
      established: 2008,
      icon: '🎓',
      description: 'Deemed university offering programs in medicine, engineering, management and health sciences.',
      courses: ['B.Tech', 'MBBS', 'BDS', 'MBA', 'Ph.D'],
      highlights: ['Medicine', 'Engineering', 'Management']
    },

    {
      id: 'nmamit',
      name: 'N.M.A.M. Institute of Technology',
      shortName: 'NMAMIT',
      city: 'Nitte',
      state: 'Karnataka',
      type: 'Private',
      established: 1986,
      icon: '⚙️',
      description: 'Engineering institution offering undergraduate and postgraduate technical programs.',
      courses: ['B.E', 'M.Tech', 'MBA', 'Ph.D'],
      highlights: ['Engineering', 'Computer Science']
    },

    {
      id: 'jain-university',
      name: 'Jain University',
      shortName: 'JAIN',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Deemed University',
      established: 1990,
      icon: '🎓',
      description: 'Deemed university offering multidisciplinary professional programs.',
      courses: ['B.Tech', 'BBA', 'B.Com', 'MBA', 'Ph.D'],
      highlights: ['Management', 'Commerce', 'Technology']
    },

    {
      id: 'reva-university',
      name: 'REVA University',
      shortName: 'REVA',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Private',
      established: 2012,
      icon: '🎓',
      description: 'Private university offering engineering, management, law and design programs.',
      courses: ['B.Tech', 'BBA', 'MBA', 'B.Des', 'Ph.D'],
      highlights: ['Engineering', 'Management', 'Design']
    },

    {
      id: 'dayananda-sagar-university',
      name: 'Dayananda Sagar University',
      shortName: 'DSU',
      city: 'Bengaluru',
      state: 'Karnataka',
      type: 'Private',
      established: 2014,
      icon: '🎓',
      description: 'Private university offering programs in engineering, health sciences and management.',
      courses: ['B.Tech', 'B.Pharm', 'BBA', 'MBA'],
      highlights: ['Engineering', 'Health Sciences', 'Management']
    }

  ];


  // =========================================================
  // FILTERED COLLEGES
  // =========================================================

  get filteredColleges(): College[] {

    const search = this.searchTerm
      .trim()
      .toLowerCase();

    return this.colleges.filter(college => {

      const matchesSearch =
        !search ||
        college.name.toLowerCase().includes(search) ||
        college.shortName.toLowerCase().includes(search) ||
        college.city.toLowerCase().includes(search) ||
        college.state.toLowerCase().includes(search) ||
        college.description.toLowerCase().includes(search) ||
        college.courses.some(course =>
          course.toLowerCase().includes(search)
        ) ||
        college.highlights.some(highlight =>
          highlight.toLowerCase().includes(search)
        );

      const matchesState =
        this.selectedState === 'All' ||
        college.state === this.selectedState;

      const matchesType =
        this.selectedType === 'All' ||
        college.type === this.selectedType;

      return (
        matchesSearch &&
        matchesState &&
        matchesType
      );
    });
  }


  // =========================================================
  // SELECT STATE
  // =========================================================

  selectState(state: string): void {
    this.selectedState = state;
  }


  // =========================================================
  // SELECT TYPE
  // =========================================================

  selectType(type: string): void {
    this.selectedType = type;
  }


  // =========================================================
  // RESET FILTERS
  // =========================================================

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedState = 'All';
    this.selectedType = 'All';
  }

}