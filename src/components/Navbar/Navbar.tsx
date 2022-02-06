import {Layout, Menu, Row} from 'antd';

import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {AuthActionCreators} from 'store/reducers/auth/action-creators';
import {useTypedSelector} from '../../hooks';
import {ROUTES} from '../../routes';

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isAuth, user} = useTypedSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(AuthActionCreators.logOut());
  };

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
            <Menu.Item key="logout" onClick={handleLogout}>
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
