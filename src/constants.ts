export type ItemTypes = {
  to: string;
  title: string;
};

export type SectionTypes = {
  children: React.ReactNode;
  name: string;
};

export type SocialIconTypes = {
  to: string;
  icon: string;
};

export type ExperienceTypes = {
  title: string;
  company: {
    name: string;
    linkedinPage: string;
  };
  contract: string;
  startDate: string;
  endDate: string;
  description?: string[];
};

export type EducationTypes = {
  degree: string;
  school: {
    name: string;
    linkedinPage: string;
  };
  fieldOfStudy?: string;
  startDate: string;
  endDate: string;
  description?: string[];
};

export const arrayListItems: ItemTypes[] = [
  { to: 'about', title: 'About' },
  { to: 'skills', title: 'Skills' },
  { to: 'experience', title: 'Experience' },
  { to: 'education', title: 'Education' },
];

export const experiences: ExperienceTypes[] = [
  {
    title: 'React Developer',
    company: {
      name: 'Foton Tech',
      linkedinPage: 'https://www.linkedin.com/company/foton-tech',
    },
    contract: 'Full-time',
    startDate: 'Jun 2021',
    endDate: 'Present',
    description: [
      'Mainly developing systems with React and Next.js;',
      'Developing landing pages using Next.js and Strapi CMS;',
      'Transforming Figma layouts to pages and components;',
      'Integration Crypto transactions with Web3 library;',
    ],
  },
  {
    title: 'Full-stack Developer',
    company: {
      name: 'Buddemeyer',
      linkedinPage: 'https://www.linkedin.com/company/buddemeyer-s-a-/',
    },
    contract: 'Full-time',
    startDate: 'Dec 2017',
    endDate: 'May 2021',
    description: [
      'Helping improve the internal systems developed with PHP, JS, MySQL and SQLServer;',
      'Developing reports, routines and new scheduled tasks to run with PHP;',
      'Using docker for development environment;',
      'Developed a system with React for the company control products;',
    ],
  },
  {
    title: 'Front-end Developer',
    company: {
      name: 'Mutech Web Solutions',
      linkedinPage: 'https://www.linkedin.com/company/mutechbr',
    },
    contract: 'Full-time',
    startDate: 'Mar 2017',
    endDate: 'Mar 2018',
    description: [
      'Working with the WordPress platform in the development of institutional websites, landing pages and catalogs of products;',
      'Coding websites with WordPress CLI and automated task runner like Grunt for automate the creation of new site',
      'Developed more then 7 themes as front-end with WordPress for this company;',
    ],
  },
  {
    title: 'Front-end Developer',
    company: {
      name: 'Xthor',
      linkedinPage: 'https://www.linkedin.com/company/xthor/',
    },
    contract: 'Full-time',
    startDate: 'Mar 2017',
    endDate: 'Mar 2018',
    description: [
      'Working with the WordPress platform in the development of institutional websites, landing pages and catalogs of products;',
      'Using grunt to minify js and compile scss files;',
      'Developed more then 10 themes as front-end with WordPress for this company;',
      'Developing custom pages for Facebook, creating email signatures and marketing emails;',
    ],
  },
];

export const education: EducationTypes[] = [
  {
    degree: 'Information Systems Management',
    school: {
      name: 'State University  of Santa Catarina',
      linkedinPage: 'https://www.linkedin.com/school/universidade-do-estado-de-santa-catarina',
    },
    fieldOfStudy: 'Bachelor Degree in Information Systems',
    startDate: '2015',
    endDate: '2022',
  },
  {
    degree: 'Proficiency in English language',
    school: {
      name: 'TopWay English School',
      linkedinPage: 'https://www.linkedin.com/company/topway',
    },
    fieldOfStudy: 'Teaching English as a Second Language',
    startDate: '2014',
    endDate: '2017',
  },
  {
    degree: 'Developer React',
    school: {
      name: 'Udacity Brasil',
      linkedinPage: 'https://www.linkedin.com/school/udacity',
    },
    startDate: 'Nov 2017',
    endDate: 'Mar 2018',
  },
];
