import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { themeGet } from '@styled-system/theme-get';
import { CustomThemeProvider } from '@super-rad-poc/design/styles';
import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { LoadingSpinner } from '@super-rad-poc/design/components';

import { LandingPage } from './landing-page';
import { Nav } from './nav';
import { MicroApp } from './remote-utils';
import { Theme } from './theme';

import { Router, Switch, Route } from 'wouter';

const Content = styled.div`
  padding: 0;
`;
const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <CustomThemeProvider theme={Theme}>
      <ApolloProvider client={client}>
        <Nav />
        <Content>
          <Route path="/" component={LandingPage} />
          <Router base="/auth">
            <Suspense fallback={<LoadingSpinner />}>
              <MicroApp remoteName="auth" moduleName="Auth" />
            </Suspense>
          </Router>
          <Route path="/home">
            <Suspense fallback={<LoadingSpinner />}>
              <MicroApp remoteName="home" moduleName="Home" />
            </Suspense>
          </Route>
        </Content>
      </ApolloProvider>
    </CustomThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
