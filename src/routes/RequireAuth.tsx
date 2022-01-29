import {FC} from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';

interface RequireAuthProps {
  isShowed: boolean;
  redirect: string;
}

export const RequireAuth: FC<RequireAuthProps> = ({isShowed, redirect}) => {
  const location = useLocation();

  if (isShowed) {
    return <Outlet />;
  }

  return <Navigate to={redirect} state={{from: location}} />;
};
