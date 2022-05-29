import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text } from '../../../components';
import { styles } from './styles';

interface ITabIconProps {
  color: string;
  name: string;
}

interface ITabIconNotyProps {
  color: string;
  name: string;
  count: number;
}

export const tabBarIcon = ({ color, name }: ITabIconProps): JSX.Element => (
  <Icon name={name} size={20} color={color} solid />
);

export const tabBarIconHaveNoty = ({ color, name, count = 0 }: ITabIconNotyProps): JSX.Element => (
  <View>
    {tabBarIcon({ color, name })}
    {count > 0 && (
      <View style={styles.iconNotyWrapper}>
        <Text whiteColor caption2>
          {count.toString()}
        </Text>
      </View>
    )}
  </View>
);
