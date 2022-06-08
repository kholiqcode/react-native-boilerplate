import { StyleSheet } from 'react-native';
/**
 * Common basic style defines
 */
const baseStyle = StyleSheet.create({
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

export default baseStyle;
