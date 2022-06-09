/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace ApplicationSlice {
  export interface IState {
    theme: string;
    font: string;
    force_dark: boolean;
    language: string;
    intro: boolean;
  }

  export interface IAction {
    payload: any;
  }
}
