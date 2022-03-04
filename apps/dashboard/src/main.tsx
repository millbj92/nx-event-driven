import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

declare global {
  interface Window {
    renderDashboard: (containerId: string) => void;
    unmountDashboard: (containerId: string) => void;
  }
}

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

window.renderDashboard = (containerId) => {
  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById(containerId)
  );
};

window.unmountDashboard = (containerId) => {
  const el = document.getElementById(containerId);
  if (!el) {
    return;
  }

  ReactDOM.unmountComponentAtNode(el);
};
