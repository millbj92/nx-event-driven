import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { themeGet } from '@styled-system/theme-get';
import { CustomThemeProvider } from '@super-rad-poc/ui/styles';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { LandingPage } from './landing-page';
import { Nav } from './nav';
import { MicroApp } from './remote-utils';
import { Theme } from './theme';

const Content = styled.div`
  padding: ${themeGet('space.2')}rem;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;


const client= new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
});


const App = () => {
  return (
    <CustomThemeProvider theme={Theme}>
      <ApolloProvider client={client}>
      <HashRouter>
          <Nav />
          <Content>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="auth" element={
                <MicroApp remoteName='auth' moduleName='Auth' />
              } />
              <Route path="home" element={
                <MicroApp remoteName='home' moduleName='Home' />
              }
              />
            </Routes>
          </Content>
      </HashRouter>
      </ApolloProvider>
    </CustomThemeProvider>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
