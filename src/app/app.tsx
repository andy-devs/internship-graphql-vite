import 'app/assets/styles/core.scss';

import { ApolloProvider } from '@apollo/client';
import { ToasterProvider } from '@providers/toaster';
import { client } from '@shared/libs/apollo/apollo-client';
import { RouterProvider } from 'react-router-dom';

import { browserRouter } from './providers/routers';

function App() {
  return (
    <ApolloProvider client={client}>
      <ToasterProvider>
        <RouterProvider router={browserRouter} />
      </ToasterProvider>
    </ApolloProvider>
  );
}

export default App;
