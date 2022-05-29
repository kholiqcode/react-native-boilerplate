declare namespace Image {
  export interface IProps {
    readonly style?: Object | Array;
    readonly resizeMode?: 'stretch' | 'contain' | 'center';
    readonly source: {
      uri?: string;
      headers?: {
        [key: string]: string;
      };
      priority?: 'low' | 'normal' | 'high';
      cache?: 'immutable' | 'web' | 'cacheOnly';
    };
  }
}
