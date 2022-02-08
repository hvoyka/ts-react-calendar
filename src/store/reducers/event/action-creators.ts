import {IUser, IEvent} from 'models';

import {EventActionEnum, SetEventsAction, SetGuestsAction} from './types';
import {AppDispatch} from 'store';
import axios from 'axios';

export const EventActionCreators = {
  setEvents: (payload: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),
  setGuests: (payload: IUser[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),
  featchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<IUser[]>('./users.json');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
