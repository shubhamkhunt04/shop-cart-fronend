import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverHeader,
  PopoverContent,
  Portal,
  PopoverBody,
} from '@chakra-ui/react';
import axios from 'axios';
import { AppContext } from '../../AppContext';
import SingleItemRow from './SingleItemRow';
import { API, ROUTES } from '../../common/constant';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const CartItems = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.cartItems]);

  const placeOrderBtnHandler = async () => {
    setIsOpen(false);
    const orderProductsId = state.cartItems.map((item) => item.productId);
    const orderData = {
      products: orderProductsId,
    };
    try {
      const res = await axios.post(`${API}/orders/createOrder`, orderData);
      const { status, message } = res?.data;
      if (status === 200) {
        toast.success('Order Created Successfully');
        dispatch({ type: 'CLEAR_CART' });
        history.push(ROUTES.PRODUCTS);
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      {state?.cartItems?.map((item) => {
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

      {state?.cartItems.length ? (
        <>
          <Box d='flex' justifyContent='flex-end' mr='8'>
            <Text fontSize='2xl'>Cart Total : {state.totalAmount} ₹</Text>
          </Box>
          <Box display='flex' justifyContent='flex-end'>
            <Popover isOpen={isOpen} w='100px'>
              <PopoverTrigger>
                <Button
                  colorScheme='teal'
                  m='4'
                  onClick={() => setIsOpen(true)}
                >
                  CHECKOUT
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>
                    Are you sure you want to place order request!
                  </PopoverHeader>
                  <PopoverBody d='flex' justifyContent='space-evenly'>
                    <Button
                      colorScheme='blue'
                      size='sm'
                      onClick={placeOrderBtnHandler}
                    >
                      Yes! place order
                    </Button>
                    <Button
                      colorScheme='blue'
                      size='sm'
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </Button>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
            <Button
              colorScheme='teal'
              m='4'
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
            >
              CLEAR CART
            </Button>
          </Box>
        </>
      ) : (
        <Box className='flex-justify-align-center' h='80vh'>
          <Text fontSize='2xl'>
            No Products found in cart Please add Products !!
          </Text>
        </Box>
      )}
    </>
  );
};

export default CartItems;
