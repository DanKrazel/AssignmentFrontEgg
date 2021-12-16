import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-or947vu8mzpj.frontegg.com',
  clientId: 'b9e1987c-73a1-48b8-9b89-df9b86c62a42'
};

const history = createBrowserHistory();

// Replace this with your app logo 👇
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';

ReactDOM.render(
    <FronteggProvider history={history} contextOptions={contextOptions} headerImage={headerImage}>
      <App />
    </FronteggProvider>,
  document.getElementById('root')
);