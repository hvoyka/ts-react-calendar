export interface UserState {
  isAuth: boolean;
}

export enum UserActionEnum {
  SET_AUTH = 'SET_AUTH',
}

interface SetAuthAction {
  type: UserActionEnum.SET_AUTH;
  payload: boolean;
}

export type UserAction = SetAuthAction;
