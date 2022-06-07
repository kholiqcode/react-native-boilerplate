import { productsQueryReducer } from './product.query';

const combinedReducer = {
  ...productsQueryReducer,
};

export * from './product.query';
export default combinedReducer;
