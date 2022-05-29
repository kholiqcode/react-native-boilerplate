import {ModalSelectFont} from '../../screens/Modal';

const ModalScreens: {[key: string]: Screen.RootObject} = {
  ModalSelectFont: {
    component: ModalSelectFont,
    options: {
      title: 'modal_select_font',
      presentation: 'modal',
    },
  },
};
export default ModalScreens;
