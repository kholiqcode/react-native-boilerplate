import {useSelector} from 'react-redux';
import {DefaultTheme, ThemeSupport} from './pallete';
import {DefaultFont} from './font';
import {useColorScheme} from 'react-native';

/**
 * export theme and colors for application
 * @returns theme,colors
 */
export const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const forceDark = useSelector((state: any) => state.application.force_dark);
  const themeStorage = useSelector((state: any) => state.application.theme);
  const listTheme = ThemeSupport.filter(item => item.theme == themeStorage);
  const theme = listTheme.length > 0 ? listTheme[0] : DefaultTheme;

  if (forceDark) {
    return {theme: theme.dark, colors: theme.dark.colors};
  }
  if (forceDark == false) {
    return {theme: theme.light, colors: theme.light.colors};
  }
  return isDarkMode
    ? {theme: theme.dark, colors: theme.dark.colors}
    : {theme: theme.light, colors: theme.light.colors};
};

/**
 * export font for application
 * @returns font
 */
export const useFont = () => {
  const font = useSelector((state: any) => state.application.font);
  return font ?? DefaultFont;
};

export * from './color';
export * from './font';
export * from './mixin';
export * from './pallete';
export * from './typography';
export * from './base';
export * from './animation';
