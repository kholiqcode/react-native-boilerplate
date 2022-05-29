const activeConfig = 'production';

declare module IConstant {
  export interface Url {
    api: string;
    assets: string;
    origin: string;
  }

  export interface Dev {
    url: Url;
  }

  export interface Url2 {
    api: string;
    assets: string;
    origin: string;
  }

  export interface Production {
    url: Url2;
  }

  export interface RootObject {
    dev: Dev;
    production: Production;
  }
}

/**
 * Basic Constant Variables Define
 */
const constants: IConstant.RootObject = {
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

export const appConfig: IConstant.Production | IConstant.Dev =
  constants[activeConfig];
