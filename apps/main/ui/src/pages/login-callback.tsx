import { LoadingSpinner } from '@super-rad-poc/design/components';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation as useWouterLocation } from 'wouter';
import { Subtitle } from '@super-rad-poc/design/styles';
import { useAuth0 } from '@auth0/auth0-react';
import { useStore } from './../store';

interface Props {}

const StyledCallbackPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.light_text};
  color: ${(props) => props.theme.colors.primary_text};
`;

export const LoginCallback = () => {
  const [location, setLocation] = useWouterLocation();
  const {
    user: auth0User,
    isAuthenticated: isAuth,
    isLoading,
    getAccessTokenSilently,
    getIdTokenClaims,
  } = useAuth0();
  const {
    name,
    picture,
    email,
    email_verified,
    given_name,
    family_name,
    profile,
  } = auth0User || {};
  const { setIsAuthenticated, setUser, setToken } = useStore();
  useEffect(() => {
    async function getToken() {
      const token = await getAccessTokenSilently();
      setToken(token);
    }
    if (!isAuth && !isLoading) {
      setIsAuthenticated(false);
      setLocation('/');
    }
    if (isAuth && !isLoading) {
      setLocation('/home');
      setUser({
        name,
        picture,
        email,
        email_verified,
        given_name,
        family_name,
        profile,
      });
      console.log(getIdTokenClaims());
      getToken();
      setIsAuthenticated(true);
    }
  });

  return (
    <StyledCallbackPage>
      <Subtitle>Just a sec!</Subtitle>
      <br />
      <LoadingSpinner />
    </StyledCallbackPage>
  );
};
