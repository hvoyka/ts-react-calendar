import {Calendar} from 'antd';
import {IEvent} from 'models/IEvent';
import {Moment} from 'moment';
import React, {FC} from 'react';
import {formatDate} from 'utils';

interface EventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: FC<EventCalendarProps> = ({events}) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value);
    const currentDayEvents = events.filter(
      (event) => event.date === formatedDate
    );
    return (
      <ul className="events">
        {currentDayEvents.map((item, index) => (
          <li key={`${index}-${item.description}`}>{item.description}</li>
        ))}
      </ul>
    );
  }

  return <Calendar dateCellRender={dateCellRender} />;
};
