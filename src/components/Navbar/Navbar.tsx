import {Layout, Menu, Row} from 'antd';

import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {USER_NAME} from '../../constants';
import {useTypedSelector} from '../../hooks';
import {ROUTES} from '../../routes';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const {isAuth} = useTypedSelector((state) => state.user);

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="1">{USER_NAME}</Menu.Item>
            <Menu.Item key="2" onClick={() => console.log('Logout')}>
              Logout
            </Menu.Item>
          </Menu>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key="1" onClick={() => navigate(ROUTES.LOGIN)}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};
