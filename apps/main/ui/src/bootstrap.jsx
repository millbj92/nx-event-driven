import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { CustomThemeProvider } from '@super-rad-poc/design/styles';
import React, { Suspense, lazy } from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { LoadingSpinner } from '@super-rad-poc/design/components';
import { Auth0Provider } from '@auth0/auth0-react';
import { LoginCallback } from './pages/login-callback';
import Error404 from './pages/error-404';
import { LandingPage } from './landing-page';
import { Nav } from './nav';
import { MicroApp } from './remote-utils';
import { Theme } from './theme';
import { Router, Switch, Route, Redirect } from 'wouter';
const Content = styled.div`
  padding: 0;
`;
const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <Auth0Provider
      domain="https://auth.sociium.io"
      clientId="TCWdKhoQez2W334EooQI1VCRvxBWRx86"
      redirectUri="https://localhost:3002/callback"
    >
      <CustomThemeProvider theme={Theme}>
        <ApolloProvider client={client}>
          <Nav />
          <Content>
            <Router>
              <Switch>
                <Route path="/" component={LandingPage} />
                <Route path="/callback">
                  <Suspense fallback={<LoadingSpinner />}>
                    <LoginCallback />
                  </Suspense>
                </Route>

                <Route path="/home">
                  <Suspense fallback={<LoadingSpinner />}>
                    <MicroApp remoteName="home" moduleName="Home" />
                  </Suspense>
                </Route>
                <Router path="/profile">
                  <Suspense fallback={<LoadingSpinner />}>
                    <MicroApp remoteName="profile" moduleName="Profile" />
                  </Suspense>
                </Router>
                <Route component={Error404} />
              </Switch>
            </Router>
          </Content>
        </ApolloProvider>
      </CustomThemeProvider>
    </Auth0Provider>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
