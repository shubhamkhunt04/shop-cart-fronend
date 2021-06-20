import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Image, Text, Badge, Button } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

const SingleProduct = () => {
  const { productId } = useParams();
  console.log({ productId });

  return (
    <Box maxW='80vw' mt='8'>
      <Flex>
        <Box width='40vw'>
          <Image
            src='https://rukminim1.flixcart.com/image/580/696/kjiwfbk0-0/t-shirt/e/k/s/m-t305-as10yldnwh-seven-rocks-original-imafz2qfvx7tznnn.jpeg?q=50'
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
          <Text fontSize='2xl'>Color Block Men Round Neck Orange T-Shirt</Text>
          <Text fontSize='sm' color='#26A541'>
            Special Price
          </Text>
          <Text>
            299 <span> &#x20B9;</span> <span> &#x20B9;</span>999
            <span>78% off</span>
          </Text>

          <Box d='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <AiFillStar color='green' />
              ))}
          </Box>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            4 rating
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
            {['S', 'M', 'L', 'XL'].map((size) => {
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
            <Text ml='8'>Printed</Text>
          </Box>
          <Box d='flex' lineHeight='35px'>
            <Text mr='8' color='grey'>
              Fabric
            </Text>
            <Text ml='8'>Pure Cotton</Text>
          </Box>
          <Box d='flex' lineHeight='35px'>
            <Text mr='8' color='grey'>
              Reversible
            </Text>
            <Text ml='8'>No</Text>
          </Box>
          <Box d='flex' lineHeight='35px'>
            <Text mr='8' color='grey'>
              Ideal For
            </Text>
            <Text ml='8'>Man</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
