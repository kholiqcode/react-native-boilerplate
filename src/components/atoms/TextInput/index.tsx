import React, { forwardRef } from 'react';
import { TextInput, View } from 'react-native';
import { BaseColor, BaseStyle, useTheme } from '../../../theme';
import { styles } from './styles';

const Index = forwardRef((props: TextInput.IProps, ref: any) => {
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
