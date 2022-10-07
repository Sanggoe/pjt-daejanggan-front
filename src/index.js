import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { AuthContextProvider } from './store/auth-context';
import { VerseContextProvider } from './store/verses-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <VerseContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VerseContextProvider>
  </AuthContextProvider>
);
