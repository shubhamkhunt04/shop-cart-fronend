import React from 'react';
import { Spinner, Box } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Box className='flex-justify-align-center'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        justifyContent='center'
        marginTop='20%'
      />
    </Box>
  );
};

export default Loader;
