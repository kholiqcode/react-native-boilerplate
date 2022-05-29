import { I18nManager, StyleSheet } from 'react-native';
import { useFont, useTheme } from '../../../theme';

const font = useFont();
const { colors } = useTheme();

export const styles = StyleSheet.create({
  input: {
    fontFamily: `${font}-Regular`,
    flex: 1,
    height: '100%',
    textAlign: I18nManager.isRTL ? 'right' : 'auto',
    color: colors.text,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
