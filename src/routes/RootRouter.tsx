import {Navigate, Route, Routes} from 'react-router-dom';

import {privateRoutes, publicRoutes, ROUTES} from '.';
import {useTypedSelector} from '../hooks';
import {RequireAuth} from './RequireAuth';

export const RootRouter = () => {
  const {isAuth} = useTypedSelector((state) => state.user);

  return (
    <>
      <Routes>
        <Route
          element={<RequireAuth isShowed={!isAuth} redirect={ROUTES.ROOT} />}
        >
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="*" element={<Navigate replace to={ROUTES.LOGIN} />} />
        </Route>

        <Route
          element={<RequireAuth isShowed={isAuth} redirect={ROUTES.LOGIN} />}
        >
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}

          <Route path="*" element={<Navigate replace to={ROUTES.ROOT} />} />
        </Route>
      </Routes>
    </>
  );
};
