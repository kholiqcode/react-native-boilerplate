declare module Text {
  export interface IProps {
    header?: boolean;
    title1?: boolean;
    title2?: boolean;
    title3?: boolean;
    headline?: boolean;
    body1?: boolean;
    body2?: boolean;
    callout?: boolean;
    subhead?: boolean;
    footnote?: boolean;
    caption1?: boolean;
    caption2?: boolean;
    overline?: boolean;
    thin?: boolean;
    ultraLight?: boolean;
    light?: boolean;
    regular?: boolean;
    medium?: boolean;
    semibold?: boolean;
    bold?: boolean;
    heavy?: boolean;
    black?: boolean;
    primaryColor?: boolean;
    darkPrimaryColor?: boolean;
    lightPrimaryColor?: boolean;
    accentColor?: boolean;
    grayColor?: boolean;
    dividerColor?: boolean;
    whiteColor?: boolean;
    fieldColor?: boolean;
    numberOfLines?: number;
    textAlign?: string;
    style?: IStyle;
    children?: string;
    adjustsFontSizeToFit?: boolean;
  }
}
