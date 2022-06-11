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
  WarningIcon,
  WarningTwoIcon,
} from 'native-base';
import { useSignIn } from './hook';

export default function SignIn(): JSX.Element {
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
                  hidePassword ? (
                    <WarningIcon name={'warning-1'} color={colors.black} size={6} />
                  ) : (
                    <WarningTwoIcon name={'warning-2'} color={colors.black} size={6} />
                  )
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
}
