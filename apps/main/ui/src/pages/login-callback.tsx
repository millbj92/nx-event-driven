import { LoadingSpinner } from '@super-rad-poc/design/components';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Subtitle } from '@super-rad-poc/design/styles';
import { useAuth0 } from '@auth0/auth0-react';
import { useStore } from '@super-rad-poc/common/hooks';

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
  const navigate = useNavigate();
  const {
    user: auth0User,
    isAuthenticated: isAuth,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();
  const { setIsAuthenticated, setUser, setToken } = useStore();
  useEffect(() => {
    async function getToken() {
      const token = await getAccessTokenSilently();
      setToken(token);
    }
    if (!isAuth && !isLoading) {
      setIsAuthenticated(false);
      navigate('/');
    }
    if (isAuth && !isLoading) {
      setUser(auth0User);
      getToken();
      setIsAuthenticated(true);
      navigate('/home');
    }
  }, [
    isAuth,
    isLoading,
    setIsAuthenticated,
    setUser,
    setToken,
    getAccessTokenSilently,
    auth0User,
  ]);

  return (
    <StyledCallbackPage>
      <LoadingSpinner />
    </StyledCallbackPage>
  );
};
