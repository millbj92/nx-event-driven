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
import { useState } from 'react';
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

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, name, password, confirmPassword);
  };

  return (
    <StyledAuth>
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
            <FormInput
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <AccentButton type="submit">Submit</AccentButton>
          </form>
        </CardBody>
        <CardFooter style={{ justifyContent: 'center', border: 'none' }}>
          <CardFooterContent>
            <p>Already a member?</p>
            &nbsp;
            <CardFooterLink>
              <Link href="/auth/login">Login</Link>
            </CardFooterLink>
          </CardFooterContent>
        </CardFooter>
      </Card>
    </StyledAuth>
  );
}
