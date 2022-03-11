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
import { useState } from 'react';
import styled from 'styled-components';

const StyledRegister = styled.div`
  input {
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #3448c5;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

export const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, name, password, confirmPassword);
  };

  return (
    <StyledRegister>
      <Card>
        <CardHeader>
          <CardTitle style={{ margin: '0 auto', marginBottom: '1rem' }}>
            Register
          </CardTitle>
        </CardHeader>
        <CardBody>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
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
              placeholder="Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <LoginButton type="submit">Login</LoginButton>
          </form>
        </CardBody>
        <CardFooter style={{ justifyContent: 'center', border: 'none' }}>
          <CardFooterContent>
            <p>Already a member?</p>
            &nbsp;
            <CardFooterLink>Login</CardFooterLink>
          </CardFooterContent>
        </CardFooter>
      </Card>
    </StyledRegister>
  );
};
