import React, { useState } from 'react';
import { Box, Button, Heading, Input } from 'native-base';
import { FOProductsSection, FOUserSection } from '../../components';
import { useDebounce } from '../../hooks';

export default function Home(): JSX.Element {
  const [selectedData, setSelectedData] = useState<'users' | 'products'>('users');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  return (
    <Box flex={1} safeAreaTop>
      <Heading px={4}>Home</Heading>
      <Button.Group
        isAttached
        colorScheme="blue"
        mx={{
          base: 'auto',
          md: 0,
        }}
        mb={'4'}
        size="sm"
      >
        <Button
          variant={selectedData == 'users' ? 'solid' : 'outline'}
          onPress={() => setSelectedData('users')}
        >
          Users
        </Button>
        <Button
          variant={selectedData == 'products' ? 'solid' : 'outline'}
          onPress={() => setSelectedData('products')}
        >
          Products
        </Button>
      </Button.Group>
      {selectedData == 'products' && (
        <Input value={searchQuery} onChangeText={(e) => setSearchQuery(e)} />
      )}
      <Box flex={1}>
        {selectedData == 'users' ? (
          <FOUserSection />
        ) : (
          <FOProductsSection query={debouncedSearchQuery} />
        )}
      </Box>
    </Box>
  );
}
