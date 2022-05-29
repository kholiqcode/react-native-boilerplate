import {StyleSheet} from 'react-native';
import {scaleFont} from '../mixin';

/**
 * Fontweight setting
 * - This font weight will be used for style of screens where needed
 * - Check more how to use font weight with url below
 */
export const FontWeight: Typography.IFontWeight = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

/**
 * Typography setting
 * - This font weight will be used for all template
 * - Check more how to use typography in url below
 */
export const Typography = StyleSheet.create<
  StyleSheet.NamedStyles<Typography.RootObject>
>({
  header: {
    fontSize: scaleFont(34),
    fontWeight: FontWeight.bold,
  },
  title1: {
    fontSize: scaleFont(28),
    fontWeight: FontWeight.bold,
  },
  title2: {
    fontSize: scaleFont(22),
    fontWeight: FontWeight.bold,
  },
  title3: {
    fontSize: scaleFont(20),
    fontWeight: FontWeight.bold,
  },
  headline: {
    fontSize: scaleFont(17),
    fontWeight: FontWeight.bold,
  },
  body1: {
    fontSize: scaleFont(17),
    fontWeight: FontWeight.regular,
  },
  body2: {
    fontSize: scaleFont(14),
    fontWeight: FontWeight.regular,
  },
  callout: {
    fontSize: scaleFont(17),
    fontWeight: FontWeight.regular,
  },
  subhead: {
    fontSize: scaleFont(15),
    fontWeight: FontWeight.regular,
  },
  footnote: {
    fontSize: scaleFont(13),
    fontWeight: FontWeight.regular,
  },
  caption1: {
    fontSize: scaleFont(12),
    fontWeight: FontWeight.regular,
  },
  caption2: {
    fontSize: scaleFont(11),
    fontWeight: FontWeight.regular,
  },
  overline: {
    fontSize: scaleFont(11),
    fontWeight: FontWeight.regular,
  },
});
