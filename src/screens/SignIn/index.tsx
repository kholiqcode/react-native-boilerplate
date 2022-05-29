import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text} from '../../components';
import {useGetUsers} from '../../services';

export default function SignIn(): JSX.Element {
  const {data, isLoading, error} = useGetUsers();
  return (
    <View>
      <Text>SignIn</Text>
      {!isLoading &&
        data?.users?.length > 0 &&
        data?.users?.map((v: any) => (
          <Text key={v?.firstName}>{v.firstName}</Text>
        ))}
    </View>
  );
}
