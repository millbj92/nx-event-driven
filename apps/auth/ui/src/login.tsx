import {
  Card,
  CardBody,
  CardFooter,
  CardFooterContent,
  CardFooterLink,
  CardHeader,
  CardTitle,
  AccentButton,
  FormInput,
} from '@super-rad-poc/design/styles';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'wouter';

const StyledAuth = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <StyledAuth>
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
            <FormInput
              placeholder="Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <AccentButton style={{ marginLeft: '1.5rem' }} type="submit">
              Login
            </AccentButton>
          </form>
        </CardBody>
        <CardFooter style={{ justifyContent: 'center', border: 'none' }}>
          <CardFooterContent>
            <p>Don't have an account?</p>
            &nbsp;
            <CardFooterLink>
              <Link href="/auth/register">Register</Link>
            </CardFooterLink>
          </CardFooterContent>
        </CardFooter>
      </Card>
    </StyledAuth>
  );
}
