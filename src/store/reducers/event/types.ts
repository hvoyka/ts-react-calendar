import {IEvent} from './../../../models/IEvent';
import {IUser} from 'models/IUser';
import {IAction} from 'store/types';

export interface EventState {
  guests: IUser[];
  events: IEvent[];
}

export enum EventActionEnum {
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS',
}

export type SetGuestsAction = IAction<EventActionEnum.SET_GUESTS, IUser[]>;
export type SetEventsAction = IAction<EventActionEnum.SET_EVENTS, IEvent[]>;

export type EventAction = SetGuestsAction | SetEventsAction;
