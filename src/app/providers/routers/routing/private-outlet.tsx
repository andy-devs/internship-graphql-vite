import { ROUTES } from '@shared/constants/routes';
import { useAuth } from '@shared/hooks/use-auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export function PrivateOutlet() {
  const token = useAuth();
  const location = useLocation();

  return token ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} />;
}
