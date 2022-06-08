import { StyleSheet } from 'react-native';
import { BaseColor } from '../../themeOld';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: BaseColor.blueColor,
    alignItems: 'center',
    marginBottom: 50,
  },
  textInput: { marginBottom: 10 },
});
