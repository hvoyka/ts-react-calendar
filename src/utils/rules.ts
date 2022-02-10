import moment, {Moment} from 'moment';

export const rules = {
  required: (message: string = 'Requared field') => ({
    required: true,
    message,
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Moment) {
      const currentDay = moment().startOf('day');
      const eventDay = value?.startOf('day');

      if (value && eventDay.isSameOrAfter(currentDay)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    },
  }),
};
