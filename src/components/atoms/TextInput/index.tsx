import React, { forwardRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { BaseColor, BaseStyle, useTheme } from '../../../theme';
import { styles } from './styles';

interface ITextInputProps extends TextInputProps {
  success?: boolean;
  icon?: any;
  inputStyle?: any;
  onPress?: any;
}

const Index = forwardRef((props: ITextInputProps, ref: any) => {
  const { colors } = useTheme();
  const cardColor = colors.card;
  const {
    style,
    onChangeText,
    onFocus,
    placeholder,
    value,
    success,
    secureTextEntry,
    keyboardType,
    multiline,
    textAlignVertical,
    icon,
    onSubmitEditing,
    inputStyle,
  } = props;
  return (
    <View style={[BaseStyle.textInput, { backgroundColor: cardColor }, style]}>
      <TextInput
        ref={ref}
        style={[styles.input, inputStyle]}
        onChangeText={onChangeText}
        onFocus={onFocus}
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor={success ? BaseColor.grayColor : colors.primary}
        secureTextEntry={secureTextEntry}
        value={value}
        selectionColor={colors.primary}
        keyboardType={keyboardType}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
        onSubmitEditing={onSubmitEditing}
      />
      {icon}
    </View>
  );
});

export default React.memo(Index);
