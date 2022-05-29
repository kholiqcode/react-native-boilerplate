import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const Image: React.FC<Image.IProps> = props => {
  const {style, resizeMode, source, ...rest} = props;
  const getMode: any = () => {
    let resize: string = FastImage.resizeMode.cover;
    switch (resizeMode) {
      case 'contain':
        resize = FastImage.resizeMode.contain;
        break;
      case 'stretch':
        resize = FastImage.resizeMode.stretch;
        break;
      case 'center':
        resize = FastImage.resizeMode.center;
        break;
      default:
        break;
    }
    return resize;
  };
  return (
    <FastImage
      style={StyleSheet.flatten([style && style])}
      {...rest}
      source={source}
      resizeMode={getMode()}
    />
  );
};

export default Image;
