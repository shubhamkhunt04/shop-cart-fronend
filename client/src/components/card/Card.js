import React, { useContext } from 'react';
import { Box, Text, Image, Button, Badge } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

import './Card.css';
import { ROUTES } from '../../common/constant';
import { AppContext } from '../../AppContext';

const Card = ({
  name,
  price,
  specialPrice,
  rating,
  productImg,
  type,
  productId,
  quantity,
}) => {
  const { state, dispatch } = useContext(AppContext);
  const addToCartBtnHandler = () => {
    console.log('Btn clickefd');
    const payload = {
      name,
      price,
      specialPrice,
      rating,
      productImg,
      type,
      productId,
      quantity,
    };

    // const productAlreadyAddedIntoCart = state.cartItems.filter(
    //   (item) => item._id !== productId
    // );
    // console.log({ productAlreadyAddedIntoCart });

    // if (!productAlreadyAddedIntoCart) {
    dispatch({ type: 'ADD_TO_CART', payload: payload });
    // } else {
    //   alert('Item is already added into cart');
    // }
  };

  const discount = (1 - specialPrice / price) * 100;

  return (
    <Box
      w='285px'
      minH='450px'
      borderRadius='5'
      bgColor='white'
      // position='relative'
    >
      <Link to={`${ROUTES.PRODUCTS}/${productId}`}>
        <Image src={productImg} height='340px' width='100%' objectFit='cover' />
      </Link>

      <Box p='6'>
        <Link to={`${ROUTES.PRODUCTS}/${productId}`}>
          <Box d='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {type}
            </Box>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {name}
          </Box>

          <Box>
            <Text as='span'>
              <span> &#x20B9;</span>
              {specialPrice}
            </Text>
            <Text
              as='span'
              color='gray.600'
              fontSize='sm'
              textDecoration='line-through'
              mx='2'
            >
              <span> &#x20B9;</span>
              {price}
            </Text>
            <Text as='span' color='green.400' fontSize='sm'>
              {parseInt(discount)}% off
            </Text>
          </Box>

          <Box d='flex' mt='2' alignItems='center'>
            {Array(rating)
              .fill('')
              .map((_, i) => (
                <AiFillStar color='green' key={i} />
              ))}
          </Box>
        </Link>

        <Button
          bg='#FF9F00'
          size='sm'
          _hover='false'
          mt='8px'
          onClick={addToCartBtnHandler}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
