import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Platform } from 'react-native';

export const useSignIn = () => {
  // STATE
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const navigation = useNavigation<SignIn.MainMenuScreenProp>();
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 30,
  });

  // HANDLER
  const onToggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const goToHome = () => navigation.navigate('MainMenu');

  // REACT HOOKS

  return { hidePassword, offsetKeyboard, onToggleHidePassword, goToHome };
};
