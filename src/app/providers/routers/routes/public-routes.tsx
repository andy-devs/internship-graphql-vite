import { CreatePasswordPage } from 'pages/create-password/create-password';
import { FormsPage } from 'pages/develop/forms/forms';
import { TablePage } from 'pages/develop/table/table';
import { UiKit } from 'pages/develop/ui-kit/ui-kit';
import { EmailSentPage } from 'pages/restore-password/email-sent';
import { NewPasswordPage } from 'pages/restore-password/new-password';
import { RestorePasswordPage } from 'pages/restore-password/restore-password';
import { SignInPage } from 'pages/sign-in/sign-in';
import { RouteObject } from 'react-router-dom';
import { ROUTES } from 'shared/constants/routes';
import { Header } from 'widgets/common/header/header';
import { SimpleLayout } from 'widgets/layouts/simple-layout/simple-layout';

export const publicRoutes: RouteObject[] = [
  {
    element: <SimpleLayout header={<Header />} />,
    children: [
      {
        path: ROUTES.SIGN_IN,
        element: <SignInPage />,
      },
      {
        path: ROUTES.CREATE_PASSWORD,
        element: <CreatePasswordPage />,
      },
      {
        path: ROUTES.RESTORE_PASSWORD,
        element: <RestorePasswordPage />,
      },
      {
        path: ROUTES.EMAIL_SENT,
        element: <EmailSentPage />,
      },
      {
        path: ROUTES.NEW_PASSWORD,
        element: <NewPasswordPage />,
      },
    ],
  },

  {
    path: ROUTES.UI_KIT,
    element: <UiKit />,
  },
  {
    path: ROUTES.FORMS,
    element: <FormsPage />,
  },
  {
    path: ROUTES.TABLE,
    element: <TablePage />,
  },
];
