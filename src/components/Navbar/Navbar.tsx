import {Layout, Menu, Row} from 'antd';

import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {USER_NAME} from '../../constants';
import {useTypedSelector} from '../../hooks';
import {ROUTES} from '../../routes';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const {isAuth} = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="username">{USER_NAME}</Menu.Item>
            <Menu.Item key="logout" onClick={() => console.log('Logout')}>
              Logout
            </Menu.Item>
          </Menu>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="login" onClick={() => navigate(ROUTES.LOGIN)}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};
