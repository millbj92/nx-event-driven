import {
  Card,
  CardBody,
  CardFooter,
  CardFooterContent,
  CardFooterLink,
  CardHeader,
  CardTitle,
  LoginButton,
} from '@super-rad-poc/ui/styles';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledLogin = styled.div`
  input {
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #3448c5;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <StyledLogin>
      <Card>
        <CardHeader>
          <CardTitle style={{ margin: '0 auto', marginBottom: '1rem' }}>
            Login
          </CardTitle>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <input
              placeholder="Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton type="submit">Login</LoginButton>
          </form>
        </CardBody>
        <CardFooter style={{ justifyContent: 'center', border: 'none' }}>
          <CardFooterContent>
            <p>Don't have an account?</p>
            &nbsp;
            <CardFooterLink>Register</CardFooterLink>
          </CardFooterContent>
        </CardFooter>
      </Card>
    </StyledLogin>
  );
}
