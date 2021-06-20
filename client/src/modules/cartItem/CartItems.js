import React, { useContext, useEffect } from 'react';
import { Button, Box, Text } from '@chakra-ui/react';
import { AppContext } from '../../AppContext';
import SingleItemRow from './SingleItemRow';

const CartItems = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state]);
  return (
    <>
      {state?.cartItems?.map((item) => {
        console.log(item);
        return (
          <SingleItemRow
            key={item?.productId}
            name={item?.name}
            imgUrl={item?.productImg}
            type={item?.type}
            productId={item?.productId}
            quantity={item?.quantity}
            price={item?.specialPrice}
          />
        );
      })}
      <Box d='flex' justifyContent='flex-end' mr='8'>
        <Text fontSize='2xl'>Cart Total : {state.totalAmount} ₹</Text>
      </Box>
      <Box display='flex' justifyContent='flex-end'>
        <Button colorScheme='teal' m='4'>
          CHECKOUT
        </Button>
        <Button colorScheme='teal' m='4'>
          CLEAR CART
        </Button>
      </Box>
    </>
  );
};

export default CartItems;
