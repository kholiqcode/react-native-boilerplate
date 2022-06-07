// IMPORT REDUCER
import applicationReducer from './application';
import userReducer, { userAPI } from './user';
import productsReducer, { productsAPI } from './products';

// IMPORT ACTION
// export * from './application';
// export * from './user/user.slice';

export { applicationReducer, userReducer, productsReducer };
export const combinedMiddleware = [userAPI.middleware, productsAPI.middleware];
