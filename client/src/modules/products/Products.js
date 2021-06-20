import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

// import useFetch from '../../hooks/useFetch';
import Card from '../../components/card/Card';
// import Loader from '../../components/loader/Loader';
import { productData } from '../../data/productData';

const Products = () => {
  // const url = process.env.REACT_APP_SERVER_REST_URL;
  //   const { error, loading, data } = useFetch(url);

  console.log('hello', { productData });

  return (
    <SimpleGrid columns={[1, 2, 3, 3, 4]} gap={8}>
      {productData?.map((product) => (
        <Card
          key={product.id}
          name={product?.name}
          price={product?.price}
          specialPrice={product?.specialPrice}
          rating={product?.rating}
          productImg={product?.imgUrl}
          type={product?.type}
          productId={product?.id}
        />
      ))}
    </SimpleGrid>
  );
};

export default Products;
