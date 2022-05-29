import { StyleSheet } from 'react-native';
import { boxShadow, margin, padding } from '../mixin';

/**
 * Common basic style defines
 */
export const BaseStyle = StyleSheet.create({
  tabBar: {
    ...boxShadow(
      '#000',
      {
        width: 0,
        height: 5,
      },
      0.34,
      6.27,
    ),
  },
  bodyPaddingDefault: {
    ...padding(0, 20),
  },
  bodyMarginDefault: {
    ...margin(0, 20),
  },
  textInput: {
    height: 46,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  safeAreaView: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
});
