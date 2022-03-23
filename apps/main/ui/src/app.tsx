import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { CustomThemeProvider } from '@super-rad-poc/design/styles';
import { PropsWithChildren, Suspense } from 'react';
import styled from 'styled-components';
import {
  AuthProvider,
  LoadingSpinner,
  ProtectedRoute,
} from '@super-rad-poc/design/components';
import { LoginCallback } from './pages/login-callback';
import Error404 from './pages/error-404';
import { LandingPage } from './landing-page';
import { Nav } from './nav';
import { MicroApp } from './remote-utils';
import { Theme } from './theme';
import { Route, Routes } from 'react-router-dom';
import { Config } from './config';
import { useAuth0 } from '@auth0/auth0-react';
import { setContext } from '@apollo/link-context';

type Props = {};

const AuthorizedApolloProvider = ({ children }: PropsWithChildren<Props>) => {
  const { getAccessTokenSilently } = useAuth0();

  const httpLink = createHttpLink({
    uri: 'http://localhost:3333/graphql',
  });

  const authLink = setContext(async () => {
    const token = await getAccessTokenSilently();
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
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
  padding: 0;
`;

export const App = () => {
  return (
    <AuthProvider
      domain={Config.Auth0.domain}
      clientId={Config.Auth0.clientId}
      redirectUri={Config.Auth0.redirectUri}
    >
      <CustomThemeProvider theme={Theme}>
        <AuthorizedApolloProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <Nav />
            <Content>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/callback" element={<LoginCallback />} />

                <Route
                  path="/home"
                  element={<MicroApp remoteName="home" moduleName="Home" />}
                />

                <Route
                  path="/profile"
                  element={
                    <MicroApp remoteName="profile" moduleName="Profile" />
                  }
                />

                <Route path="*" element={<Error404 />} />
              </Routes>
            </Content>
          </Suspense>
        </AuthorizedApolloProvider>
      </CustomThemeProvider>
    </AuthProvider>
  );
};
