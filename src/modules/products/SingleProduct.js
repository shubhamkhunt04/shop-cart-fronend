import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Image, Text, Badge, Button } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import useFetch from '../../hooks/useFetch';
import { API } from '../../common/constant';
import Loader from '../../components/loader/Loader';
import { AppContext } from '../../AppContext';

const SingleProduct = () => {
  const { state, dispatch } = useContext(AppContext);

  const { productId } = useParams();
  const { error, loading, data } = useFetch(`${API}/products/${productId}`);

  if (loading) return <Loader />;
  if (error) return <h1>{error}</h1>;

  const addToCartBtnHandler = () => {
    const payload = {
      name: data?.payload?.name,
      price: data?.payload?.price,
      specialPrice: data?.payload?.specialPrice,
      rating: data?.payload?.rating,
      productImg: data?.payload?.imgUrl,
      type: data?.payload?.type,
      productId: data?.payload._id,
      quantity: data?.payload?.quantity,
    };

    // check product is already exist into cart or not
    const productAlreadyAddedIntoCart = state.cartItems.filter(
      (item) => item.productId === productId
    );

    if (!productAlreadyAddedIntoCart.length) {
      dispatch({ type: 'ADD_TO_CART', payload: payload });
      dispatch({ type: 'GET_TOTAL' });
    } else {
      dispatch({
        type: 'INCREMENT_QUANTITY',
        payload: productAlreadyAddedIntoCart[0].productId,
      });
      dispatch({ type: 'GET_TOTAL' });
    }
  };

  const discount =
    (1 - data?.payload?.specialPrice / data?.payload?.price) * 100;

  return (
    <Box maxW='80vw' mt='8'>
      <Flex>
        <Box width='40vw'>
          <Image
            src={data?.payload?.imgUrl}
            height='600px'
            width='100%'
            objectFit='cover'
          />
          <Flex justify='space-evenly' mt='4'>
            <Button
              bg='#FF9F00'
              color='white'
              _hover='false'
              onClick={addToCartBtnHandler}
            >
              Add To Cart
            </Button>
            <Button bg='#FB641B' color='white' _hover='false'>
              Buy Now
            </Button>
          </Flex>
        </Box>
        <Box width='60vw' height='80px' justify='start' pl='8'>
          <Text fontSize='2xl'>{data?.payload?.name}</Text>
          <Text fontSize='sm' color='#26A541'>
            Special Price
          </Text>
          <Text as='span'>
            <span> &#x20B9;</span>
            {data?.payload?.specialPrice}
          </Text>
          <Text
            as='span'
            color='gray.600'
            fontSize='sm'
            textDecoration='line-through'
            mx='2'
          >
            <span> &#x20B9;</span>
            {data?.payload?.price}
          </Text>
          <Text as='span' color='green.400' fontSize='sm'>
            {parseInt(discount)}% off
          </Text>

          <Box d='flex' mt='2' alignItems='center'>
            {Array(data?.payload?.rating)
              .fill('')
              .map((_, i) => (
                <AiFillStar color='green' key={i} />
              ))}
          </Box>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {data?.payload?.rating} rating
          </Badge>
          <Box mt='4'>
            <Box d='flex' alignItems='center'>
              <Image
                src='https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90'
                height='20px'
                width='20px'
                mr='2'
              />
              <Text fontSize='2xl'>Available offers </Text>
            </Box>
            <Box ml='8' lineHeight='35px'>
              <Text>
                - Special PriceGet extra 5% off (price inclusive of discount)T&C
              </Text>
              <Text>
                - Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
                CardT&C
              </Text>
              <Text>
                - Bank OfferFlat ???100 off on first Flipkart Pay Later order of
                ???500 and aboveT&C
              </Text>
              <Text>- No Cost EMI on Flipkart Axis Bank Credit CardT&C</Text>
            </Box>
          </Box>
          <Text fontSize='2xl' mt='4'>
            Size{' '}
          </Text>
          <Box d='flex' alignItems='baseline' m='6'>
            {data?.payload?.size?.map((size) => {
              return (
                <Box
                  height='40px'
                  width='40px'
                  border='1px solid'
                  d='flex'
                  justifyContent='center'
                  alignItems='center'
                  mx='4'
                  cursor='pointer'
                >
                  <Text fontSize='xl'>{size}</Text>
                </Box>
              );
            })}
          </Box>
          <Box d='flex' lineHeight='35px'>
            <Text mr='8' color='grey'>
              Pattern
            </Text>
            <Text ml='8'>{data?.payload?.pattern}</Text>
          </Box>
          <Box d='flex' lineHeight='35px'>
            <Text mr='8' color='grey'>
              Fabric
            </Text>
            <Text ml='8'>{data?.payload?.fabric}</Text>
          </Box>
          <Box d='flex' lineHeight='35px'>
            <Text mr='8' color='grey'>
              Reversible
            </Text>
            <Text ml='6'>{data?.payload?.reversible ? 'YES' : 'NO'}</Text>
          </Box>
          <Box d='flex' lineHeight='35px'>
            <Text mr='8' color='grey'>
              Ideal For
            </Text>
            <Text ml='8'>{data?.payload?.idealFor}</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
