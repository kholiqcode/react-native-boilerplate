declare module Tab {
  export interface ILabelStyle {
    fontSize: number;
  }

  export interface ITabScreens {
    component: any;
    options: IOptions;
  }

  export interface ITabBarOptions {
    showIcon: boolean;
    showLabel: boolean;
    activeTintColor: string;
    inactiveTintColor: string;
    style: string;
    labelStyle: ILabelStyle;
  }

  export interface IOptions {
    title: string;
    gestureEnabled?: boolean;
    cardStyleInterpolator?: any;
    presentation?: any;
    tabBarIcon?: Function;
  }
}
