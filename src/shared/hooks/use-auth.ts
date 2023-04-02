import { useReactiveVar } from '@apollo/client';
import { isAuthorizedVar } from '@shared/services/apollo/variables';

export const useAuth = () => {
  const isAuthorized = useReactiveVar(isAuthorizedVar);

  return isAuthorized;
};
