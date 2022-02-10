import {FC, useLayoutEffect} from 'react';
import {Navbar} from './components';
import {RootRouter} from './routes/RootRouter';
import {Layout} from 'antd';
import {useActions} from 'hooks/userActions';
import {StorageService} from 'services';

const App: FC = () => {
  const {setUser, setIsAuth} = useActions();

  useLayoutEffect(() => {
    const isAuth = StorageService.getItem('auth');
    const username = StorageService.getItem('user') || '';
    if (isAuth) {
      setUser({username, password: ''});
      setIsAuth(true);
    }
  }, []);

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
