import React from 'react';
import { View } from 'react-native';
import { Text } from '../../components';
import { useGetUsers } from '../../services';

export default function Home(): JSX.Element {
  const { data, isLoading } = useGetUsers();
  return (
    <View>
      <Text>Home</Text>
      {!isLoading &&
        data?.users?.length > 0 &&
        data?.users?.map((v: any) => <Text key={v?.firstName}>{v.firstName}</Text>)}
    </View>
  );
}
