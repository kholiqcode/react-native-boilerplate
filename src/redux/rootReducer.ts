// ----------------------------------------------------------------------

import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { productsQueryReducer, userQueryReducer } from '../services';
import { applicationReducer } from './application';
import { usersSliceReducer } from './user';

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
  ...applicationReducer,
  ...usersSliceReducer,
  ...userQueryReducer,
  ...productsQueryReducer,
});

export { rootPersistConfig, rootReducer };
