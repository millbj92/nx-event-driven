import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  input {
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #3448c5;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    margin: 0.5rem;
    padding: 0.2rem;
    border: 1px solid #3448c5;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

export function App() {
  return (
    <StyledApp>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </StyledApp>
  );
}

export default App;
