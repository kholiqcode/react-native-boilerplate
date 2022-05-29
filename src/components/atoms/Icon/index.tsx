import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

export default function Index(props: Icon.IProps) {
  const {style, name, color, size, enableRTL, ...rest} = props;
  const layoutStyle = enableRTL ? styles.styleRTL : {};
  return (
    <Icon
      name={name}
      size={size}
      color={color}
      style={StyleSheet.flatten([style, layoutStyle])}
      {...rest}
    />
  );
}
