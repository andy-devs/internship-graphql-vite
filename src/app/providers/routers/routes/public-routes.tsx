import SignInPage from '@pages/auth/sign-in';
import SignUpPage from '@pages/auth/sign-up';
import UiKit from '@pages/ui-kit/ui-kit';
import { ROUTES } from '@shared/constants/routes';
import { AuthLayout } from '@widgets/layouts/auth-layout';
import { RouteObject } from 'react-router-dom';

export const publicRoutes: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.SIGN_IN,
        element: <SignInPage />,
      },
      {
        path: ROUTES.SIGN_UP,
        element: <SignUpPage />,
      },
    ],
  },

  {
    path: ROUTES.UI_KIT,
    element: <UiKit />,
  },
];
