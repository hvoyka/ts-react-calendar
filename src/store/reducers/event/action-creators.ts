import {IUser, IEvent} from 'models';
import {EventActionEnum, SetEventsAction, SetGuestsAction} from './types';
import {AppDispatch} from 'store';
import {UserService} from 'services/UserService';
import {StorageService} from 'services';

export const EventActionCreators = {
  setEvents: (payload: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),
  setGuests: (payload: IUser[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (error) {
      console.log(error);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events: IEvent[] = StorageService.getItem('events') || [];
      events.push(event);
      dispatch(EventActionCreators.setEvents(events));
      StorageService.setItem('events', events);
    } catch (error) {
      console.log(error);
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events: IEvent[] = StorageService.getItem('events') || [];
      const currentUserEvents = events.filter(
        (event) => event.author === username || event.guest === username
      );
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (error) {
      console.log(error);
    }
  },
};
