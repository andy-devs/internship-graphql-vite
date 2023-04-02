import { createBrowserRouter } from 'react-router-dom';
import { NoMatch } from 'shared/components/no-match/no-match';
import { ROUTES } from 'shared/constants/routes';
import { Header } from 'widgets/common/header/header';
import { Sidebar } from 'widgets/common/sidebar/sidebar';
import { WithSidebarLayout } from 'widgets/layouts/with-sidebar-layout/with-sidebar-layout';

import { privateRoutes } from './routes/private-routes';
import { publicRoutes } from './routes/public-routes';
import { PrivateOutlet } from './routing/private-outlet';
import { PublicOutlet } from './routing/public-outlet';

export const browserRouter = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <NoMatch />,
    // TODO: add 404 page
    errorElement: <>404</>,
  },
  {
    element: <PublicOutlet />,
    // TODO: add 404 page
    errorElement: <>404</>,
    children: publicRoutes,
  },
  {
    element: <PrivateOutlet />,
    // TODO: add 404 page
    errorElement: <>404</>,
    children: [
      {
        element: <WithSidebarLayout header={<Header />} sidebar={<Sidebar />} />,
        children: privateRoutes,
      },
    ],
  },
]);
