import { SocialIconTypes } from '@/constants';
import { Flex, Link } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { FC } from 'react';

const SocialIcon: FC<SocialIconTypes> = ({ to, icon }) => (
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

export default SocialIcon;
