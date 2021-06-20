import React, { useContext } from 'react';
import { Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiShoppingCart2Line } from 'react-icons/ri';

import { ROUTES } from '../../common/constant';
import './DesktopNav.css';
import { AppContext } from '../../AppContext';

const DesktopNav = () => {
  const { state } = useContext(AppContext);

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
            <Text className='cart-icon'>{state?.totalItem || 0}</Text>
          </Box>
        </Link>
        {/* </ul> */}
      </nav>
    </div>
  );
};

export default DesktopNav;
