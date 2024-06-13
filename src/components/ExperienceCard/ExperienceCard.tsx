import { ExperienceTypes } from '@/constants';
import { Flex, Heading, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { FC } from 'react';

const ExperienceCard: FC<ExperienceTypes> = ({ title, company, contract, startDate, endDate, description }) => (
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

export default ExperienceCard;
