import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiShoppingCart2Line } from 'react-icons/ri';

import { ROUTES } from '../../common/constant';
import './DesktopNav.css';

const DesktopNav = () => {
  return (
    <div className='container container-nav'>
      <Link to={ROUTES.PRODUCTS}>
        <Text className='nav-brand'>ShopCart</Text>
      </Link>
      {/* <Input
        placeholder='Search Products'
        size='sm'
        w='300px'
      /> */}
      <nav>
        {/* <ul className='pointer'> */}
        <Link to={ROUTES.CART_ITEMS} className='pointer'>
          <Box d='flex' position='relative'>
            <RiShoppingCart2Line size='30px' />
            <Text className='cart-icon'>5</Text>
          </Box>
        </Link>
        {/* </ul> */}
      </nav>
    </div>
  );
};

export default DesktopNav;
