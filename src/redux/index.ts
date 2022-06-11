/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
import { configureStore } from '@reduxjs/toolkit';
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
import { combinedMiddleware } from '../services';
import { rootPersistConfig, rootReducer } from './rootReducer';

/**
 * Setup redux store
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let createDebugger: (() => any) | null = null;

if (__DEV__) {
  createDebugger = require('redux-flipper').default;
}

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(combinedMiddleware)
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      .concat(createDebugger!())
      .concat(logger),
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

export { store, persistor, useSelector, useDispatch, useReduxDispatch, useReduxSelector };

// export * from './modules';
