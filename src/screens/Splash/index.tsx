import React, { useEffect } from 'react';
import { Animated, SafeAreaView } from 'react-native';
import { Logo } from '../../assets';
import { useSplash } from './hook';
import { styles } from './styles';

export default function Splash(): JSX.Element {
  const { rotateData } = useSplash();

  return (
    <SafeAreaView style={styles.imageRotate}>
      <Animated.Image
        source={Logo}
        style={{ width: 300, height: 300, transform: [{ rotate: rotateData }] }}
      />
    </SafeAreaView>
  );
}
