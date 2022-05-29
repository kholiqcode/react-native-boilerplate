import {StyleSheet} from 'react-native';
import {BaseStyle} from '../../theme';

export const styles = StyleSheet.create<Splash.IStyleSheet>({
  imageRotate: [
    BaseStyle.safeAreaView,
    {
      justifyContent: 'center',
      alignItems: 'center',
    },
  ],
});
