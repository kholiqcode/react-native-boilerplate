import React from 'react';
import {
  Box,
  Button,
  Center,
  IconButton,
  Input,
  KeyboardAvoidingView,
  Text,
  useTheme,
} from 'native-base';
import { Icon } from '../../components';
import { useSignIn } from './hook';

export default React.memo(function SignIn(): JSX.Element {
  const { hidePassword, offsetKeyboard, onToggleHidePassword, goToHome } = useSignIn();
  const { colors } = useTheme();

  return (
    <Box safeArea flex={1}>
      <KeyboardAvoidingView flex={1} keyboardVerticalOffset={offsetKeyboard}>
        <Center flex={1} px={10}>
          <Text fontSize={'3xl'} color={'blue.500'} mb={50}>
            SignIn
          </Text>
          <Input p={4} placeholder="Type Email" keyboardType="email-address" mb="10" />
          <Input
            p={4}
            placeholder="Type Password"
            secureTextEntry={hidePassword}
            mb="10"
            InputRightElement={
              <IconButton
                onPress={onToggleHidePassword}
                icon={
                  <Icon
                    name={hidePassword ? 'eye' : 'eye-slash'}
                    color={colors.black}
                    size={20}
                    enableRTL
                  />
                }
              />
            }
          />
          <Button onPress={goToHome} variant={'solid'} size={'lg'}>
            Login
          </Button>
        </Center>
      </KeyboardAvoidingView>
    </Box>
  );
});
