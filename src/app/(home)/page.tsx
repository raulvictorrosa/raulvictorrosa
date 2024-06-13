'use client';

import EducationCard from '@/components/EducationCard';
import ExperienceCard from '@/components/ExperienceCard';
import RenderLinkItem from '@/components/RenderLinkItem';
import Section from '@/components/Section';
import SocialIcon from '@/components/SocialIcon';
import { arrayListItems, education, experiences } from '@/constants';
import { Avatar, Box, Container, Flex, Heading, HStack, Link, Text, UnorderedList, VStack } from '@chakra-ui/react';

export default function Home() {
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
            src="https://github.com/raulvictorrosa.png?size=150"
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
}
