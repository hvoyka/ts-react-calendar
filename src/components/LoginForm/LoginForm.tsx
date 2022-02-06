import {Button, Form, Input} from 'antd';
import Text from 'antd/lib/typography/Text';
import {useTypedSelector} from 'hooks';
import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import {AuthActionCreators} from 'store/reducers/auth/action-creators';
import {rules} from 'utils';

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const {error, isLoading} = useTypedSelector((state) => state.auth);
  const handleSubmit = (values: LoginFormValues) => {
    console.log('Success:', values);
    dispatch(AuthActionCreators.logIn(values.username, values.password));
  };
  console.log(isLoading);

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
