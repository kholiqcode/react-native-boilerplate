import AppScreens from './app';
import ShareScreens from './share';
import ModalScreens from './modal';

const AllScreens: { [key: string]: Screen.RootObject } = {
  ...ShareScreens,
  ...ModalScreens,
  ...AppScreens,
};

export { AllScreens, ShareScreens, ModalScreens, AppScreens };
