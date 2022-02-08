import {Button, Modal, Row} from 'antd';
import {EventCalendar} from 'components';
import {EventForm} from 'components/EventCalendar/components/EventForm';
import {FC, useState} from 'react';

export const Event: FC = () => {
  const [isEventModalVisible, setIsEventModalVisible] = useState(false);

  const handleAddNewEvent = () => {
    setIsEventModalVisible(false);
  };

  return (
    <>
      <EventCalendar events={[]} />
      <Row justify="center">
        <Button onClick={() => setIsEventModalVisible(true)}>Add event</Button>
      </Row>
      <Modal
        title="Add event"
        visible={isEventModalVisible}
        footer={null}
        onCancel={() => setIsEventModalVisible(false)}
      >
        <EventForm onSubmit={handleAddNewEvent} />
      </Modal>
    </>
  );
};
