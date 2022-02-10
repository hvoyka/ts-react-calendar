import {Button, DatePicker, Form, Input, Select} from 'antd';
import {IUser} from 'models';
import {Moment} from 'moment';
import React, {FC} from 'react';
import {formatDate, rules} from 'utils';

import {IEvent} from 'models';
import {useTypedSelector} from 'hooks';

const {Option} = Select;

interface EventFormProps {
  onSubmit: (values: IEvent) => void;
  guests: IUser[];
}
export interface EventFormValues {
  date: Moment;
  guest: string;
  description: string;
}

export const EventForm: FC<EventFormProps> = ({guests, onSubmit}) => {
  const {user} = useTypedSelector((state) => state.auth);

  const handleAddNewEvent = (values: EventFormValues) => {
    const date = formatDate(values.date);
    const formData: IEvent = {
      author: user.username,
      description: values.description,
      guest: values.guest,
      date,
    };
    onSubmit(formData);
  };

  return (
    <Form onFinish={handleAddNewEvent}>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={[
          rules.required(),
          rules.isDateAfter('Select date after or today'),
        ]}
      >
        <DatePicker format={formatDate} />
      </Form.Item>
      <Form.Item label="Guest" name="guest" rules={[rules.required()]}>
        <Select>
          {guests.map((guest) => {
            return (
              <Option key={guest.username} value={guest.username}>
                {guest.username}
              </Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{offset: 8, span: 16}}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};
