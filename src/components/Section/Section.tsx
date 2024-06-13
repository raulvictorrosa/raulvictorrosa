import { SectionTypes } from '@/constants';
import { Box, Divider, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { Element as ElementScroll } from 'react-scroll';

const Section: FC<SectionTypes> = ({ name, children }) => (
  <>
    <Flex as={ElementScroll} name={name} align="center" px="12" py="20" maxW="75rem" minH="100vh">
      <Box as="section">{children}</Box>
    </Flex>
    <Divider />
  </>
);

export default Section;
