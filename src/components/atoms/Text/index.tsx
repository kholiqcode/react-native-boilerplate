import {
  BaseColor,
  FontWeight,
  Typography,
  useFont,
  useTheme,
} from '../../../theme';
import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

const Poppins: {[key: number | string]: string} = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
  normal: 'Regular',
  bold: 'Bold',
};

export default function Index(props: Text.IProps): JSX.Element {
  const {
    //props style
    header,
    title1,
    title2,
    title3,
    headline,
    body1,
    body2,
    callout,
    subhead,
    footnote,
    caption1,
    caption2,
    overline,
    // props font
    thin,
    ultraLight,
    light,
    regular,
    medium,
    semibold,
    bold,
    heavy,
    black,
    //custom color
    primaryColor,
    darkPrimaryColor,
    lightPrimaryColor,
    accentColor,
    grayColor,
    dividerColor,
    whiteColor,
    fieldColor,
    //numberOfLines
    numberOfLines,
    textAlign,
    //custom
    style,
    //children
    children,
    //adjust fontsize
    adjustsFontSizeToFit,
  } = props;

  const {colors} = useTheme();
  const font = useFont();

  let textStyle: TextStyle = StyleSheet.flatten([
    header && Typography.header,
    title1 && Typography.title1,
    title2 && Typography.title2,
    title3 && Typography.title3,
    headline && Typography.headline,
    body1 && Typography.body1,
    body2 && Typography.body2,
    callout && Typography.callout,
    subhead && Typography.subhead,
    footnote && Typography.footnote,
    caption1 && Typography.caption1,
    caption2 && Typography.caption2,
    overline && Typography.overline,
    //custom for font
    thin && {fontWeight: FontWeight.thin},
    ultraLight && {fontWeight: FontWeight.ultraLight},
    light && {fontWeight: FontWeight.light},
    regular && {fontWeight: FontWeight.regular},
    medium && {fontWeight: FontWeight.medium},
    semibold && {fontWeight: FontWeight.semibold},
    bold && {fontWeight: FontWeight.bold},
    heavy && {fontWeight: FontWeight.heavy},
    black && {fontWeight: FontWeight.black},
    // default color
    {color: colors.text},
    //custom for color
    primaryColor && {color: colors.primary},
    darkPrimaryColor && {color: colors.primaryDark},
    lightPrimaryColor && {color: colors.primaryLight},
    accentColor && {color: colors.accent},
    grayColor && {color: BaseColor.grayColor},
    dividerColor && {color: BaseColor.dividerColor},
    whiteColor && {color: BaseColor.whiteColor},
    fieldColor && {color: BaseColor.fieldColor},
    {fontFamily: font, textAlign},
    style && style,
  ]);

  if (textStyle.fontFamily) {
    const fontStyle = textStyle.fontStyle == 'italic' ? 'Italic' : '';
    const fontWeight = textStyle?.fontWeight ?? 400;
    switch (textStyle.fontFamily) {
      case 'Poppins':
        textStyle.fontFamily = `${textStyle.fontFamily}-${
          Poppins[fontWeight] == 'Regular'
            ? Poppins[fontWeight]
            : Poppins[fontWeight] + fontStyle
        }`;
        break;

      default:
        break;
    }
  }

  return (
    <Text
      style={textStyle}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}
