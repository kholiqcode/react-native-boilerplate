import { extendTheme } from 'native-base';
import colors from './colors';
import { fontSizes, letterSpacings } from './fonts';
import components from './components';
import baseStyle from './baseStyle';
import { animation } from './animation';

const themes = extendTheme({ colors, fontSizes, letterSpacings, components });

export { themes, baseStyle, animation };
