import { configureStore } from '@reduxjs/toolkit';
import { QueryClient } from 'react-query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import ReactotronConfig from '../../ReactotronConfig';
import { combinedMiddleware } from './modules';
import { rootPersistConfig, rootReducer } from './rootReducer';

/**
 * Setup redux store
 */

const store = configureStore({
  reducer: persistReducer<any, any>(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(combinedMiddleware)
      .concat(logger),
  enhancers: [ReactotronConfig.createEnhancer!()],
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

const useReduxDispatch = () => useDispatch<AppDispatch>();
const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Initial Redux Query
 */
const queryClient = new QueryClient();

export {
  store,
  persistor,
  useSelector,
  useDispatch,
  queryClient,
  useReduxDispatch,
  useReduxSelector,
};
export * from './modules';
