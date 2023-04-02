import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes';
import { useAuth } from 'shared/hooks/use-auth';

export function PublicOutlet() {
  const token = useAuth();
  const location = useLocation();

  return token ? <Navigate to={ROUTES.ROOT} state={{ from: location }} /> : <Outlet />;
}
