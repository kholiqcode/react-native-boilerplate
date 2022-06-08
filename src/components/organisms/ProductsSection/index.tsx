import React, { useEffect, useState } from 'react';
import { Box, ScrollView, Text } from 'native-base';
import { ProductsCard } from '../../molecules';
import { useGetProductQuery } from '../../../services/products';

type IProductsSectionProps = {
  query: string;
};

export default function ProductsSection({ query }: IProductsSectionProps) {
  const [filteredSearchQuery, setFilteredSearchQuery] = useState(query);
  const { data: dataProducts, isFetching } = useGetProductQuery(filteredSearchQuery);

  useEffect(() => {
    if (query.length === 0 || query.length > 4) {
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
          {dataProducts?.products?.map((v: any) => (
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
}
