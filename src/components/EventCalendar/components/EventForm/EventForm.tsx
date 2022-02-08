import {Button, DatePicker, Form, Input, Select} from 'antd';
import React, {FC} from 'react';
import {rules} from 'utils';

const {Option} = Select;

interface EventFormProps {
  onSubmit: () => void;
}

export const EventForm: FC<EventFormProps> = ({onSubmit}) => {
  return (
    <Form onFinish={onSubmit}>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Date" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="User" name="user" rules={[rules.required()]}>
        <Select>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
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
