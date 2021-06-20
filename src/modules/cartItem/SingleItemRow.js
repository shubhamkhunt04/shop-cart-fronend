import React, { useContext } from 'react';
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
import { AppContext } from '../../AppContext';

const SingleItemRow = ({ name, imgUrl, type, productId, quantity, price }) => {
  const { dispatch } = useContext(AppContext);

  const incrementQuantity = (id) => {
    console.log('incrementQuantity', id);
    dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  };

  const decrementQuantity = (id) => {
    console.log('decrementQuantity', id);
    dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
  };

  const removeItem = (id) => {
    console.log('removeItem', id);
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    console.log('remove items');
  };

  return (
    <>
      <Divider />
      <SimpleGrid column={5} minChildWidth='120px' placeItems='center'>
        <Image
          src={imgUrl}
          height='120px'
          width='120px'
          objectFit='cover'
          p='10px'
        />

        <Text fontSize='lg'>
          {name}
          <Text opacity='0.4' fontSize='sm'>
            {type}
          </Text>
        </Text>

        <Flex alignItems='center'>
          <Button
            colorScheme='blue'
            variant='outline'
            size='sm'
            onClick={() => incrementQuantity(productId)}
          >
            <BsFillPlusCircleFill size='16px' />
          </Button>
          <Text m='0px 16px' fontSize='lg'>
            {quantity}
          </Text>
          <Button
            colorScheme='blue'
            variant='outline'
            size='sm'
            onClick={() => decrementQuantity(productId)}
          >
            <AiFillMinusCircle size='16px' />
          </Button>
        </Flex>

        <Text fontSize='lg'>{price}</Text>
        <RiDeleteBin5Line
          size='25px'
          cursor='pointer'
          onClick={() => removeItem(productId)}
        />
      </SimpleGrid>
      <Divider />
    </>
  );
};

export default SingleItemRow;
