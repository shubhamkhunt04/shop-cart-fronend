import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import useFetch from '../../hooks/useFetch';
import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';
import { API } from '../../common/constant';

const Products = () => {
  const { error, loading, data } = useFetch(`${API}/products`);

  if (error) <h1>{error}</h1>;
  if (loading) <Loader />;

  return (
    <SimpleGrid columns={[1, 2, 3, 3, 4]} gap={8}>
      {data?.payload?.map((product) => (
        <Card
          key={product._id}
          name={product?.name}
          price={product?.price}
          specialPrice={product?.specialPrice}
          rating={product?.rating}
          productImg={product?.imgUrl}
          type={product?.type}
          productId={product?._id}
        />
      ))}
    </SimpleGrid>
  );
};

export default Products;
