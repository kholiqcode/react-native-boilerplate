declare module Screen {
  export interface RootObject {
    component: any;
    options: IOptions;
  }

  export interface IOptions {
    title: string;
    gestureEnabled?: boolean;
    cardStyleInterpolator?: any;
    presentation?: any;
    tabBarIcon?: Function;
    headerShown?: boolean;
  }
}
