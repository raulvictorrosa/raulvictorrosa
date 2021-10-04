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
  description: string[];
};

const arrayListItems: ItemTypes[] = [
  { to: 'about', title: 'About' },
  { to: 'experience', title: 'Experience' },
  { to: 'education', title: 'Education' },
  { to: 'interests', title: 'Interests' },
];

const experiences: ExperienceTypes[] = [
  {
    title: 'about',
    company: {
      name: 'Foton Tech',
      linkedinPage: 'https://www.linkedin.com/company/foton-tech/mycompany/',
    },
    contract: 'Full-time',
    description: [
      'Mainly developing systems with React and Next.js;',
      'Developing landing pages using Next.js and Strapi CMS;',
      'Transforming Figma layouts to pages and components;',
      'Integration Crypto transactions with Web3 library;',
    ],
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

  const ExperienceCard = ({ title, company, contract, description }: ExperienceTypes) => (
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
        <UnorderedList>
          {description.map((item, key) => (
            <ListItem key={key}>{item}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <Flex direction="column" shrink={0}>
        <Text color="blue.400">Jun 2021 – Present</Text>
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
            <ListItem color="white" cursor="pointer" letterSpacing="2px" textTransform="uppercase">
              Languages
            </ListItem>
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
            <Link href="mailto:ralvictorrosa@gmail.com" target="_blank" color="blue.400">
              ralvictorrosa@gmail.com
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

        <Section name="experience">
          <Heading fontSize="6xl" letterSpacing="tighter" mb="12" textTransform="uppercase">
            Experience
          </Heading>
          <VStack align="flex-start" spacing={12}>
            {experiences.map((job, key) => (
              <ExperienceCard
                key={key}
                title={job.title}
                company={job.company}
                contract={job.contract}
                description={job.description}
              />
            ))}
          </VStack>
        </Section>
      </Container>
    </Flex>
  );
};

export default HomeLayout;
