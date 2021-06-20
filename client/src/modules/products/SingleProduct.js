import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Image, Text, Badge, Button } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import useFetch from '../../hooks/useFetch';
import { API } from '../../common/constant';
import Loader from '../../components/loader/Loader';

const SingleProduct = () => {
  const { productId } = useParams();
  const { error, loading, data } = useFetch(`${API}/products/${productId}`);

  if (error) <h1>{error}</h1>;
  if (loading) <Loader />;

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
            <Button bg='#FF9F00' color='white' _hover='false'>
              Add To Cart
            </Button>
            <Button bg='#FB641B' color='white' _hover='false'>
              Add To Cart
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
                <AiFillStar color='green' />
              ))}
          </Box>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {data?.payload?.rating} rating
          </Badge>
          <Box>
            <Text fontSize='xl'>Available offers </Text>
            <Text>
              Special PriceGet extra 5% off (price inclusive of discount)T&C
            </Text>
            <Text>
              Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
              CardT&C
            </Text>
            <Text>
              Bank OfferFlat ₹100 off on first Flipkart Pay Later order of ₹500
              and aboveT&C
            </Text>
            <Text>No Cost EMI on Flipkart Axis Bank Credit CardT&C</Text>
          </Box>
          <Text>Size</Text>
          <Box d='flex' alignItems='baseline'>
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
            <Text ml='8'>{data?.payload?.reversible ? 'YES' : 'NO'}</Text>
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
