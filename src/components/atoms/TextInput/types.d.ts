declare namespace TextInput {
  export interface IProps {
    style?: any;
    onChangeText?: any;
    onFocus?: any;
    placeholder?: string;
    value?: string;
    success?: boolean;
    secureTextEntry?: boolean;
    keyboardType?:
    | 'default'
    | 'email-address'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'phone-pad'
    | 'url';
    multiline?: boolean;
    textAlignVertical?: any;
    icon?: any;
    onSubmitEditing?: any;
    inputStyle?: any;
    onPress?: any;
  }
}
