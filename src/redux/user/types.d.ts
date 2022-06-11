/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace InitialState {
  export interface IState {
    isLoading?: boolean;
    isAuthenticated: boolean;
    error: boolean;
    errorMessage: string;
    user: IUser;
    users: IUser[];
    token: IToken;
  }

  export interface IAction {
    payload?: any;
  }

  export interface IUser {
    name: string;
    email: string;
    status: boolean;
  }

  export interface IToken {
    type: 'refresh' | 'access';
    access: string;
    refresh: string;
  }
}
