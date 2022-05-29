import {configureStore} from '@reduxjs/toolkit';
import {QueryClient} from 'react-query';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import {rootPersistConfig, rootReducer} from './rootReducer';

/**
 * Setup redux store
 */
const store = configureStore({
  reducer: persistReducer<any, any>(rootPersistConfig, rootReducer),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

const persistor = persistStore(store);

const useSelector = useReduxSelector;

const useDispatch = () => useReduxDispatch();

/**
 * Initial Redux Query
 */
const queryClient = new QueryClient();

export {store, persistor, useSelector, useDispatch, queryClient};
export * from './slices';
