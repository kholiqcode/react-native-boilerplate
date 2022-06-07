/* eslint-disable import/no-extraneous-dependencies */
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({ name: 'RN Boilerplate' })
  .setAsyncStorageHandler(AsyncStorage)
  .use(reactotronRedux())
  .connect();

export default reactotron;
