// ----------------------------------------------------------------------

import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { applicationReducer, productsReducer, userReducer } from './modules';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // keyPrefix: 'redux-',
  whitelist: [],
  // stateReconciler: autoMergeLevel2,
};

// const userPersistConfig = {
//   key: 'user',
//   storage: AsyncStorage,
//   keyPrefix: 'redux-',
//   whitelist: ['isAuthenticated', 'user', 'token'],
// };

const rootReducer = combineReducers({
  application: applicationReducer,
  ...userReducer,
  ...productsReducer,
});

export { rootPersistConfig, rootReducer };
