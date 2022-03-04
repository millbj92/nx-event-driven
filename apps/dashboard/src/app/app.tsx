import { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Posts } from './components/PostCard';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Suspense fallback={<p>Loading...</p>}>
        <Posts />
      </Suspense>
    </StyledApp>
  );
}

export default App;
