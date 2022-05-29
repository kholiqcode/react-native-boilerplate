import {StyleSheet} from 'react-native';
import {BaseColor} from '../../../theme';

export const styles = StyleSheet.create({
  iconNotyWrapper: {
    borderWidth: 1,
    borderColor: BaseColor.whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: 'red',
    top: -5,
    right: -12,
    borderRadius: 10,
  },
});
