import { productsAPI } from './products';
import { userAPI } from './user';

export * from './user';
export * from './products';
export const combinedMiddleware = [userAPI.middleware, productsAPI.middleware];
