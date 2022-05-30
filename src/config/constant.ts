const activeConfig = 'production';

/**
 * Basic Constant Variables Define
 */
const constants: Constant.RootObject = {
  dev: {
    url: {
      api: '',
      assets: '',
      origin: '',
    },
  },

  production: {
    url: {
      api: '',
      assets: '',
      origin: '',
    },
  },
};

export const appConfig: Constant.IProduction | Constant.IDev = constants[activeConfig];
