import { useNavigate } from 'react-router-dom';
import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';

export type AuthOptions = Auth0ProviderOptions;

export const AuthProvider = ({
  children,
  domain,
  clientId,
  ...options
}: AuthOptions) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      {...options}
    >
      {children}
    </Auth0Provider>
  );
};
