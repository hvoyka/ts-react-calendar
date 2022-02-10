import {Button, Form, Input} from 'antd';
import Text from 'antd/lib/typography/Text';
import {useTypedSelector} from 'hooks';
import {useActions} from 'hooks/userActions';
import React, {FC} from 'react';
import {rules} from 'utils';

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginForm: FC = () => {
  const {error, isLoading} = useTypedSelector((state) => state.auth);
  const {logIn} = useActions();
  const handleSubmit = (values: LoginFormValues) => {
    logIn(values.username, values.password);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required('Please input your password!')]}
      >
        <Input.Password />
      </Form.Item>
      {error && <Text type="danger">{error}</Text>}
      <Form.Item wrapperCol={{offset: 8, span: 16}}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
