import { SignIn, Splash } from '../../screens';
import { Animation } from '../../theme';

const ShareScreens: { [key: string]: Screen.RootObject } = {
  Splash: {
    component: Splash,
    options: {
      title: 'splash',
      gestureEnabled: false,
      cardStyleInterpolator: Animation.bottomToUp,
    },
  },
  SignIn: {
    component: SignIn,
    options: {
      title: 'signin',
      gestureEnabled: false,
      cardStyleInterpolator: Animation.bottomToUp,
    },
  },
};
export default ShareScreens;
