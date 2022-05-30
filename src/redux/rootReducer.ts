// ----------------------------------------------------------------------

import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

// ----------------------------------------------------------------------
import { applicationReducer, userReducer } from './slices';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  keyPrefix: 'redux-',
  whitelist: [],
  stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  keyPrefix: 'redux-',
  whitelist: ['isAuthenticated', 'user', 'token'],
};

const rootReducer = combineReducers({
  application: applicationReducer,
  user: persistReducer(userPersistConfig, userReducer),
});

export { rootPersistConfig, rootReducer };
