import {FC} from 'react';
import {Navbar} from './components';
import {RootRouter} from './routes/RootRouter';
import {Layout} from 'antd';

const App: FC = () => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <RootRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
