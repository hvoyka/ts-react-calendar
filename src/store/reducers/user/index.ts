import {UserAction, UserActionEnum, UserState} from './types';

const initialState: UserState = {
  isAuth: false,
};

export default function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case UserActionEnum.SET_AUTH:
      return {...state, isAuth: action.payload};
    default:
      return state;
  }
}
