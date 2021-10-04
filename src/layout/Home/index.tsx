import React from 'react';

import { Element as ElementScroll, Link as LinkScroll } from 'react-scroll';

import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';

import { Icon } from '@iconify/react';

type ItemTypes = {
  to: string;
  title: string;
};

type SectionTypes = {
  children: React.ReactNode;
  name: string;
};

type SocialIconTypes = {
  to: string;
  icon: string;
};

type ExperienceTypes = {
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

type EducationTypes = {
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

const arrayListItems: ItemTypes[] = [
  { to: 'about', title: 'About' },
  { to: 'skills', title: 'Skills' },
  { to: 'experience', title: 'Experience' },
  { to: 'education', title: 'Education' },
];

const experiences: ExperienceTypes[] = [
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

const education: EducationTypes[] = [
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

const HomeLayout = () => {
  const RenderLinkItem = ({ to, title }: ItemTypes) => (
    <ListItem color="white" cursor="pointer" letterSpacing="2px" textTransform="uppercase">
      <LinkScroll to={to} spy={true} smooth={true} duration={500}>
        {title}
      </LinkScroll>
    </ListItem>
  );

  const Section = ({ name, children }: SectionTypes) => (
    <>
      <Flex as={ElementScroll} name={name} align="center" px="12" py="20" maxW="75rem" minH="100vh">
        <Box as="section">{children}</Box>
      </Flex>
      <Divider />
    </>
  );

  const SocialIcon = ({ to, icon }: SocialIconTypes) => (
    <Flex
      as={Link}
      href={to}
      target="_blank"
      rel="noreferrer"
      align="center"
      justify="center"
      height="3.5rem"
      width="3.5rem"
      bg="#495057"
      color="#fff"
      borderRadius="100%"
      fontSize="1.5rem"
      transition="background-color 200ms"
    >
      <Icon icon={icon} />
    </Flex>
  );

  const ExperienceCard = ({ title, company, contract, startDate, endDate, description }: ExperienceTypes) => (
    <Flex>
      <Flex direction="column" grow={1}>
        <Link href={company.linkedinPage} target="_blank" rel="noreferrer">
          <Heading as="h3" fontSize="3xl" letterSpacing="tighter" mb="1" textTransform="uppercase">
            {title}
          </Heading>
          <Heading as="h4" fontSize="xl" letterSpacing="tighter" fontWeight="500" mb="4" textTransform="uppercase">
            {company.name} · {contract}
          </Heading>
        </Link>
        {description && (
          <UnorderedList>
            {description.map((item, key) => (
              <ListItem key={key}>{item}</ListItem>
            ))}
          </UnorderedList>
        )}
      </Flex>
      <Flex direction="column" shrink={0}>
        <Text color="blue.400">
          {startDate} – {endDate}
        </Text>
      </Flex>
    </Flex>
  );

  const EducationCard = ({ degree, school, fieldOfStudy, startDate, endDate, description }: EducationTypes) => (
    <Flex>
      <Flex direction="column" grow={1}>
        <Link href={school.linkedinPage} target="_blank" rel="noreferrer">
          <Heading as="h3" fontSize="3xl" letterSpacing="tighter" mb="1" textTransform="uppercase">
            {degree}
          </Heading>
          <Heading as="h4" fontSize="xl" letterSpacing="tighter" fontWeight="500" mb="4" textTransform="uppercase">
            {school.name}
            {fieldOfStudy && ` · ${fieldOfStudy}`}
          </Heading>
        </Link>
        {description && (
          <UnorderedList>
            {description.map((item, key) => (
              <ListItem key={key}>{item}</ListItem>
            ))}
          </UnorderedList>
        )}
      </Flex>
      <Flex direction="column" shrink={0}>
        <Text color="blue.400">
          {startDate} – {endDate}
        </Text>
      </Flex>
    </Flex>
  );

  return (
    <Flex>
      <Flex as="nav" bgColor="black" align="center" justify="center" w="72" h="100vh" pos="fixed">
        <VStack spacing={5} textAlign="center">
          <Avatar
            bg="transparent"
            border="0.5rem solid rgba(255, 255, 255, 0.2)"
            size="full"
            maxW="10rem"
            maxH="10rem"
            name="Raul Rosa"
            src="https://bit.ly/2WBRleu"
          />
          <UnorderedList styleType="none" spacing={2}>
            {arrayListItems.map((item, key) => (
              <RenderLinkItem key={key} to={item.to} title={item.title} />
            ))}
            {/* <ListItem color="white" cursor="pointer" letterSpacing="2px" textTransform="uppercase">
              Languages
            </ListItem> */}
          </UnorderedList>
        </VStack>
      </Flex>

      <Container maxW="" pl="72">
        <Section name="about">
          <Heading as="h1" fontSize="8xl" fontWeight="800" letterSpacing="-0.6rem" textTransform="uppercase">
            Raul{' '}
            <Box as="span" color="blue.400">
              Rosa
            </Box>
          </Heading>
          <Heading fontSize="2xl" letterSpacing="tighter" mb="10" textTransform="uppercase">
            React Developer ·{' '}
            <Link href="mailto:raulvictorrosa@gmail.com" target="_blank" color="blue.400">
              raulvictorrosa@gmail.com
            </Link>
          </Heading>
          <Text fontSize="lg" lineHeight="tall" mb="10">
            Hi! I am Raul Victor Rosa, I started my career working as Front-end Developer in 2015. Today I work mainly
            with React and its ecosystem. In my experience as a developer, I could build a lot of projects working by
            myself or within a group. I’m very flexible to learn new things, even If I have to change old habits for
            that. I am currently graduating in Information Systems by the University of the State of Santa Catarina
            (UDESC).
          </Text>
          <HStack spacing={7}>
            <SocialIcon icon="fa:linkedin" to="https://www.linkedin.com/in/raulvictorrosa" />
            <SocialIcon icon="fa:github" to="https://github.com/raulvictorrosa" />
            <SocialIcon icon="fa:twitter" to="https://twitter.com/rauulrosa" />
          </HStack>
        </Section>

        <Section name="skills">
          <Heading fontSize="6xl" letterSpacing="tighter" mb="12" textTransform="uppercase">
            Skills
          </Heading>
          <VStack align="normal" spacing={12}>
            <Flex direction="column">
              <Heading as="h3" fontSize="3xl" letterSpacing="tighter" mb="1" textTransform="uppercase">
                Most confident with:
              </Heading>
              <Heading as="h4" fontSize="xl" letterSpacing="tighter" fontWeight="500" mb="4">
                Javascript, React, TypeScript, Next.js, CSS (preferably SCSS) and most of its frameworks like Styled
                Components, Emotion, Chakra UI, Bootstrap, Material UI, design systems and prototypes with Figma,
                environment WSL for development. Like to use ESLint and Prettier in the projects I work on.
              </Heading>
            </Flex>
            <Flex direction="column">
              <Heading as="h3" fontSize="3xl" letterSpacing="tighter" mb="1" textTransform="uppercase">
                I have good knowledge on:
              </Heading>
              <Heading as="h4" fontSize="xl" letterSpacing="tighter" fontWeight="500" mb="4">
                Cypress and testing-library for tests, Redux, React Native, Expo, Node.js, development environment with
                Docker, for version control using GitHub, GitLab
              </Heading>
            </Flex>
            <Flex direction="column">
              <Heading as="h3" fontSize="3xl" letterSpacing="tighter" mb="1" textTransform="uppercase">
                I can manage with some help:
              </Heading>
              <Heading as="h4" fontSize="xl" letterSpacing="tighter" fontWeight="500" mb="4">
                MongoDB, MySQL, SQL Server
              </Heading>
            </Flex>
          </VStack>
        </Section>

        <Section name="experience">
          <Heading fontSize="6xl" letterSpacing="tighter" mb="12" textTransform="uppercase">
            Experience
          </Heading>
          <VStack align="normal" spacing={12}>
            {experiences.map((job, key) => (
              <ExperienceCard
                key={key}
                title={job.title}
                company={job.company}
                contract={job.contract}
                description={job.description}
                startDate={job.startDate}
                endDate={job.endDate}
              />
            ))}
          </VStack>
        </Section>

        <Section name="education">
          <Heading fontSize="6xl" letterSpacing="tighter" mb="12" textTransform="uppercase">
            Education
          </Heading>
          <VStack align="normal" spacing={12}>
            {education.map((study, key) => (
              <EducationCard
                key={key}
                degree={study.degree}
                school={study.school}
                fieldOfStudy={study.fieldOfStudy}
                startDate={study.startDate}
                endDate={study.endDate}
                description={study.description}
              />
            ))}
          </VStack>
        </Section>
      </Container>
    </Flex>
  );
};

export default HomeLayout;
