import {useEffect} from 'react';
import {Animated, Easing} from 'react-native';

export const useSplash = () => {
  //STATE
  let rotateValueHolder = new Animated.Value(0);

  //HANDLER
  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // REACT HOOKS
  useEffect(() => {
    startImageRotateFunction();
  }, []);

  return {
    rotateData,
    startImageRotateFunction,
  };
};
