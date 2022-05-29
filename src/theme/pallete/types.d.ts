declare module Theme {
  export interface IColors {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    accent: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  }

  export interface ILight {
    dark: boolean;
    colors: IColors;
  }

  export interface IDark {
    dark: boolean;
    colors: IColors;
  }

  export interface IDefaultTheme {
    theme: string;
    light: ILight;
    dark: IDark;
  }
}
