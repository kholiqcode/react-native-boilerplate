declare module Typography {
  type TFont =
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'normal'
    | 'bold'
    | undefined;
  export interface IFontWeight {
    thin: TFont;
    ultraLight: TFont;
    light: TFont;
    regular: TFont;
    medium: TFont;
    semibold: TFont;
    bold: TFont;
    heavy: TFont;
    black: TFont;
  }

  export interface IHeader {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface ITitle1 {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface ITitle2 {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface ITitle3 {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface IHeadline {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface IBody1 {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface IBody2 {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface ICallout {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface ISubhead {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface IFootnote {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface ICaption1 {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface ICaption2 {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface IOverline {
    fontSize: number;
    fontWeight: TFont;
  }

  export interface RootObject {
    header: IHeader;
    title1: ITitle1;
    title2: ITitle2;
    title3: ITitle3;
    headline: IHeadline;
    body1: IBody1;
    body2: IBody2;
    callout: ICallout;
    subhead: ISubhead;
    footnote: IFootnote;
    caption1: ICaption1;
    caption2: ICaption2;
    overline: IOverline;
  }
}
