import { LoadingSpinner } from '@super-rad-poc/design/components';
import React, { Suspense } from 'react';
import styled from 'styled-components';

import { Posts } from './PostCard';
import PostText from './PostText';

const HomeContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;

const Home = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeContainer>
        <PostText />
        <Posts />
      </HomeContainer>
    </Suspense>
  );
};

export { Home };
