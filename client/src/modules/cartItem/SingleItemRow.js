import React from 'react';
import {
  SimpleGrid,
  Image,
  Button,
  Text,
  Flex,
  Divider,
} from '@chakra-ui/react';
import {
  RiDeleteBin5Line,
  BsFillPlusCircleFill,
  AiFillMinusCircle,
} from 'react-icons/all';

const SingleItemRow = ({ name, imgUrl, type }) => {
  return (
    <>
      <Divider />
      <SimpleGrid column={5} minChildWidth='120px' placeItems='center'>
        <Image
          src='https://rukminim1.flixcart.com/image/580/696/ke8uv0w0-0/t-shirt/z/4/h/xl-fas3orgwhtnvy-fascista-original-imafuz5wxswjr5re.jpeg?q=50'
          height='120px'
          width='120px'
          objectFit='cover'
          p='10px'
        />

        <Text fontSize='lg'>
          Solid Men Hooded Neck Dark Blue T-Shirt
          <Text opacity='0.4' fontSize='sm'>
            Hello worlds
          </Text>
        </Text>

        <Flex alignItems='center'>
          <Button colorScheme='blue' variant='outline' size='sm'>
            <BsFillPlusCircleFill size='16px' />
          </Button>
          <Text m='0px 16px' fontSize='lg'>
            3
          </Text>
          <Button colorScheme='blue' variant='outline' size='sm'>
            <AiFillMinusCircle size='16px' />
          </Button>
        </Flex>

        <Text fontSize='lg'>10000</Text>
        <RiDeleteBin5Line size='25px' cursor='pointer' />
      </SimpleGrid>
      <Divider />
    </>
  );
};

export default SingleItemRow;
