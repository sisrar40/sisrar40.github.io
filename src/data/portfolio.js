export const personalInfo = {
  name: 'Shaikh Israr',
  profile: '/profile.png',
  designation: 'Full Stack',
  designationAlternateWords: [
    'Developer.',
    'Engineer.',
    'Architect.',
    'Innovator.',
    'Designer.',
  ],
  title: 'Full Stack Developer',
  tagline: 'Building high-performance, user-centric web and mobile applications.',
  location: {
    area: 'Wadala',
    city: 'Mumbai',
    pincode: '400037',
    display: 'Wadala, Mumbai 400037',
  },
  phone: '+91-9967154843',
  email: 'sisrar403@gmail.com',
  yearsExperience: '5.4',
  resumeUrl:
    'https://drive.google.com/file/d/1PF6G4LJ3Ii7wxO6XBkG6f5IJCazzmRYN/view?usp=sharing',
  social: {
    github: 'https://github.com/sisrar40',
    linkedin: 'https://linkedin.com/in/shaikh-israr-8553251b7',
    npm: 'https://www.npmjs.com/~sisrar',
  },
};

export const navigation = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  badge: 'WELCOME TO MY UNIVERSE',
  heading: {
    line1: 'Crafting',
    highlight1: 'Digital',
    highlight2: 'Masterpieces',
  },
  intro: {
    roleLabel: 'a professional',
    suffix: 'dedicated to building high-performance, user-centric web applications.',
  },
  cta: {
    collaborate: "Let's Collaborate",
    resume: 'Get Resume',
  },
  social: [
    { id: 'github', href: personalInfo.social.github, platform: 'github' },
    { id: 'linkedin', href: personalInfo.social.linkedin, platform: 'linkedin' },
    { id: 'npm', href: personalInfo.social.npm, platform: 'npm' },
  ],
};

export const heroCode = {
  filename: 'Portfolio.ts',
  lines: [
    {
      num: '01',
      parts: [
        { text: 'const', className: 'text-red-500' },
        { text: ' developer', className: 'text-white' },
        { text: ' = {', className: 'text-white' },
      ],
    },
    {
      num: '02',
      parts: [
        { text: '  name:', className: 'text-slate-200' },
        { text: " 'Shaikh Israr',", className: 'text-red-300' },
      ],
    },
    {
      num: '03',
      parts: [
        { text: '  focus:', className: 'text-slate-200' },
        { text: " 'Fullstack Developer',", className: 'text-red-300' },
      ],
    },
    {
      num: '04',
      parts: [
        { text: '  skills:', className: 'text-slate-200' },
        { text: " [ 'NodeJS', 'Go Lang', 'Python', 'React.js', 'React Native', 'Next.js', 'Vue.js', 'Capacitor.js', 'Express.js', 'Gin', 'FastAPI', 'Flask', 'Docker', 'Git', 'CI/CD', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],", className: 'text-red-300' },
      ],
    },
    {
      num: '05',
      parts: [
        { text: '  passionate:', className: 'text-slate-200' },
        { text: ' true', className: 'text-red-600' },
        { text: ',', className: 'text-white' },
      ],
    },
    {
      num: '06',
      parts: [
        { text: '  motto:', className: 'text-slate-200' },
        { text: ' "Build with Purpose"', className: 'text-red-400' },
      ],
    },
    {
      num: '07',
      parts: [{ text: '};', className: 'text-white' }],
    },
    {
      num: '08',
      parts: [
        { text: 'developer', className: 'text-red-500' },
        { text: '.', className: 'text-white' },
        { text: 'showcase', className: 'text-white' },
        { text: '();', className: 'text-white' },
      ],
    },
  ],
};

export const stats = [
  { value: '5.4+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '12+', label: 'Tech Mastered' },
];

export const about = {
  eyebrow: 'Discovery',
  titlePrefix: 'About',
  titleHighlight: 'The Architect',
  description:
    "I'm Shaikh Israr, a dedicated Full Stack Developer with 5.4+ years of experience building scalable web and mobile applications. I specialize in React, React Native, Node.js, and modern frontend practices — delivering responsive, user-centric interfaces and robust API integrations. Passionate about performance, clean architecture, and mentoring teams to ship production-ready products.",
  image: '/profile.png',
  imageAlt: 'Shaikh Israr — Full Stack Developer',
  badge: 'Built with Passion',
};

export const skills = {
  eyebrow: 'Inventory',
  titlePrefix: 'The',
  titleHighlight: 'Tech Stack',
  categoriesLabel: 'All Categories',
  categories: [
    {
      id: 'languages',
      label: 'Languages',
      items: ['JavaScript', 'Node.js', 'Swift', 'Go Lang', 'Python'],
    },
    {
      id: 'web',
      label: 'Web',
      items: [
        'React.js',
        'Next.js',
        'Redux',
        'Vue.js',
        'Django',
        'HTML5',
        'CSS3',
        'SCSS',
      ],
    },
    {
      id: 'mobile',
      label: 'Mobile',
      items: ['Android Development', 'React Native', 'Capacitor.js', 'SwiftUI'],
    },
    {
      id: 'backend',
      label: 'Backend',
      items: ['Express.js', 'Gin', 'FastAPI', 'Flask'],
    },
    {
      id: 'devops',
      label: 'DevOps & Tools',
      items: ['CI/CD', 'AWS', 'Git', 'Docker', 'Jira', 'Artifactory'],
    },
    {
      id: 'database',
      label: 'Database',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    },
  ],
};

export const skillsMarquee = skills.categories.flatMap((category) =>
  category.items.map((name) => ({
    name,
    label: category.label,
    categoryId: category.id,
  }))
);

export const experience = {
  eyebrow: 'Professional Journey',
  title: 'Experience',
  overall: '5.4 years in relevant fields',
  roles: [
    {
      id: 'ventugrow',
      company: 'Ventugrow Consultants Private Limited (Jarvis Invest)',
      title: 'Front-end Lead',
      duration: 'Dec 2024 – Present',
      location: 'Remote',
      details: [
        'Leading frontend development for scalable web and mobile applications',
        'Architecting high-performance UI using React.js, Capacitor.js, and React Native',
        'Managing state and data flow using Redux and modern frontend practices',
        'Collaborating with backend teams for seamless API integration and optimization',
        'Driving UI/UX improvements to enhance user engagement and performance',
        'Mentoring junior developers and conducting code reviews',
        'Ensuring best practices for code quality, performance, and scalability',
      ],
    },
    {
      id: 'infinx',
      company: 'Infinx Healthcare Pvt Ltd',
      title: 'Software Developer',
      duration: 'Feb 2022 – Dec 2024',
      location: null,
      details: [
        'Redesigned Android applications using new Material Design',
        'Built hybrid applications using React Native',
        'UI/UX development and optimizations',
        'API integrations and offline flow management of applications',
        'Redesigned Android and cross-platform native application interfaces utilizing modern Google Material Design patterns.',
        'Built and shipped modular hybrid applications natively using the React Native runtime engine.',
        'Optimized heavy UI rendering passes and layout structures to maintain constant 60 FPS transitions.',
        'Managed multi-tier REST API data ingestion flows and local resilient database synchronization patterns for offline-first operation.',
      ],
    },
    {
      id: 'tech-mahindra',
      company: 'Tech Mahindra Business Services Private Limited',
      title: 'Software Developer',
      duration: 'Jul 2021 – Jan 2022',
      location: null,
      details: [
        'Built hybrid applications using React Native',
        'UI/UX development and optimizations',
        'API integrations and offline flow management of applications',
        'Developed production-ready components for hybrid corporate mobile interfaces utilizing React Native.',
        'Engineered highly responsive views, minimizing structural rendering re-draw bottlenecks over dynamic endpoints.',
        'Integrated core software communication APIs and localized storage models to manage offline transactional behaviors.',
      ],
    },
    
  ],
};

export const projects = {
  eyebrow: 'Projects Showcase',
  portfolioLabel: 'Portfolio',
  titlePrefix: 'Featured',
  titleHighlight: 'Projects',
  subtitle:
    'A selection of high-impact digital solutions, built with focus on scalability, performance, and exceptional user experience.',
  initialCount: 3,
  exploreAllLabel: 'Explore Full Archive',
  showLessLabel: 'Show Less',
  viewDetailsLabel: 'Click to view details →',
  maxVisibleTags: 5,

  items: [
    {
      id: 'jarvis-invest',
      title: 'Jarvis Invest',
      type: 'Static Web',
      overview:
        'A high-performance static website built for investment platform visibility and lead generation.',
      tech: ['HTML', 'PHP', 'CSS', 'JavaScript'],
      responsibilities: [
        'Developed responsive landing pages optimized for performance and SEO',
        'Integrated lead capture APIs for seamless backend communication',
        'Implemented reusable UI sections for scalable content management',
        'Optimized website responsiveness across desktop, tablet, and mobile devices',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'sedco-capital',
      title: 'Sedco Capital – Trading Platform',
      type: 'FinTech',
      overview:
        'A stock trading and portfolio management platform with analytics and backtesting capabilities.',
      tech: ['React.js', 'Highcharts.js', 'JavaScript'],
      responsibilities: [
        'Developed stock trading workflows including Buy/Sell execution modules',
        'Built portfolio backtesting systems using historical market datasets',
        'Implemented interactive analytics dashboards using Highcharts.js',
        'Optimized large-scale data tables with filtering, sorting, and pagination',
        'Developed Excel upload and structured financial data processing workflows',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'amc-platform',
      title: 'AMC Platform',
      type: 'Asset Management',
      overview:
        'A financial platform for investment management, analytics, and reporting operations.',
      tech: ['React.js', 'Charts', 'Dashboard'],
      responsibilities: [
        'Developed scalable investment and portfolio management modules',
        'Reused and optimized application architecture for maintainability and scalability',
        'Built analytics dashboards with interactive charts and reporting systems',
        'Improved rendering performance and user experience across dashboard modules',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'customer-portal',
      title: 'Customer Portal – Web & Mobile',
      type: 'Cross-Platform',
      overview:
        'A cross-platform customer portal with onboarding, payments, and dashboard features.',
      tech: ['Capacitor.js', 'React', 'Razorpay', 'Android', 'iOS'],
      responsibilities: [
        'Developed cross-platform applications for Web, Android, and iOS using Capacitor.js',
        'Integrated Razorpay payment gateway with secure transaction workflows',
        'Implemented onboarding systems including KYC verification and payment flows',
        'Built dynamic dashboards with user insights and activity tracking',
        'Optimized application performance and responsiveness across platforms',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'accrue-users',
      title: 'Accrue (Users)',
      type: 'Next.js',
      overview:
        'A field workforce platform for onboarding, task assignment, geo-fenced attendance, and gamified incentives — powered by a Go backend and PostgreSQL.',
      tech: ['Next.js', 'React', 'Go', 'PostgreSQL', 'Push Notifications'],
      responsibilities: [
        'Developed scalable user-facing interfaces using Next.js and React',
        'Integrated Go REST APIs with optimized asynchronous state management',
        'Implemented geo-fenced attendance and task tracking workflows',
        'Built push notification systems for real-time activity updates',
        'Collaborated on PostgreSQL-backed data models for users, tasks, and rewards',
        'Optimized onboarding and checklist workflows for operational efficiency',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'accrue-admin',
      title: 'Accrue (Admin)',
      type: 'React.js Admin',
      overview:
        'Admin dashboard for team operations, rewards, surveys, and analytics — backed by Go services and PostgreSQL.',
      tech: ['React.js', 'Go', 'PostgreSQL', 'Chart.js'],
      responsibilities: [
        'Built operational dashboards with analytics and reporting capabilities',
        'Integrated Go APIs for role-based access, teams, and operational controls',
        'Implemented reward systems including credit coins and survey management',
        'Developed PostgreSQL-backed reporting and payout tracking workflows',
        'Built interactive Chart.js visualizations for business insights',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'great-conversations-mobile',
      title: 'Great Conversations',
      type: 'React Native',
      overview:
        'A mobile application focused on conversation engagement and interaction analytics.',
      tech: ['React Native'],
      responsibilities: [
        'Developed responsive mobile interfaces using React Native',
        'Integrated APIs for conversation management and activity tracking',
        'Implemented real-time push notifications for user engagement',
        'Optimized application workflows for smooth navigation and interactions',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'great-conversations-admin',
      title: 'Great Conversations Admin',
      type: 'React.js Admin',
      overview: 'Admin dashboard for conversation analytics and user management.',
      tech: ['React.js', 'JWT', 'Charts'],
      responsibilities: [
        'Built analytics dashboards for conversation tracking and reporting',
        'Implemented JWT authentication and secure admin access workflows',
        'Integrated APIs for user management and operational controls',
        'Developed interactive charts for feedback and engagement analysis',
        'Implemented push-based notification systems for user activity monitoring',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'gigbag-admin',
      title: 'Gigbag (Admin)',
      type: 'Vue.js',
      overview: 'Admin panel with payment tracking and data visualization.',
      tech: ['Vue.js', 'Chart.js', 'Excel Export'],
      responsibilities: [
        'Developed admin interfaces with scalable and modular Vue.js architecture',
        'Implemented payment history and transaction monitoring systems',
        'Built data visualization dashboards using Chart.js',
        'Developed JSON-to-Excel export workflows for reporting operations',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'paperking',
      title: 'Paperking',
      type: 'React Native',
      overview:
        'A newspaper industry digitization platform with mobile apps, admin tooling, and a Node.js + MongoDB backend for content, coupons, and notifications.',
      tech: ['React Native', 'React.js', 'Node.js', 'MongoDB'],
      responsibilities: [
        'Developed cross-platform mobile interfaces with optimized user experience',
        'Built and integrated Node.js APIs for content delivery and coupon management',
        'Designed MongoDB schemas for publications, users, and promotional campaigns',
        'Implemented push notification systems for engagement and promotional updates',
        'Built admin dashboards for operational and content management',
        'Optimized navigation and application responsiveness across devices',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'mrvvs',
      title: 'MRVVS',
      type: 'React Native',
      overview:
        'A union management system with React Native mobile apps, admin panels, and a Node.js + MySQL backend for member records and operations.',
      tech: ['React Native', 'React.js', 'Node.js', 'MySQL'],
      responsibilities: [
        'Developed mobile-first interfaces for union member operations',
        'Integrated Node.js REST APIs for member management and workflow processing',
        'Implemented MySQL-backed data storage for members, roles, and union activities',
        'Implemented streamlined onboarding and management workflows',
        'Built admin management systems for operational control and reporting',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'enalo-admin',
      title: 'Enalo (Admin)',
      type: 'React.js Admin',
      overview:
        'A comprehensive admin interface for managing payments, invoices, and subscriptions.',
      tech: ['React.js', 'Payments API'],
      responsibilities: [
        'Developed scalable admin dashboards for payment and subscription management',
        'Integrated payment APIs with secure transaction handling workflows',
        'Built invoice tracking and operational reporting systems',
        'Optimized administrative workflows for improved operational efficiency',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'enalo-users',
      title: 'Enalo (Users)',
      type: 'React.js',
      overview:
        'User platform for payment link creation, invoice management, and subscriptions.',
      tech: ['React.js', 'Push Notifications'],
      responsibilities: [
        'Developed responsive user interfaces for payment and invoice operations',
        'Integrated APIs for subscription management and payment workflows',
        'Implemented push notification systems for transaction updates',
        'Optimized onboarding and payment link generation workflows',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'just-get-it',
      title: 'Just Get It',
      type: 'Python FastAPI',
      overview:
        'An e-commerce platform connecting buyers and sellers for seamless online transactions.',
      tech: ['FastAPI', 'Python', 'E-commerce'],
      responsibilities: [
        'Developed scalable e-commerce workflows for product and order management',
        'Built backend APIs using FastAPI for transactional operations',
        'Integrated secure payment and checkout systems',
        'Implemented real-time order tracking and notification workflows',
        'Developed admin management systems for operational monitoring',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'soundbase',
      title: 'SoundBase',
      type: 'React Native',
      overview:
        'A music streaming application with playlist management and sharing features.',
      tech: ['React Native', 'Streaming API'],
      responsibilities: [
        'Developed mobile interfaces optimized for music streaming experiences',
        'Integrated streaming APIs for playlist and media management',
        'Implemented responsive playback and user interaction workflows',
        'Optimized application performance for smooth media consumption',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'accrue-static',
      title: 'Accrue (Static Web)',
      type: 'Static Web',
      overview: 'Marketing and landing experience for Accrue.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      responsibilities: [
        'Developed responsive marketing pages with modern UI components',
        'Optimized landing page performance, responsiveness, and SEO',
        'Implemented reusable frontend sections for scalable content updates',
      ],
      links: { live: null, source: null },
    },

    {
      id: 'opensource',
      title: 'GitHub Open Source Projects',
      type: 'Open Source',
      overview:
        'Open-source contributions showcasing skills across technologies and development practices.',
      tech: ['GitHub', 'Various'],
      responsibilities: [
        'Contributed to open-source repositories across frontend and backend technologies',
        'Collaborated on scalable codebases following modern development practices',
        'Maintained reusable components and feature enhancements for community-driven projects',
      ],
      links: { live: null, source: 'https://github.com' },
    },
  ],
};

export const education = {
  pillLabel: 'Academic Background',
};

export const educations = [
  {
    id: 'bsc',
    institution: 'BGPS Mumbai College, Mumbai',
    title: 'B.Sc (Computer Science)',
    duration: '2018 – 2020',
  },
  {
    id: 'hsc',
    institution: 'H.S.C (State Board), Mumbai',
    title: 'Science',
    duration: '2015 – 2017',
  },
];

export const projectsData = projects.items.map((project) => ({
  id: project.id,
  name: project.title,
  type: project.type,
  description: project.overview,
  tools: project.tech,
  responsibilities: project.responsibilities,
  demo: project.links?.live || null,
  code: project.links?.source || null,
  images: [],
  date: '',
}));

export function getProjectById(id) {
  return projectsData.find((p) => p.id === id) ?? null;
}

export const projectDetail = {
  notFound: 'Project not found.',
  backToPortfolio: 'Back to portfolio',
  responsibilitiesTitle: 'Responsibilities',
  technologiesTitle: 'Technologies',
};

export const site = {
  logoAlt: personalInfo.name,
  scrollToTopAria: 'Scroll to top',
  pageTitle: `${personalInfo.name} | ${personalInfo.title}`,
};

export const interests = {
  eyebrow: 'Beyond Code',
  title: 'Interests',
  items: ['Cricket', 'Mobile & PC Games', 'Cycling', 'Reading Tech Blogs'],
};

export const contact = {
  eyebrow: 'Communication',
  titlePrefix: "Let's",
  titleHighlight: 'Connect',
  subtitle:
    "Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.",
  direct: {
    title: 'Direct Contact',
    fields: [
      {
        label: 'Email',
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
        icon: 'email',
        color: '#ef4444',
      },
      {
        label: 'Phone',
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone.replace(/-/g, '')}`,
        icon: 'phone',
        color: '#dc2626',
      },
      {
        label: 'Location',
        value: personalInfo.location.display,
        href: null,
        icon: 'location',
        color: '#991b1b',
      },
    ],
  },
  social: {
    title: 'Social Presence',
    links: [
      { label: 'GitHub', href: personalInfo.social.github },
      { label: 'LinkedIn', href: personalInfo.social.linkedin },
      { label: 'NPM', href: personalInfo.social.npm },
    ],
  },
};

export const footer = {
  tagline:
    'Professional Full Stack Developer dedicated to crafting immersive, high-performance digital experiences with cutting-edge technology.',
  copyright: `© ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved.`,
  madeWithPrefix: 'Made with',
  madeWithSuffix: 'in Mumbai',
  navigationTitle: 'Navigation',
  connectTitle: 'Connect',
};
