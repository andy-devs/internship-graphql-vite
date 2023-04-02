import '@app/assets/styles/reset.css';
import '@app/assets/styles/fonts.css';
import '@app/assets/styles/globals.css';

import App from '@app/app';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
