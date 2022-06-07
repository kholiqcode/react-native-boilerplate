import React, { useEffect, useState } from 'react';
import { Box, ScrollView, Text } from 'native-base';
import { ProductsCard } from '../../molecules';
import { useGetProductQuery } from '../../../redux/modules/products';

const ProductsSection = ({ query }: { query: string }) => {
  const [filteredSearchQuery, setFilteredSearchQuery] = useState(query);
  const { data: dataProducts, isFetching } = useGetProductQuery(filteredSearchQuery);

  useEffect(() => {
    if (query.length === 0 || query.length > 4) {
      console.log('THIS: ', query);
      setFilteredSearchQuery(query);
    }
  }, [query]);

  return (
    <Box flex={1} height={'100%'}>
      {isFetching ? (
        <Text justifyItems={'center'} alignSelf="center">
          Loading
        </Text>
      ) : dataProducts?.products?.length > 0 ? (
        <ScrollView flex={1} p={'4'}>
          {dataProducts?.products?.length > 0 &&
            dataProducts?.products?.map((v: any) => (
              <ProductsCard desc={v.description} name={v.title} image={v.images[0]} key={v.id} />
            ))}
        </ScrollView>
      ) : (
        <Text justifyItems={'center'} alignSelf={'center'}>
          No data
        </Text>
      )}
    </Box>
  );
};

export default ProductsSection;
