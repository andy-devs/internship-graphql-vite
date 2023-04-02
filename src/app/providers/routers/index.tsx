import { createBrowserRouter } from 'react-router-dom';

import { publicRoutes } from './routes/public-routes';
import { PrivateOutlet } from './routing/private-outlet';
import { PublicOutlet } from './routing/public-outlet';

export const browserRouter = createBrowserRouter([
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
    // children: [
    //   {
    //     element: <WithSidebarLayout header={<Header />} sidebar={<Sidebar />} />,
    //     children: privateRoutes,
    //   },
    // ],
  },
]);
