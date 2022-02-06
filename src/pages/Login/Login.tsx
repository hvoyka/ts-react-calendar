import {Card, Layout, Row} from 'antd';
import React, {FC} from 'react';
import {LoginForm} from '../../components';

export const Login: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};
