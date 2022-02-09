import {Button, Modal, Row} from 'antd';
import {EventCalendar} from 'components';
import {EventForm} from 'components/EventCalendar/components/EventForm';
import {useTypedSelector} from 'hooks';
import {useActions} from 'hooks/userActions';
import {IEvent} from 'models';
import {FC, useEffect, useState} from 'react';

export const Event: FC = () => {
  const [isEventModalVisible, setIsEventModalVisible] = useState(false);
  const {guests, events} = useTypedSelector((state) => state.event);
  const {user} = useTypedSelector((state) => state.auth);
  const {fetchGuests, fetchEvents, createEvent} = useActions();

  const handleEventFormSubmit = (event: IEvent) => {
    createEvent(event);
    setIsEventModalVisible(false);
  };

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  console.log('events', events);

  return (
    <>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={() => setIsEventModalVisible(true)}>Add event</Button>
      </Row>
      <Modal
        title="Add event"
        visible={isEventModalVisible}
        footer={null}
        onCancel={() => setIsEventModalVisible(false)}
      >
        <EventForm onSubmit={handleEventFormSubmit} guests={guests} />
      </Modal>
    </>
  );
};
