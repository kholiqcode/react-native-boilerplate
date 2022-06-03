import { Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH: number = Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number): number => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number): number => size * PixelRatio.getFontScale();

function dimensions(
  top = 10,
  right = top,
  bottom = top,
  left = right,
  property = 'padding',
): { [key: string]: number } {
  const styles: { [key: string]: number } = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(
  top = 0,
  right = top,
  bottom = top,
  left = right,
): { [key: string]: number } {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(
  top = 0,
  right = top,
  bottom = top,
  left = right,
): { [key: string]: number } {
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
  color: string,
  offset: { height: number; width: number } = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2,
): {
  shadowColor: string;
  shadowOffset: { height: number; width: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
} {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
