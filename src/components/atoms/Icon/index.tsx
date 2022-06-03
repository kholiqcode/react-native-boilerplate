import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

interface IconProps {
  style?: any;
  name: string;
  color?: string;
  size?: number;
  enableRTL?: boolean;
  rest?: any;
}

export default function Index(props: IconProps) {
  const { style, name, color, size, enableRTL, ...rest } = props;
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
