import React from 'react';
import { Box, Text, Image, Button, Badge } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

import './Card.css';
import { ROUTES } from '../../common/constant';

const Card = ({
  name,
  price,
  specialPrice,
  rating,
  productImg,
  type,
  productId,
}) => {
  const addToCartBtnHandler = () => {
    console.log('Add to cart btn handler');
  };

  const discount = (1 - specialPrice / price) * 100;

  return (
    <Link to={`${ROUTES.PRODUCTS}/${productId}`}>
      <Box
        w='285px'
        minH='450px'
        borderRadius='5'
        bgColor='white'
        // position='relative'
      >
        <Image src={productImg} height='340px' width='100%' objectFit='cover' />

        <Box p='6'>
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
                <AiFillStar color='green' />
              ))}
          </Box>
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
    </Link>
  );
};

export default Card;
