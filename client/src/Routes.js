import React from 'react';
import { Divider, Box } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import MobileNav from './components/navbar/MobileNav';
import useWindowSize from './hooks/useWindowSize';
import DesktopNav from './components/navbar/DesktopNav';
import { ROUTES } from './common/constant';
import SingleProduct from './modules/products/SingleProduct';
import Products from './modules/products/Products';
import CartItems from './modules/cartItem/CartItems';

const Routes = () => {
  const { width } = useWindowSize();
  return (
    <div>
      <Router>
        {width < 1080 ? <MobileNav /> : <DesktopNav />}
        <Switch>
          <div>
            <Divider />
            {/* <Flex justify='center' align='center' my='60px'> */}
            {/* <Box d='flex' justifyContent='center' my='60px'> */}
            <Box maxW='80%' m='60px auto'>
              <Redirect from={ROUTES.MAIN} to={ROUTES.PRODUCTS} />
              <Route exact path={ROUTES.PRODUCTS} component={Products} />
              <Route
                exact
                path={ROUTES.SINGLE_PRODUCT}
                component={SingleProduct}
              />
              <Route exact path={ROUTES.CART_ITEMS} component={CartItems} />
            </Box>
            {/* </Box> */}
            {/* </Flex> */}
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
