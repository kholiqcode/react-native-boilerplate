import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Platform } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<
  ReactNavigation.SignInStackParamList,
  'SignInScreen'
>;

export const useSignIn = () => {
  // STATE
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const navigation = useNavigation<NavigationProp>();
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 30,
  });

  // HANDLER
  const onToggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const goToHome = () => navigation.navigate('HomeTabNavigator');

  // REACT HOOKS

  return { hidePassword, offsetKeyboard, onToggleHidePassword, goToHome };
};
