import { extendTheme } from 'native-base';
import colors from './colors';
import { fontSizes, letterSpacings } from './fonts';
import components from './components';

const themes = extendTheme({ colors, fontSizes, letterSpacings, components });

export default themes;
