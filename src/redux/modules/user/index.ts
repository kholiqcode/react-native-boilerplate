import { userQueryReducer } from './user.query';
import { usersSliceReducer } from './user.slice';

const combinedReducer = {
  ...userQueryReducer,
  ...usersSliceReducer,
};

export * from './user.query';
export * from './user.slice';
export default combinedReducer;
