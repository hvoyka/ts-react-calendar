import {IUser} from 'models/IUser';
import {IAction} from 'store/types';

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export enum AuthActionEnum {
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_ERROR = 'SET_ERROR',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export type SetIsAuthAction = IAction<AuthActionEnum.SET_IS_AUTH, boolean>;
export type SetIsLoadingAction = IAction<
  AuthActionEnum.SET_IS_LOADING,
  boolean
>;
export type SetErrorAction = IAction<AuthActionEnum.SET_ERROR, string>;
export type SetUserAction = IAction<AuthActionEnum.SET_USER, IUser>;

export type AuthAction =
  | SetIsAuthAction
  | SetIsLoadingAction
  | SetErrorAction
  | SetUserAction;
