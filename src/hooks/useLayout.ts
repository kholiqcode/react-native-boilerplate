import { Dimensions, I18nManager, LayoutAnimation, Platform, UIManager } from 'react-native';
import RNRestart from 'react-native-restart';

/**
 * This code for hooks layout
 * @returns Object
 */
export default function useLayout() {
  const TRANSPARENCIES: { [key: number]: string } = {
    100: 'FF',
    99: 'FC',
    98: 'FA',
    97: 'F7',
    96: 'F5',
    95: 'F2',
    94: 'F0',
    93: 'ED',
    92: 'EB',
    91: 'E8',
    90: 'E6',
    89: 'E3',
    88: 'E0',
    87: 'DE',
    86: 'DB',
    85: 'D9',
    84: 'D6',
    83: 'D4',
    82: 'D1',
    81: 'CF',
    80: 'CC',
    79: 'C9',
    78: 'C7',
    77: 'C4',
    76: 'C2',
    75: 'BF',
    74: 'BD',
    73: 'BA',
    72: 'B8',
    71: 'B5',
    70: 'B3',
    69: 'B0',
    68: 'AD',
    67: 'AB',
    66: 'A8',
    65: 'A6',
    64: 'A3',
    63: 'A1',
    62: '9E',
    61: '9C',
    60: '99',
    59: '96',
    58: '94',
    57: '91',
    56: '8F',
    55: '8C',
    54: '8A',
    53: '87',
    52: '85',
    51: '82',
    50: '80',
    49: '7D',
    48: '7A',
    47: '78',
    46: '75',
    45: '73',
    44: '70',
    43: '6E',
    42: '6B',
    41: '69',
    40: '66',
    39: '63',
    38: '61',
    37: '5E',
    36: '5C',
    35: '59',
    34: '57',
    33: '54',
    32: '52',
    31: '4F',
    30: '4D',
    29: '4A',
    28: '47',
    27: '45',
    26: '42',
    25: '40',
    24: '3D',
    23: '3B',
    22: '38',
    21: '36',
    20: '33',
    19: '30',
    18: '2E',
    17: '2B',
    16: '29',
    15: '26',
    14: '24',
    13: '21',
    12: '1F',
    11: '1C',
    10: '1A',
    9: '17',
    8: '14',
    7: '12',
    6: '0F',
    5: '0D',
    4: '0A',
    3: '08',
    2: '05',
    1: '03',
    0: '00',
  };
  const heightHeader = (): number => {
    const { width } = Dimensions.get('window');
    const { height } = Dimensions.get('window');
    const landscape = width > height;

    if (Platform.OS === 'android') return 45;
    if (Platform.isTV) return 65;
    switch (height) {
      case 375:
      case 414:
      case 812:
      case 896:
        return landscape ? 45 : 88;
      default:
        return landscape ? 45 : 65;
    }
  };

  const heightTabView = (): number => {
    const { height } = Dimensions.get('window');
    let size = height - heightHeader();
    switch (height) {
      case 375:
      case 414:
      case 812:
      case 896:
        size -= 30;
        break;
      default:
        break;
    }

    return size;
  };

  const getWidthDevice = (): number => {
    return Dimensions.get('window').width;
  };

  const getHeightDevice = (): number => {
    return Dimensions.get('window').height;
  };

  const scrollEnabled = (contentWidth: number, contentHeight: number): boolean => {
    return contentHeight > Dimensions.get('window').height - heightHeader();
  };

  const isLanguageRTL = (code: string): boolean => {
    switch (code) {
      case 'ar':
      case 'he':
        return true;
      default:
        return false;
    }
  };

  const reloadLocale = (oldLanguage: string, newLanguage: string) => {
    const oldStyle = isLanguageRTL(oldLanguage);
    const newStyle = isLanguageRTL(newLanguage);
    if (oldStyle != newStyle) {
      I18nManager.forceRTL(newStyle);
      RNRestart.Restart();
    }
  };

  const parseHexTransparency = (hexColor = '#ffffff', transparency = 0) => {
    return `${hexColor}${TRANSPARENCIES?.[transparency] ?? '00'}`;
  };

  const setupLayoutAnimation = () => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  };

  const enableExperimental = () => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return {
    heightHeader,
    heightTabView,
    getWidthDevice,
    getHeightDevice,
    scrollEnabled,
    isLanguageRTL,
    reloadLocale,
    parseHexTransparency,
    setupLayoutAnimation,
    enableExperimental,
  };
}
