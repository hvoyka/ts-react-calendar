import {Layout, Menu, Row} from 'antd';
import {useActions} from 'hooks/userActions';
import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTypedSelector} from '../../hooks';
import {ROUTES} from '../../routes';

export const Navbar: FC = () => {
  const navigate = useNavigate();

  const {isAuth, user} = useTypedSelector((state) => state.auth);
  const {logOut} = useActions();

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <Menu
            theme="dark"
            mode="horizontal"
            disabledOverflow
            selectable={false}
          >
            <Menu.Item key="username">{user.username}</Menu.Item>
            <Menu.Item key="logout" onClick={logOut}>
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
