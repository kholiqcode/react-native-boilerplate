import { StyleSheet } from 'react-native';
import colorThemes from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: colorThemes.blue[100],
    alignItems: 'center',
    marginBottom: 50,
  },
  textInput: { marginBottom: 10 },
});
