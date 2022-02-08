import {Calendar} from 'antd';
import {IEvent} from 'models/IEvent';
import React, {FC} from 'react';

interface EventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: FC<EventCalendarProps> = ({events}) => {
  return <Calendar />;
};
