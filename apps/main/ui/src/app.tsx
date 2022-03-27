import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { CustomThemeProvider } from '@super-rad-poc/design/styles';
import { PropsWithChildren, Suspense, useEffect } from 'react';
import styled from 'styled-components';
import {
  AuthProvider,
  LoadingSpinner,
  ProtectedRoute,
  useAuth,
} from '@super-rad-poc/design/components';
import Error404 from './pages/error-404';
import { LandingPage } from './landing-page';
import { Nav } from './nav';
import { MicroApp } from './remote-utils';
import { Theme } from './theme';
import { Route, Routes } from 'react-router-dom';
import { Config } from './config';
import { useAuth0 } from '@auth0/auth0-react';
import { setContext } from '@apollo/link-context';
import { VerificationPage } from './pages/verify';
import { Login } from './pages/login';
import { Register } from './pages/register';
import Confirm from './pages/confirm';
import { useStore } from '@super-rad-poc/common/hooks';

type Props = {};

const AuthorizedApolloProvider = ({ children }: PropsWithChildren<Props>) => {
  const { token } = useAuth();
  const httpLink = createHttpLink({
    uri: 'http://localhost:3333/graphql',
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

const Content = styled.div`
  //overflow: hidden;
`;

export const App = () => {
  const { isAuthenticated } = useStore();

  return (
    <AuthProvider>
      <CustomThemeProvider theme={Theme}>
        <AuthorizedApolloProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <Nav />
            <Content>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verify" element={<VerificationPage />} />
                <Route path="/confirm" element={<Confirm />} />

                <Route
                  path="/home"
                  element={
                    <ProtectedRoute
                      isAuthenticated={isAuthenticated}
                      outlet={<MicroApp remoteName="home" moduleName="Home" />}
                    />
                  }
                />

                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute
                      isAuthenticated={isAuthenticated}
                      outlet={
                        <MicroApp remoteName="profile" moduleName="Profile" />
                      }
                    />
                  }
                />

                <Route path="*" element={<Error404 />} />
              </Routes>
              <Suspense fallback={null}>
                <MicroApp remoteName="messages" moduleName="Messages" />
              </Suspense>
            </Content>
          </Suspense>
        </AuthorizedApolloProvider>
      </CustomThemeProvider>
    </AuthProvider>
  );
};
