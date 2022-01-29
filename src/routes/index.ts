import {Login, Event} from '../pages';

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum ROUTES {
  ROOT = '/',
  LOGIN = '/login',
}

export const publicRoutes: IRoute[] = [{path: ROUTES.LOGIN, component: Login}];

export const privateRoutes: IRoute[] = [{path: ROUTES.ROOT, component: Event}];
