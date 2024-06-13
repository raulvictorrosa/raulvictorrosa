import { ItemTypes } from '@/constants';
import { ListItem } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as LinkScroll } from 'react-scroll';

const RenderLinkItem: FC<ItemTypes> = ({ to, title }) => (
  <ListItem color="white" cursor="pointer" letterSpacing="2px" textTransform="uppercase">
    <LinkScroll to={to} spy={true} smooth={true} duration={500}>
      {title}
    </LinkScroll>
  </ListItem>
);

export default RenderLinkItem;
