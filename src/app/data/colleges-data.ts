export interface College {
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

export const colleges: College[] = [

  /* =====================================================
     ANDHRA PRADESH
     ===================================================== */

  {
    id: 'iit-tirupati',
    name: 'Indian Institute of Technology Tirupati',
    shortName: 'IIT Tirupati',
    city: 'Tirupati',
    state: 'Andhra Pradesh',
    type: 'IIT',
    established: 2015,
    icon: '🎓',
    description: 'An Institute of National Importance offering education and research in engineering, science and technology.',
    courses: ['B.Tech', 'M.Tech', 'M.Sc', 'Ph.D.'],
    highlights: [
      'Institute of National Importance',
      'Engineering and technology programs',
      'Research-oriented environment',
      'Modern academic facilities'
    ]
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
    description: 'A centrally funded technical institution offering undergraduate, postgraduate and doctoral education.',
    courses: ['B.Tech', 'M.Tech', 'M.Sc', 'Ph.D.'],
    highlights: [
      'National Institute of Technology',
      'Engineering-focused education',
      'Research opportunities',
      'Modern campus facilities'
    ]
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
    description: 'An information-technology focused institute offering undergraduate, postgraduate and research programs.',
    courses: ['B.Tech', 'M.Tech', 'Ph.D.'],
    highlights: [
      'Information technology education',
      'Industry-oriented learning',
      'Technology-focused programs',
      'Research opportunities'
    ]
  },

  {
    id: 'iiitdm-kurnool',
    name: 'Indian Institute of Information Technology Design and Manufacturing Kurnool',
    shortName: 'IIITDM Kurnool',
    city: 'Kurnool',
    state: 'Andhra Pradesh',
    type: 'IIIT',
    established: 2015,
    icon: '💻',
    description: 'An institute focused on information technology, design and manufacturing education.',
    courses: ['B.Tech', 'M.Tech', 'Ph.D.'],
    highlights: [
      'Technology-focused education',
      'Design and manufacturing',
      'Engineering programs',
      'Research opportunities'
    ]
  },

  {
    id: 'andhra-university',
    name: 'Andhra University',
    shortName: 'AU',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    type: 'University',
    established: 1926,
    icon: '🎓',
    description: 'A public university offering programs across sciences, engineering, arts, commerce and professional disciplines.',
    courses: ['UG Programs', 'PG Programs', 'Professional Courses', 'Ph.D.'],
    highlights: [
      'Historic university',
      'Wide range of programs',
      'Research opportunities',
      'Large academic ecosystem'
    ]
  },

  {
    id: 'jntu-kakinada',
    name: 'Jawaharlal Nehru Technological University Kakinada',
    shortName: 'JNTUK',
    city: 'Kakinada',
    state: 'Andhra Pradesh',
    type: 'University',
    established: 1946,
    icon: '🏛️',
    description: 'A technological university offering engineering, science, management and related programs.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Technical education',
      'Engineering programs',
      'Research programs',
      'Large affiliated college network'
    ]
  },

  {
    id: 'jntu-anantapur',
    name: 'Jawaharlal Nehru Technological University Anantapur',
    shortName: 'JNTUA',
    city: 'Anantapur',
    state: 'Andhra Pradesh',
    type: 'University',
    established: 1946,
    icon: '🏛️',
    description: 'A university providing education in engineering, technology, management and sciences.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Engineering education',
      'Technology programs',
      'Research opportunities',
      'Professional education'
    ]
  },

  {
    id: 'sri-venkateswara-university',
    name: 'Sri Venkateswara University',
    shortName: 'SVU',
    city: 'Tirupati',
    state: 'Andhra Pradesh',
    type: 'University',
    established: 1954,
    icon: '🎓',
    description: 'A public university offering undergraduate, postgraduate and doctoral programs across multiple disciplines.',
    courses: ['UG Programs', 'PG Programs', 'Professional Courses', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Research programs',
      'Postgraduate education',
      'Established university'
    ]
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
    description: 'A public university offering programs across arts, sciences, commerce, engineering and professional disciplines.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary programs',
      'Research opportunities',
      'Professional courses',
      'Large academic campus'
    ]
  },

  {
    id: 'sri-krishnadevaraya-university',
    name: 'Sri Krishnadevaraya University',
    shortName: 'SKU',
    city: 'Anantapur',
    state: 'Andhra Pradesh',
    type: 'University',
    established: 1981,
    icon: '🎓',
    description: 'A public university offering education and research across several academic disciplines.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Research programs',
      'Postgraduate programs',
      'Academic facilities'
    ]
  },

  {
    id: 'jntu-gv',
    name: 'Jawaharlal Nehru Technological University Gurajada Vizianagaram',
    shortName: 'JNTU-GV',
    city: 'Vizianagaram',
    state: 'Andhra Pradesh',
    type: 'University',
    established: 2021,
    icon: '🏛️',
    description: 'A technological university focused on engineering, technology and related higher education.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Technology education',
      'Engineering programs',
      'Research opportunities',
      'Professional education'
    ]
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
    description: 'A public university offering undergraduate, postgraduate and research programs.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary programs',
      'Research opportunities',
      'Professional courses',
      'Academic facilities'
    ]
  },

  {
    id: 'yogi-vemana-university',
    name: 'Yogi Vemana University',
    shortName: 'YVU',
    city: 'Kadapa',
    state: 'Andhra Pradesh',
    type: 'University',
    established: 2006,
    icon: '🎓',
    description: 'A public university offering programs in sciences, arts, commerce and related disciplines.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Research programs',
      'Postgraduate education',
      'Academic facilities'
    ]
  },

  {
    id: 'adikavi-nannaya-university',
    name: 'Adikavi Nannaya University',
    shortName: 'AKNU',
    city: 'Rajamahendravaram',
    state: 'Andhra Pradesh',
    type: 'University',
    established: 2006,
    icon: '🎓',
    description: 'A public university offering undergraduate, postgraduate and doctoral programs.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary programs',
      'Research opportunities',
      'Professional education',
      'Academic programs'
    ]
  },

  {
    id: 'vit-ap',
    name: 'VIT-AP University',
    shortName: 'VIT-AP',
    city: 'Amaravati',
    state: 'Andhra Pradesh',
    type: 'Private',
    established: 2017,
    icon: '🎓',
    description: 'A private university offering programs in engineering, management, sciences and related areas.',
    courses: ['B.Tech', 'BBA', 'B.Sc', 'M.Tech', 'MBA'],
    highlights: [
      'Technology-focused education',
      'Industry-oriented curriculum',
      'Modern infrastructure',
      'Research opportunities'
    ]
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
    description: 'A multidisciplinary private university offering programs in engineering, sciences, liberal arts and management.',
    courses: ['B.Tech', 'B.Sc', 'BBA', 'MBA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Modern campus',
      'Research opportunities',
      'Industry interaction'
    ]
  },

  {
    id: 'gitam-visakhapatnam',
    name: 'GITAM',
    shortName: 'GITAM',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    type: 'Deemed University',
    established: 1980,
    icon: '🎓',
    description: 'A multidisciplinary deemed university offering programs across engineering, management, sciences and humanities.',
    courses: ['B.Tech', 'BBA', 'B.Sc', 'MBA', 'M.Tech'],
    highlights: [
      'Multidisciplinary programs',
      'Engineering education',
      'Industry exposure',
      'Research opportunities'
    ]
  },

  {
    id: 'kl-university',
    name: 'Koneru Lakshmaiah Education Foundation',
    shortName: 'KL University',
    city: 'Vaddeswaram',
    state: 'Andhra Pradesh',
    type: 'Deemed University',
    established: 1980,
    icon: '🎓',
    description: 'A deemed university offering programs in engineering, management, sciences and other disciplines.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Engineering programs',
      'Research facilities',
      'Technology education',
      'Modern campus'
    ]
  },

  {
    id: 'rvr-jc',
    name: 'RVR & JC College of Engineering',
    shortName: 'RVR & JC',
    city: 'Guntur',
    state: 'Andhra Pradesh',
    type: 'Private',
    established: 1985,
    icon: '🏫',
    description: 'An engineering institution offering undergraduate and postgraduate technical education.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA'],
    highlights: [
      'Engineering programs',
      'Technical education',
      'Laboratory facilities',
      'Professional programs'
    ]
  },

  {
    id: 'velagapudi-ramakrishna',
    name: 'Velagapudi Ramakrishna Siddhartha Engineering College',
    shortName: 'VRSEC',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    type: 'Private',
    established: 1977,
    icon: '🏫',
    description: 'An engineering college offering undergraduate and postgraduate programs in technology and engineering.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA'],
    highlights: [
      'Engineering education',
      'Technical programs',
      'Industry interaction',
      'Campus facilities'
    ]
  },

  {
    id: 'gvpce',
    name: 'Gayatri Vidya Parishad College of Engineering',
    shortName: 'GVPCE',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    type: 'Private',
    established: 1996,
    icon: '🏫',
    description: 'An engineering institution offering undergraduate and postgraduate programs.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA'],
    highlights: [
      'Engineering programs',
      'Technical education',
      'Research activities',
      'Campus facilities'
    ]
  },

  {
    id: 'aditya-engineering-college',
    name: 'Aditya Engineering College',
    shortName: 'AEC',
    city: 'Surampalem',
    state: 'Andhra Pradesh',
    type: 'Private',
    established: 2001,
    icon: '🏫',
    description: 'An engineering college offering undergraduate and postgraduate technical programs.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA'],
    highlights: [
      'Engineering programs',
      'Technical education',
      'Laboratories',
      'Industry-oriented learning'
    ]
  },

  {
    id: 'andhra-loyola',
    name: 'Andhra Loyola College',
    shortName: 'ALC',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    type: 'Private',
    established: 1953,
    icon: '🏫',
    description: 'An autonomous educational institution offering undergraduate and postgraduate programs.',
    courses: ['BA', 'B.Com', 'B.Sc', 'MA', 'M.Com'],
    highlights: [
      'Arts and science education',
      'Commerce programs',
      'Autonomous institution',
      'Academic facilities'
    ]
  },


  /* =====================================================
     TELANGANA
     ===================================================== */

  {
    id: 'iit-hyderabad',
    name: 'Indian Institute of Technology Hyderabad',
    shortName: 'IIT Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'IIT',
    established: 2008,
    icon: '🎓',
    description: 'A research-focused institute offering programs in engineering, science, design and interdisciplinary areas.',
    courses: ['B.Tech', 'M.Tech', 'M.Des', 'M.Sc', 'Ph.D.'],
    highlights: [
      'Institute of National Importance',
      'Research ecosystem',
      'Engineering and science programs',
      'Interdisciplinary education'
    ]
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
    description: 'A centrally funded technical institution offering undergraduate, postgraduate and doctoral programs.',
    courses: ['B.Tech', 'M.Tech', 'M.Sc', 'MBA', 'Ph.D.'],
    highlights: [
      'National Institute of Technology',
      'Engineering education',
      'Research programs',
      'Large academic campus'
    ]
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
    description: 'A technology-focused institution specializing in computing, information technology and related research.',
    courses: ['B.Tech', 'M.Tech', 'MS', 'Ph.D.'],
    highlights: [
      'Computing-focused education',
      'Research-oriented programs',
      'Technology ecosystem',
      'Industry interaction'
    ]
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
    description: 'A central university offering postgraduate and research programs across sciences, humanities and social sciences.',
    courses: ['MA', 'M.Sc', 'M.Tech', 'MBA', 'Ph.D.'],
    highlights: [
      'Central university',
      'Research-focused education',
      'Multidisciplinary programs',
      'Large campus'
    ]
  },

  {
    id: 'osmania-university',
    name: 'Osmania University',
    shortName: 'OU',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'University',
    established: 1918,
    icon: '🎓',
    description: 'A historic public university offering programs across sciences, arts, commerce, engineering and professional disciplines.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Historic university',
      'Multidisciplinary education',
      'Research programs',
      'Professional courses'
    ]
  },

  {
    id: 'jntuh',
    name: 'Jawaharlal Nehru Technological University Hyderabad',
    shortName: 'JNTUH',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'University',
    established: 1972,
    icon: '🏛️',
    description: 'A technological university offering engineering, technology, management and related programs.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Technology education',
      'Engineering programs',
      'Research opportunities',
      'Professional education'
    ]
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
    description: 'A public university offering multidisciplinary undergraduate, postgraduate and doctoral programs.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary programs',
      'Research education',
      'Professional courses',
      'Academic facilities'
    ]
  },

  {
    id: 'telangana-university',
    name: 'Telangana University',
    shortName: 'TU',
    city: 'Nizamabad',
    state: 'Telangana',
    type: 'University',
    established: 2006,
    icon: '🎓',
    description: 'A public university offering programs across sciences, arts, commerce and professional disciplines.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Research opportunities',
      'Postgraduate programs',
      'Academic facilities'
    ]
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
    description: 'A public university providing undergraduate, postgraduate and research education.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Research programs',
      'Professional education',
      'Academic facilities'
    ]
  },

  {
    id: 'mgu-telangana',
    name: 'Mahatma Gandhi University Telangana',
    shortName: 'MGU',
    city: 'Nalgonda',
    state: 'Telangana',
    type: 'University',
    established: 2007,
    icon: '🎓',
    description: 'A public university offering multidisciplinary higher education programs.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary programs',
      'Research opportunities',
      'Professional education',
      'Academic facilities'
    ]
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
    description: 'A public university providing undergraduate, postgraduate and research education.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary programs',
      'Research education',
      'Professional courses',
      'Academic facilities'
    ]
  },

  {
    id: 'eflu',
    name: 'The English and Foreign Languages University',
    shortName: 'EFLU',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'University',
    established: 1958,
    icon: '📚',
    description: 'A central university specializing in English and foreign language education and research.',
    courses: ['BA', 'MA', 'M.Phil', 'Ph.D.'],
    highlights: [
      'Language education',
      'Central university',
      'Research programs',
      'International languages'
    ]
  },

  {
    id: 'nalsar',
    name: 'NALSAR University of Law',
    shortName: 'NALSAR',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Law',
    established: 1998,
    icon: '⚖️',
    description: 'A national law university offering legal education and research programs.',
    courses: ['BA LLB', 'LLM', 'Ph.D.'],
    highlights: [
      'National law university',
      'Legal education',
      'Research programs',
      'Law-focused campus'
    ]
  },

  {
    id: 'niper-hyderabad',
    name: 'National Institute of Pharmaceutical Education and Research Hyderabad',
    shortName: 'NIPER Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Research',
    established: 2007,
    icon: '🔬',
    description: 'A national institute focused on pharmaceutical education and research.',
    courses: ['MS', 'M.Pharm', 'Ph.D.'],
    highlights: [
      'Pharmaceutical research',
      'Advanced laboratories',
      'Postgraduate education',
      'Research programs'
    ]
  },

  {
    id: 'aiims-bibinagar',
    name: 'All India Institute of Medical Sciences Bibinagar',
    shortName: 'AIIMS Bibinagar',
    city: 'Bibinagar',
    state: 'Telangana',
    type: 'Medical',
    established: 2019,
    icon: '🩺',
    description: 'A medical education and research institution providing healthcare education and related programs.',
    courses: ['MBBS', 'MD', 'MS', 'Ph.D.'],
    highlights: [
      'Medical education',
      'Healthcare facilities',
      'Clinical training',
      'Research opportunities'
    ]
  },

  {
    id: 'cbit',
    name: 'Chaitanya Bharathi Institute of Technology',
    shortName: 'CBIT',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Private',
    established: 1979,
    icon: '🏫',
    description: 'An engineering institution offering undergraduate and postgraduate programs.',
    courses: ['B.E.', 'M.E.', 'MBA', 'MCA'],
    highlights: [
      'Engineering education',
      'Technical programs',
      'Industry interaction',
      'Research activities'
    ]
  },

  {
    id: 'vasavi-college',
    name: 'Vasavi College of Engineering',
    shortName: 'VCE',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Private',
    established: 1981,
    icon: '🏫',
    description: 'An autonomous engineering college offering undergraduate and postgraduate technical programs.',
    courses: ['B.E.', 'M.E.', 'MBA'],
    highlights: [
      'Autonomous institution',
      'Engineering programs',
      'Technical education',
      'Campus facilities'
    ]
  },

  {
    id: 'vnrvjiet',
    name: 'VNR Vignana Jyothi Institute of Engineering and Technology',
    shortName: 'VNR VJIET',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Private',
    established: 1995,
    icon: '🏫',
    description: 'An engineering institution offering undergraduate and postgraduate programs in technology.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA'],
    highlights: [
      'Engineering education',
      'Technology programs',
      'Industry interaction',
      'Research activities'
    ]
  },

  {
    id: 'cvr-college',
    name: 'CVR College of Engineering',
    shortName: 'CVR',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Private',
    established: 2001,
    icon: '🏫',
    description: 'An engineering college offering undergraduate and postgraduate technical programs.',
    courses: ['B.Tech', 'M.Tech', 'MBA'],
    highlights: [
      'Engineering programs',
      'Technical education',
      'Laboratories',
      'Industry exposure'
    ]
  },

  {
    id: 'mallareddy-engineering',
    name: 'Malla Reddy Engineering College',
    shortName: 'MREC',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Private',
    established: 2002,
    icon: '🏫',
    description: 'An engineering institution offering undergraduate and postgraduate technical programs.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA'],
    highlights: [
      'Engineering programs',
      'Technical education',
      'Campus facilities',
      'Professional programs'
    ]
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
    description: 'A private university offering programs in engineering, pharmacy, management and sciences.',
    courses: ['B.Tech', 'B.Pharm', 'MBA', 'M.Tech', 'Ph.D.'],
    highlights: [
      'Multidisciplinary programs',
      'Engineering education',
      'Professional courses',
      'Research opportunities'
    ]
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
    description: 'A private multidisciplinary university offering programs across technology, management, design and sciences.',
    courses: ['B.Tech', 'BBA', 'B.Des', 'MBA', 'M.Des'],
    highlights: [
      'Multidisciplinary education',
      'Design programs',
      'Management education',
      'Technology programs'
    ]
  },

  {
    id: 'gitam-hyderabad',
    name: 'GITAM Hyderabad',
    shortName: 'GITAM Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Deemed University',
    established: 2009,
    icon: '🎓',
    description: 'A multidisciplinary campus offering programs in engineering, sciences, management and humanities.',
    courses: ['B.Tech', 'BBA', 'B.Sc', 'MBA', 'M.Tech'],
    highlights: [
      'Multidisciplinary programs',
      'Engineering education',
      'Modern facilities',
      'Research opportunities'
    ]
  },


  /* =====================================================
     TAMIL NADU
     ===================================================== */

  {
    id: 'iit-madras',
    name: 'Indian Institute of Technology Madras',
    shortName: 'IIT Madras',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'IIT',
    established: 1959,
    icon: '🎓',
    description: 'A higher education and research institution offering programs in engineering, science, humanities and management.',
    courses: ['B.Tech', 'Dual Degree', 'M.Tech', 'M.Sc', 'MBA', 'Ph.D.'],
    highlights: [
      'Institute of National Importance',
      'Engineering and science education',
      'Research and innovation',
      'Interdisciplinary programs'
    ]
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
    description: 'A technical institution offering undergraduate, postgraduate and doctoral programs.',
    courses: ['B.Tech', 'M.Tech', 'M.Sc', 'MBA', 'Ph.D.'],
    highlights: [
      'National Institute of Technology',
      'Engineering education',
      'Research programs',
      'Large campus'
    ]
  },

  {
    id: 'iiitdm-kancheepuram',
    name: 'Indian Institute of Information Technology Design and Manufacturing Kancheepuram',
    shortName: 'IIITDM Kancheepuram',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'IIIT',
    established: 2007,
    icon: '💻',
    description: 'An institute specializing in information technology, design and manufacturing education.',
    courses: ['B.Tech', 'M.Tech', 'Ph.D.'],
    highlights: [
      'Technology education',
      'Design and manufacturing',
      'Research programs',
      'Engineering programs'
    ]
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
    description: 'A public technical university offering programs in engineering, technology, sciences and management.',
    courses: ['B.E.', 'B.Tech', 'M.E.', 'M.Tech', 'MBA', 'Ph.D.'],
    highlights: [
      'Technical university',
      'Engineering programs',
      'Research opportunities',
      'Large academic ecosystem'
    ]
  },

  {
    id: 'university-of-madras',
    name: 'University of Madras',
    shortName: 'UNOM',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'University',
    established: 1857,
    icon: '🎓',
    description: 'A historic public university offering multidisciplinary higher education and research programs.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Historic university',
      'Multidisciplinary programs',
      'Research education',
      'Postgraduate programs'
    ]
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
    description: 'A public university offering programs across sciences, arts, commerce and management.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Research programs',
      'Professional courses',
      'Academic facilities'
    ]
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
    description: 'A public university offering undergraduate, postgraduate and doctoral programs.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary programs',
      'Research opportunities',
      'Postgraduate education',
      'Academic facilities'
    ]
  },

  {
    id: 'madurai-kamaraj-university',
    name: 'Madurai Kamaraj University',
    shortName: 'MKU',
    city: 'Madurai',
    state: 'Tamil Nadu',
    type: 'University',
    established: 1966,
    icon: '🎓',
    description: 'A public university offering multidisciplinary education and research programs.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Research programs',
      'Postgraduate education',
      'Academic facilities'
    ]
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
    description: 'A public university offering programs across sciences, management, education and humanities.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary programs',
      'Distance education',
      'Research opportunities',
      'Professional programs'
    ]
  },

  {
    id: 'periyar-university',
    name: 'Periyar University',
    shortName: 'PU',
    city: 'Salem',
    state: 'Tamil Nadu',
    type: 'University',
    established: 1997,
    icon: '🎓',
    description: 'A public university offering multidisciplinary undergraduate, postgraduate and research education.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Research programs',
      'Professional courses',
      'Academic facilities'
    ]
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
    description: 'A large multidisciplinary university offering programs across sciences, arts, engineering and professional disciplines.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Large academic ecosystem',
      'Research programs',
      'Professional education'
    ]
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
    description: 'A university specializing in agricultural education, research and related sciences.',
    courses: ['B.Sc Agriculture', 'B.Tech', 'M.Sc', 'M.Tech', 'Ph.D.'],
    highlights: [
      'Agricultural education',
      'Research programs',
      'Agricultural sciences',
      'Field-based learning'
    ]
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
    description: 'A university specializing in veterinary, animal and related sciences education and research.',
    courses: ['B.V.Sc', 'M.V.Sc', 'Ph.D.'],
    highlights: [
      'Veterinary education',
      'Animal sciences',
      'Research programs',
      'Clinical training'
    ]
  },

  {
    id: 'tn-mgr-medical-university',
    name: 'The Tamil Nadu Dr. M.G.R. Medical University',
    shortName: 'TNMGRMU',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Medical',
    established: 1987,
    icon: '🩺',
    description: 'A medical university coordinating education and academic programs across health sciences.',
    courses: ['MBBS', 'BDS', 'B.Pharm', 'Nursing', 'MD', 'MS'],
    highlights: [
      'Medical education',
      'Health sciences',
      'Professional programs',
      'Research opportunities'
    ]
  },

  {
    id: 'vit-vellore',
    name: 'Vellore Institute of Technology',
    shortName: 'VIT Vellore',
    city: 'Vellore',
    state: 'Tamil Nadu',
    type: 'Deemed University',
    established: 1984,
    icon: '🎓',
    description: 'A private deemed university offering programs in engineering, technology, sciences and management.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Engineering education',
      'Technology programs',
      'Research facilities',
      'Industry exposure'
    ]
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
    description: 'A multidisciplinary deemed university offering programs in engineering, medicine, management, sciences and humanities.',
    courses: ['B.Tech', 'MBBS', 'BBA', 'MBA', 'M.Tech'],
    highlights: [
      'Multidisciplinary education',
      'Engineering programs',
      'Medical education',
      'Research opportunities'
    ]
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
    description: 'A deemed university offering programs in engineering, sciences, management and other disciplines.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'B.Sc', 'Ph.D.'],
    highlights: [
      'Engineering programs',
      'Technology education',
      'Research opportunities',
      'Modern campus'
    ]
  },

  {
    id: 'ssn-college',
    name: 'Sri Sivasubramaniya Nadar College of Engineering',
    shortName: 'SSN',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Private',
    established: 1996,
    icon: '🏫',
    description: 'An engineering institution offering undergraduate and postgraduate technical programs.',
    courses: ['B.E.', 'M.E.', 'MBA', 'MCA'],
    highlights: [
      'Engineering education',
      'Technical programs',
      'Research activities',
      'Industry interaction'
    ]
  },

  {
    id: 'psg-tech',
    name: 'PSG College of Technology',
    shortName: 'PSG Tech',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    type: 'Private',
    established: 1951,
    icon: '🏫',
    description: 'An autonomous engineering institution offering undergraduate and postgraduate technical education.',
    courses: ['B.E.', 'B.Tech', 'M.E.', 'M.Tech', 'MBA'],
    highlights: [
      'Autonomous institution',
      'Engineering programs',
      'Technical education',
      'Industry interaction'
    ]
  },

  {
    id: 'cit-coimbatore',
    name: 'Coimbatore Institute of Technology',
    shortName: 'CIT',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    type: 'Private',
    established: 1956,
    icon: '🏫',
    description: 'An autonomous engineering institution offering undergraduate and postgraduate technical programs.',
    courses: ['B.E.', 'M.E.', 'M.Sc', 'Ph.D.'],
    highlights: [
      'Engineering education',
      'Autonomous institution',
      'Research activities',
      'Technical programs'
    ]
  },

  {
    id: 'loyola-college',
    name: 'Loyola College',
    shortName: 'Loyola',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Private',
    established: 1925,
    icon: '🏫',
    description: 'An autonomous college offering undergraduate and postgraduate education in arts, sciences and commerce.',
    courses: ['BA', 'B.Com', 'B.Sc', 'MA', 'M.Com'],
    highlights: [
      'Arts and science education',
      'Commerce programs',
      'Autonomous institution',
      'Academic facilities'
    ]
  },

  {
    id: 'madras-christian-college',
    name: 'Madras Christian College',
    shortName: 'MCC',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Private',
    established: 1837,
    icon: '🏫',
    description: 'A historic autonomous institution offering undergraduate and postgraduate programs across disciplines.',
    courses: ['BA', 'B.Com', 'B.Sc', 'MA', 'M.Sc'],
    highlights: [
      'Historic institution',
      'Arts and science education',
      'Research opportunities',
      'Large campus'
    ]
  },

  {
    id: 'stella-maris',
    name: 'Stella Maris College',
    shortName: 'Stella Maris',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Private',
    established: 1947,
    icon: '🏫',
    description: 'An autonomous college offering undergraduate and postgraduate programs in arts, sciences and commerce.',
    courses: ['BA', 'B.Com', 'B.Sc', 'MA', 'M.Com'],
    highlights: [
      'Arts and science education',
      'Autonomous institution',
      'Academic programs',
      'Campus facilities'
    ]
  },


  /* =====================================================
     KARNATAKA
     ===================================================== */

  {
    id: 'iisc-bangalore',
    name: 'Indian Institute of Science',
    shortName: 'IISc Bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Research',
    established: 1909,
    icon: '🔬',
    description: 'A research-intensive institution focused on advanced education and research in science and engineering.',
    courses: ['B.Sc. Research', 'M.Tech', 'M.Des', 'M.Mgt', 'Ph.D.'],
    highlights: [
      'Research-intensive institution',
      'Science and engineering',
      'Advanced research facilities',
      'Interdisciplinary research'
    ]
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
    description: 'An Institute of National Importance offering education and research in engineering and sciences.',
    courses: ['B.Tech', 'M.Tech', 'M.Sc', 'Ph.D.'],
    highlights: [
      'Institute of National Importance',
      'Engineering programs',
      'Science education',
      'Research opportunities'
    ]
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
    description: 'A technical institution offering undergraduate, postgraduate and doctoral programs in engineering and sciences.',
    courses: ['B.Tech', 'M.Tech', 'M.Sc', 'MBA', 'Ph.D.'],
    highlights: [
      'National Institute of Technology',
      'Engineering programs',
      'Research facilities',
      'Residential campus'
    ]
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
    description: 'A technology-focused institute specializing in information technology and related research.',
    courses: ['Integrated M.Tech', 'M.Tech', 'MS', 'Ph.D.'],
    highlights: [
      'Technology-focused education',
      'Computing programs',
      'Research-oriented environment',
      'Industry interaction'
    ]
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
    description: 'An institute focused on information technology, computing and engineering education.',
    courses: ['B.Tech', 'M.Tech', 'Ph.D.'],
    highlights: [
      'Information technology',
      'Computing education',
      'Engineering programs',
      'Research opportunities'
    ]
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
    description: 'A management education and research institution offering postgraduate, doctoral and executive programs.',
    courses: ['MBA', 'PGP', 'Executive Programs', 'Ph.D.'],
    highlights: [
      'Management education',
      'Research programs',
      'Executive education',
      'Business studies'
    ]
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
    description: 'A national law university offering undergraduate, postgraduate and research programs in law.',
    courses: ['BA LLB', 'LLM', 'Ph.D.'],
    highlights: [
      'National law university',
      'Legal education',
      'Research programs',
      'Law-focused campus'
    ]
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
    description: 'A public university offering multidisciplinary undergraduate, postgraduate and doctoral programs.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Research programs',
      'Professional courses',
      'Large academic ecosystem'
    ]
  },

  {
    id: 'vtu',
    name: 'Visvesvaraya Technological University',
    shortName: 'VTU',
    city: 'Belagavi',
    state: 'Karnataka',
    type: 'University',
    established: 1998,
    icon: '🏛️',
    description: 'A technological university responsible for technical education and affiliated institutions across Karnataka.',
    courses: ['B.E.', 'B.Tech', 'M.E.', 'M.Tech', 'Ph.D.'],
    highlights: [
      'Technical university',
      'Engineering education',
      'Large affiliated network',
      'Research programs'
    ]
  },

  {
    id: 'university-of-mysore',
    name: 'University of Mysore',
    shortName: 'UoM',
    city: 'Mysuru',
    state: 'Karnataka',
    type: 'University',
    established: 1916,
    icon: '🎓',
    description: 'A public university offering multidisciplinary undergraduate, postgraduate and research education.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Historic university',
      'Multidisciplinary education',
      'Research programs',
      'Academic facilities'
    ]
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
    description: 'A public university offering programs across sciences, arts, commerce and professional disciplines.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary programs',
      'Research education',
      'Professional courses',
      'Academic facilities'
    ]
  },

  {
    id: 'karnatak-university',
    name: 'Karnatak University',
    shortName: 'KUD',
    city: 'Dharwad',
    state: 'Karnataka',
    type: 'University',
    established: 1949,
    icon: '🎓',
    description: 'A public university offering multidisciplinary higher education and research programs.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Research programs',
      'Postgraduate education',
      'Academic facilities'
    ]
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
    description: 'A public university offering programs across sciences, humanities, commerce and professional areas.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Research programs',
      'Professional courses',
      'Academic facilities'
    ]
  },

  {
    id: 'gulbarga-university',
    name: 'Gulbarga University',
    shortName: 'GU',
    city: 'Kalaburagi',
    state: 'Karnataka',
    type: 'University',
    established: 1980,
    icon: '🎓',
    description: 'A public university offering multidisciplinary undergraduate, postgraduate and doctoral programs.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary education',
      'Research opportunities',
      'Professional programs',
      'Academic facilities'
    ]
  },

  {
    id: 'tumkur-university',
    name: 'Tumkur University',
    shortName: 'Tumkur University',
    city: 'Tumakuru',
    state: 'Karnataka',
    type: 'University',
    established: 2004,
    icon: '🎓',
    description: 'A public university offering undergraduate, postgraduate and research programs.',
    courses: ['UG Programs', 'PG Programs', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Multidisciplinary programs',
      'Research education',
      'Professional courses',
      'Academic facilities'
    ]
  },

  {
    id: 'christ-university',
    name: 'Christ University',
    shortName: 'CHRIST',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Deemed University',
    established: 2008,
    icon: '🎓',
    description: 'A multidisciplinary deemed university offering programs in management, engineering, sciences, humanities and commerce.',
    courses: ['B.Tech', 'BBA', 'B.Com', 'MBA', 'MCA'],
    highlights: [
      'Multidisciplinary programs',
      'Management education',
      'Engineering programs',
      'Research opportunities'
    ]
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
    description: 'A multidisciplinary institution offering programs across medicine, engineering, management, sciences and humanities.',
    courses: ['B.Tech', 'MBBS', 'BBA', 'MBA', 'M.Tech'],
    highlights: [
      'Multidisciplinary education',
      'Medical programs',
      'Engineering education',
      'Research facilities'
    ]
  },

  {
    id: 'rv-college-engineering',
    name: 'R.V. College of Engineering',
    shortName: 'RVCE',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Private',
    established: 1963,
    icon: '🏫',
    description: 'An autonomous engineering institution offering undergraduate and postgraduate technical programs.',
    courses: ['B.E.', 'M.Tech', 'MCA', 'Ph.D.'],
    highlights: [
      'Engineering education',
      'Autonomous institution',
      'Technical programs',
      'Research activities'
    ]
  },

  {
    id: 'bms-college-engineering',
    name: 'BMS College of Engineering',
    shortName: 'BMSCE',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Private',
    established: 1946,
    icon: '🏫',
    description: 'An autonomous engineering college offering undergraduate, postgraduate and research programs.',
    courses: ['B.E.', 'M.Tech', 'MBA', 'MCA'],
    highlights: [
      'Engineering education',
      'Autonomous institution',
      'Technical programs',
      'Research opportunities'
    ]
  },

  {
    id: 'msrit',
    name: 'M.S. Ramaiah Institute of Technology',
    shortName: 'MSRIT',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Private',
    established: 1962,
    icon: '🏫',
    description: 'An autonomous engineering institution offering undergraduate and postgraduate programs.',
    courses: ['B.E.', 'M.Tech', 'MBA', 'MCA'],
    highlights: [
      'Engineering programs',
      'Autonomous education',
      'Technical facilities',
      'Research activities'
    ]
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
    description: 'A private university offering programs in engineering, management, sciences and related fields.',
    courses: ['B.Tech', 'BBA', 'MBA', 'M.Tech', 'MCA'],
    highlights: [
      'Engineering education',
      'Technology programs',
      'Management education',
      'Research opportunities'
    ]
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
    description: 'A private multidisciplinary university offering programs across technology, management, design and humanities.',
    courses: ['B.Tech', 'BBA', 'B.Des', 'MBA', 'M.Des'],
    highlights: [
      'Multidisciplinary education',
      'Technology programs',
      'Design education',
      'Modern academic environment'
    ]
  },

  {
    id: 'jss-science-technology',
    name: 'JSS Science and Technology University',
    shortName: 'JSS STU',
    city: 'Mysuru',
    state: 'Karnataka',
    type: 'Private',
    established: 2016,
    icon: '🎓',
    description: 'A private university offering programs in engineering, technology, sciences and management.',
    courses: ['B.E.', 'M.Tech', 'MBA', 'MCA', 'Ph.D.'],
    highlights: [
      'Engineering education',
      'Technology programs',
      'Research opportunities',
      'Professional education'
    ]
  },

  {
    id: 'nitte-university',
    name: 'Nitte University',
    shortName: 'NITTE',
    city: 'Mangaluru',
    state: 'Karnataka',
    type: 'Deemed University',
    established: 2008,
    icon: '🎓',
    description: 'A multidisciplinary deemed university offering programs in medicine, engineering, management and sciences.',
    courses: ['B.Tech', 'MBBS', 'BDS', 'MBA', 'M.Tech'],
    highlights: [
      'Multidisciplinary education',
      'Medical programs',
      'Engineering programs',
      'Research facilities'
    ]
  },

  {
    id: 'nmamit',
    name: 'N.M.A.M. Institute of Technology',
    shortName: 'NMAMIT',
    city: 'Nitte',
    state: 'Karnataka',
    type: 'Private',
    established: 1986,
    icon: '🏫',
    description: 'An autonomous engineering institution offering undergraduate and postgraduate technical programs.',
    courses: ['B.Tech', 'M.Tech', 'MBA', 'MCA'],
    highlights: [
      'Engineering education',
      'Autonomous institution',
      'Technical programs',
      'Research opportunities'
    ]
  },

  {
    id: 'jain-university',
    name: 'JAIN University',
    shortName: 'JAIN',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Deemed University',
    established: 1990,
    icon: '🎓',
    description: 'A multidisciplinary deemed university offering programs in management, engineering, sciences, commerce and humanities.',
    courses: ['B.Tech', 'BBA', 'B.Com', 'MBA', 'MCA'],
    highlights: [
      'Multidisciplinary programs',
      'Management education',
      'Engineering programs',
      'Professional education'
    ]
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
    description: 'A private multidisciplinary university offering programs in engineering, management, sciences and design.',
    courses: ['B.Tech', 'BBA', 'B.Des', 'MBA', 'M.Tech'],
    highlights: [
      'Multidisciplinary education',
      'Engineering programs',
      'Management education',
      'Modern campus'
    ]
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
    description: 'A private university offering programs in engineering, health sciences, management and other disciplines.',
    courses: ['B.Tech', 'B.Pharm', 'BBA', 'MBA', 'M.Tech'],
    highlights: [
      'Engineering education',
      'Health sciences',
      'Management programs',
      'Research opportunities'
    ]
  }

];