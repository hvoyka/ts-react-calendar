import {Moment} from 'moment';

export const formatDate = (date: Moment): string => {
  return date.format('YYYY.MM.DD');
};
