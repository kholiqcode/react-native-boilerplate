import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native';
import { Button, Icon, SafeAreaView, Text, TextInput } from '../../components';
import { BaseStyle, useTheme } from '../../theme';
import { useSignIn } from './hook';
import { styles } from './styles';

export default React.memo(function SignIn(): JSX.Element {
  const { hidePassword, offsetKeyboard, onToggleHidePassword, goToHome } = useSignIn();
  const { colors } = useTheme();

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'top', 'left']}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={offsetKeyboard}
        style={{
          flex: 1,
        }}
      >
        <View style={[BaseStyle.container, styles.container]}>
          <Text title1 style={styles.textColor}>
            SignIn
          </Text>
          <TextInput
            placeholder="Type Email"
            keyboardType="email-address"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Type Password"
            secureTextEntry={hidePassword}
            icon={
              <TouchableWithoutFeedback onPress={onToggleHidePassword}>
                <Icon
                  name={hidePassword ? 'eye' : 'eye-slash'}
                  color={colors.text}
                  size={20}
                  enableRTL
                />
              </TouchableWithoutFeedback>
            }
            style={styles.textInput}
          />
          <Button outline style={{ width: '100%', marginTop: 20 }} onPress={goToHome}>
            Login
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});
