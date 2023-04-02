import { ApolloProvider } from '@apollo/client';
import { client } from '@shared/services/apollo/apollo-client';
import { RouterProvider } from 'react-router-dom';

import { browserRouter } from './providers/routers';
import { ToasterProvider } from './providers/toaster/toaster-provider';

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
