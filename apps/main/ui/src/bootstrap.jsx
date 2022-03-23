import * as ReactDOM from 'react-dom';
import { App } from './app';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '@super-rad-poc/design/components';
import { Config } from './config';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
