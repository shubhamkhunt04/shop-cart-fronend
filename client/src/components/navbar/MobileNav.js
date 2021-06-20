import React, { useContext, useRef } from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { RiShoppingCart2Line } from 'react-icons/ri';

import { ROUTES } from '../../common/constant';

import './MobileNav.css';
import { AppContext } from '../../AppContext';

const MobileNavbar = () => {
  const { state } = useContext(AppContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div className='mobile-nav-container'>
      <Text as='h1'>ShopCary</Text>
      <Box ref={btnRef} size='sm' onClick={onOpen}>
        <GiHamburgerMenu size='27px' cursor='pointer' />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor='#F7F7F7'>
          <DrawerCloseButton />
          <DrawerHeader bgColor='#F7F7F7' textAlign='center'>
            Rate City
          </DrawerHeader>
          <DrawerBody p='1' textAlign='center' onClick={onClose}>
            <Link to={ROUTES.CART_ITEMS} className='pointer'>
              <Box d='flex' position='relative'>
                <RiShoppingCart2Line size='30px' />
                <Text className='cart-icon'>{state?.totalItem || 0}</Text>
              </Box>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNavbar;
