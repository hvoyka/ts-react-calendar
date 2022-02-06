import {AppDispatch} from './../../index';
import {IUser} from 'models/IUser';
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types';
import axios from 'axios';

export const AuthActionCreators = {
  setUser: (payload: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload,
  }),

  setAuth: (payload: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload,
  }),

  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),

  setError: (payload: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload,
  }),
  logIn:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));
        setTimeout(async () => {
          const response = await axios.get<IUser[]>('./users.json');
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );
          if (mockUser) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('user', mockUser.username);
            dispatch(AuthActionCreators.setAuth(true));
            dispatch(AuthActionCreators.setUser(mockUser));
          } else {
            dispatch(AuthActionCreators.setError('User not found'));
          }
          dispatch(AuthActionCreators.setIsLoading(false));
        }, 2000);
      } catch (error) {
        dispatch(
          AuthActionCreators.setError(`Somethin went wrong with logout :(`)
        );
      }
    },
  logOut: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setAuth(false));
  },
};
