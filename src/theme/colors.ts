const customColorSchemes = {
  manta: {
    100: '#6287A2',
  },
  current: {
    100: '#1AA6B7',
    200: '#FFCB7C',
  },
  surface: {
    100: '#5EC0CB',
  },
  ripple: {
    100: '#D9ECF2',
  },
  rock: {
    100: '#CE8F5A',
  },
  sand: {
    100: '#F0D19A',
  },
  seaflor: {
    100: '#002D40',
  },
  leaves: {
    100: '#1B5F5E',
  },
  palm: {
    100: '#80C8BC',
  },
  lime: {
    100: '#B2D0C6',
  },
  stone: {
    100: '#FEB15F',
  },
  corals: {
    100: '#FF414D',
  },
  white: {
    100: '#ffffff',
    200: '#EFEFEF',
  },
  gray: {
    100: '#BDBDBD',
    200: '#E0E0E0',
    300: '#F2F2F2',
    400: '#DADADA',
    500: '#828282',
    600: '#4F4F4F',
  },
  blue: {
    100: '#2D9CDB',
    200: '#42526E',
  },
  king: {
    100: '#2A7576',
  },
  yellow: {
    100: '#F2C94C',
  },
  dire: {
    100: '#272727',
  },
  green: {
    100: '#27AE60',
  },
};

const colorThemes = {
  ...customColorSchemes,
  primary: {
    500: customColorSchemes.surface[100],
    300: customColorSchemes.current[100],
  },
  muted: {
    500: customColorSchemes.lime[100],
    300: customColorSchemes.lime[100],
  },
  warning: {
    600: customColorSchemes.stone[100],
  },
  // seaflor: customColorSchemes.seaflor[100],
};

export default colorThemes;
