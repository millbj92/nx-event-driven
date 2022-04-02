import { useState } from 'react';
import styled from 'styled-components';
import MascotFace from '../images/mascot/mascot_face.png';
import MascotHappy from '../images/mascot/mascot_hello.png';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { plainToClass } from 'class-transformer';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CubeSpinner,
  FormInput,
  FormGroup,
  FormLabel,
  SubmitButton,
  Snackbar,
  Link,
  Title,
  Subtitle,
} from '@super-rad-poc/design/styles';
import { useAuth } from '@super-rad-poc/design/components';
import { useSearchParams } from 'react-router-dom';
import { useStore } from '@super-rad-poc/common/hooks';

import { User as IUser } from '@prisma/client/users';
export class User implements IUser {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public verification: string,
    public friendRequestIds: string[],
    public createdAt: Date,
    public updatedAt: Date,
    public isActive: boolean,
    public isBanned: boolean,
    public verified: boolean,
    public banDuration: number,
    public middle_name: string,
    public nickname: string,
    public preferred_username: string,
    public profile: string,
    public picture: string,
    public website: string,
    public birthdate: Date,
    public gender: string,
    public zoneInfo: string,
    public locale: string,
    public phone_number: string,
    public phone_number_verified: boolean
  ) {}
}
interface JwtPayload {
  aud: string;
  data: Partial<User>;
  exp: number;
  iat: number;
  iss: string;
  kid: string;
  scope: string;
  sub: string;
}

const StyledAuth = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { onLogin } = useAuth();
  const [authenticated, setAuthenticated] = useState(false);
  const { setToken, setUser } = useStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    onLogin(
      {
        email,
        password,
      },
      (jwt?: string, e?: Error) => {
        if (e) {
          setError(e.message);
        }
        if (jwt) {
          setLoading(false);
          setAuthenticated(true);
          setToken(jwt);

          const decoded = jwt_decode(jwt) as JwtPayload;
          setUser(plainToClass(User, decoded.data));
          console.log(jwt);

          setTimeout(() => {
            navigate('/home');
          }, 5000);
        }
      }
    );
  };

  return (
    <StyledAuth>
      {loading && <CubeSpinner />}
      {authenticated ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <Title>Success!</Title>
            <Subtitle>You are now logged in.</Subtitle>
            <div>
              <p>We are redirecting you now. If it takes to long, you can </p>
              <Link to={'/'}>click here</Link>
            </div>
          </div>
          <div style={{ flex: '1 1 auto' }}>
            <img src={MascotHappy} style={{ width: '8rem' }} alt="mascot" />
          </div>
        </div>
      ) : (
        <Card>
          <CardHeader
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img
              style={{
                width: '8rem',
                position: 'absolute',
                top: '-7rem',
                left: '5rem',
              }}
              src={MascotFace}
              alt="Mascot Face"
            />
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardBody>
            <form
              onSubmit={(e) => handleSubmit(e)}
              style={{ marginBottom: '.5rem' }}
            >
              <FormGroup>
                <FormInput
                  style={{
                    width: 'auto',
                  }}
                  type="email"
                  className="form-control"
                  id="email"
                  autoComplete="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel htmlFor="email">Email</FormLabel>
              </FormGroup>
              <FormGroup>
                <FormInput
                  style={{
                    width: 'auto',
                  }}
                  type="password"
                  autoComplete="current-password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormLabel htmlFor="password">Password</FormLabel>
              </FormGroup>
              <SubmitButton
                style={{
                  width: '100%',
                }}
                type="submit"
                disabled={loading}
              />
            </form>

            <span
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <pre>Need an account? </pre>&nbsp;
              <Link to="/register">Register</Link>
            </span>
          </CardBody>
        </Card>
      )}
      {error && <Snackbar message={error} />}
    </StyledAuth>
  );
};
