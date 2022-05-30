declare namespace Constant {
  export interface IUrl {
    api: string;
    assets: string;
    origin: string;
  }

  export interface IDev {
    url: IUrl;
  }

  export interface IUrl2 {
    api: string;
    assets: string;
    origin: string;
  }

  export interface IProduction {
    url: IUrl2;
  }

  export interface RootObject {
    dev: IDev;
    production: IProduction;
  }
}
