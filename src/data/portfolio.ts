export type ExperienceType = {
  title: string
  company: {
    name: string
    url: string
  }
  contract: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  skills: string[]
}

export type EducationType = {
  degree: string
  school: {
    name: string
    url: string
  }
  fieldOfStudy?: string
  startDate: string
  endDate: string
  description?: string
}

export type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

export const personalInfo = {
  name: 'Raul Victor Rosa',
  title: 'React Developer',
  email: 'raulvictorrosa@gmail.com',
  location: 'Brazil',
  avatar: 'https://github.com/raulvictorrosa.png',
  bio: "Hi! I'm Raul Victor Rosa, a passionate React Developer with over 8 years of experience building modern web applications. I started my career in 2015 and have since worked with various technologies in the React ecosystem. I'm highly adaptable, always eager to learn new technologies, and comfortable working both independently and in collaborative team environments.",
  social: {
    linkedin: 'https://www.linkedin.com/in/raulvictorrosa',
    github: 'https://github.com/raulvictorrosa',
    twitter: 'https://twitter.com/rauulrosa',
  },
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Most Confident With',
    description: 'Technologies I use daily and have deep expertise in',
    skills: [
      'JavaScript/TypeScript',
      'React',
      'Next.js',
      'TanStack Router',
      'CSS/SCSS',
      'Tailwind CSS',
      'Styled Components',
      'Emotion',
      'Chakra UI',
      'Shadcn UI',
      'Material UI',
      'Figma',
      'ESLint',
      'Prettier',
      'Biome',
      'WSL',
    ],
  },
  {
    title: 'Good Knowledge',
    description: 'Technologies I work with regularly',
    skills: [
      'Cypress',
      'Testing Library',
      'Redux',
      'Zustand',
      'React Native',
      'Expo',
      'Node.js',
      'Docker',
      'Git/GitHub',
      'GitLab',
      'Vite',
      'Webpack',
    ],
  },
  {
    title: 'Familiar With',
    description: 'Technologies I can work with given some guidance',
    skills: ['MongoDB', 'MySQL', 'SQL Server', 'PostgreSQL', 'GraphQL', 'REST APIs'],
  },
]

export const experiences: ExperienceType[] = [
  {
    title: 'React Developer',
    company: {
      name: 'Foton Tech',
      url: 'https://www.linkedin.com/company/foton-tech',
    },
    contract: 'Full-time',
    location: 'Remote',
    startDate: 'Jun 2021',
    endDate: 'Present',
    description: [
      'Developed and maintained complex React and Next.js applications for various clients',
      'Built responsive landing pages integrated with Strapi CMS for content management',
      'Transformed Figma designs into pixel-perfect, accessible components',
      'Integrated Web3 libraries for cryptocurrency transaction functionality',
      'Collaborated with cross-functional teams to deliver high-quality products',
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Strapi CMS', 'Figma', 'Web3', 'Tailwind CSS'],
  },
  {
    title: 'Full-stack Developer',
    company: {
      name: 'Buddemeyer',
      url: 'https://www.linkedin.com/company/buddemeyer-s-a-/',
    },
    contract: 'Full-time',
    location: 'Blumenau, Brazil',
    startDate: 'Dec 2017',
    endDate: 'May 2021',
    description: [
      'Enhanced and maintained legacy systems built with PHP, JavaScript, MySQL, and SQL Server',
      'Developed automated reports and scheduled tasks to optimize business processes',
      'Implemented Docker for consistent development environments across the team',
      'Built a modern React-based system for product inventory management',
      'Improved system performance and user experience through refactoring',
    ],
    skills: ['React', 'PHP', 'JavaScript', 'MySQL', 'SQL Server', 'Docker'],
  },
  {
    title: 'Front-end Developer',
    company: {
      name: 'Mutech Web Solutions',
      url: 'https://www.linkedin.com/company/mutechbr',
    },
    contract: 'Full-time',
    location: 'Balneário Camboriú, Brazil',
    startDate: 'Mar 2017',
    endDate: 'Mar 2018',
    description: [
      'Developed institutional websites, landing pages, and product catalogs using WordPress',
      'Automated theme development workflow using WordPress CLI and Grunt',
      'Created 7+ custom WordPress themes with modern front-end technologies',
      'Ensured responsive design and cross-browser compatibility',
    ],
    skills: ['WordPress', 'PHP', 'JavaScript', 'HTML/CSS', 'Grunt', 'Responsive Design'],
  },
  {
    title: 'Front-end Developer',
    company: {
      name: 'Xthor',
      url: 'https://www.linkedin.com/company/xthor/',
    },
    contract: 'Full-time',
    location: 'Blumenau, Brazil',
    startDate: 'Nov 2015',
    endDate: 'Mar 2017',
    description: [
      'Built custom WordPress themes for institutional websites and e-commerce platforms',
      'Developed 10+ WordPress themes with custom functionality and modern design',
      'Created custom Facebook pages and email templates for marketing campaigns',
      'Optimized assets using Grunt for better performance',
    ],
    skills: ['WordPress', 'PHP', 'JavaScript', 'HTML/CSS', 'Grunt', 'Email Development'],
  },
]

export const education: EducationType[] = [
  {
    degree: "Bachelor's Degree",
    school: {
      name: 'State University of Santa Catarina',
      url: 'https://www.linkedin.com/school/universidade-do-estado-de-santa-catarina',
    },
    fieldOfStudy: 'Information Systems Management',
    startDate: '2015',
    endDate: '2022',
    description:
      'Comprehensive study of information systems, software development, database management, and IT project management.',
  },
  {
    degree: 'React Developer Nanodegree',
    school: {
      name: 'Udacity Brasil',
      url: 'https://www.linkedin.com/school/udacity',
    },
    fieldOfStudy: 'React Development',
    startDate: 'Nov 2017',
    endDate: 'Mar 2018',
    description:
      'Intensive program focused on React fundamentals, Redux state management, and building production-ready applications.',
  },
  {
    degree: 'English Language Proficiency',
    school: {
      name: 'TopWay English School',
      url: 'https://www.linkedin.com/company/topway',
    },
    fieldOfStudy: 'Teaching English as a Second Language',
    startDate: '2014',
    endDate: '2017',
    description: 'Advanced English language training achieving professional proficiency.',
  },
]
