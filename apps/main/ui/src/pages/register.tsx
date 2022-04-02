import { useStore } from '@super-rad-poc/common/hooks';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Config } from '../config';
import MascotFace from '../images/mascot/mascot_face.png';
import * as joi from 'joi';

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
} from '@super-rad-poc/design/styles';
import themeGet from '@styled-system/theme-get';
import { CheckIcon } from '@super-rad-poc/desgn/icons';
import { useNavigate } from 'react-router-dom';

const UserValidationSchema = joi.object({
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  password: joi
    .string()
    .min(8)
    ?.message('Password must be at least 8 characters long')
    .pattern(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)
    .message('Password must contain at least one special character')
    .pattern(/(?=.*[a-z])(?=.*[A-Z])/)
    .message(
      'Password must contain at least one lowercase and one uppercase character'
    )
    .required(),
  firstName: joi.string().required(),
  lastName: joi.string().required(),
});

const StyledAuth = styled.div`
  position: relative;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const StyledRegisterForm = styled.form`
  display: grid;
  grid-template-columns: 1fr minmax(25px, 50px) 1fr;
  gap: 8px;
  grid-auto-rows: minmax(3rem, auto);
`;

const StyledInfoContainer = styled.div`
  position: relative;
  right: -40px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 0 8px;
  border-left: 1px solid #ccc;

  span:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const StyledInfoItem = styled.span`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { token, setToken } = useStore();
  const {} = useNavigate();

  //Validation
  const [passIsEightChars, setPassIsEightChars] = useState(false);
  const [passIsUpperCase, setPassIsUpperCase] = useState(false);
  const [passIsLowerCase, setPassIsLowerCase] = useState(false);
  const [passIsNumber, setPassIsNumber] = useState(false);
  const [passIsSpecialChar, setPassIsSpecialChar] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmMatches, setConfirmMatches] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (password.length >= 8) {
      setPassIsEightChars(true);
    } else {
      setPassIsEightChars(false);
    }

    if (password.match(/[A-Z]/)) {
      setPassIsUpperCase(true);
    } else {
      setPassIsUpperCase(false);
    }

    if (password.match(/[a-z]/)) {
      setPassIsLowerCase(true);
    } else {
      setPassIsLowerCase(false);
    }

    if (password.match(/[0-9]/)) {
      setPassIsNumber(true);
    } else {
      setPassIsNumber(false);
    }

    if (password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
      setPassIsSpecialChar(true);
    } else {
      setPassIsSpecialChar(false);
    }

    if (password.length > 0 && password === confirmPassword) {
      setConfirmMatches(true);
    } else {
      setConfirmMatches(false);
    }

    if (
      passIsEightChars &&
      passIsUpperCase &&
      passIsLowerCase &&
      passIsNumber &&
      passIsSpecialChar &&
      confirmMatches
    ) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }, [email, password, firstName, lastName, confirmPassword]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { error, value } = UserValidationSchema.validate({
      email,
      password,
      firstName,
      lastName,
    });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${Config.API.REGISTER_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          confirmPassword,
          firstName,
          lastName,
        }),
      });
      const json = await response.json();
      if (json.error) {
        setError(json.error);
      } else {
        setError('');
        navigate('/confirm');
      }
    } catch (e) {
      setError('Something went wrong');
    }
    setLoading(false);
  };

  return (
    <StyledAuth>
      <Card
        style={{
          marginTop: '2rem',
        }}
      >
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
              top: '-5rem',
              left: '2rem',
            }}
            src={MascotFace}
            alt="Mascot Face"
          />
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardBody>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: '1rem',
              width: '100%',
            }}
          >
            <StyledRegisterForm onSubmit={handleSubmit}>
              <FormGroup
                style={{
                  gridColumn: '1',
                  gridRow: '1',
                  width: '100%',
                }}
              >
                <FormInput
                  type="text"
                  autoComplete="firstName"
                  required
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <FormLabel htmlFor="firstName">First Name</FormLabel>
              </FormGroup>
              <span></span>
              <FormGroup
                style={{
                  gridColumn: '3',
                  gridRow: '1',
                  width: '100%',
                }}
              >
                <FormInput
                  type="text"
                  required
                  autoComplete="lastName"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
              </FormGroup>

              <FormGroup
                style={{
                  gridColumn: '1 / -1',
                  gridRow: '2',
                  width: '100%',
                }}
              >
                <FormInput
                  type="email"
                  required
                  autoComplete="email"
                  className="form-control"
                  name="email"
                  aria-required
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel htmlFor="email">Email</FormLabel>
              </FormGroup>

              <FormGroup
                style={{
                  gridColumn: '1 /-1',
                  gridRow: '3',
                  width: '100%',
                }}
              >
                <FormInput
                  type="password"
                  className="form-control"
                  id="password"
                  autoComplete="new-password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormLabel htmlFor="password">Password</FormLabel>
              </FormGroup>
              <span></span>
              <FormGroup
                style={{
                  gridColumn: '1 / -1',
                  gridRow: '4',
                  width: '100%',
                }}
              >
                <FormInput
                  type="password"
                  required
                  autoComplete="new-password"
                  className="form-control"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <FormLabel htmlFor="password">Confirm Password</FormLabel>
              </FormGroup>

              <SubmitButton
                type="submit"
                style={{ width: '100%', gridColumn: '1 / -1', gridRow: '5' }}
                disabled={loading}
              />
              <div
                style={{
                  gridColumn: '1 / -1',
                  gridRow: '6',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <pre>Already have an account?</pre>&nbsp;
                <Link to="/login">Login</Link>
              </div>
            </StyledRegisterForm>
            <StyledInfoContainer>
              <StyledInfoItem>
                <CheckIcon
                  stroke={
                    passwordValid
                      ? '#00C853'
                      : passIsUpperCase && passIsLowerCase
                      ? '#00C853'
                      : '#D50000'
                  }
                  strokeWidth={2}
                  style={{
                    width: '16px',
                    marginRight: '2px',
                    marginTop: '2px',
                  }}
                />
                <sub>
                  Password must contain both uppercase and lowercase characters
                </sub>
              </StyledInfoItem>

              <StyledInfoItem>
                <CheckIcon
                  stroke={
                    passwordValid
                      ? '#00C853'
                      : passIsNumber
                      ? '#00C853'
                      : '#D50000'
                  }
                  strokeWidth={2}
                  style={{
                    width: '16px',
                    marginRight: '2px',
                    marginTop: '2px',
                  }}
                />
                <sub>Password must contain at least one number</sub>
              </StyledInfoItem>

              <StyledInfoItem>
                <CheckIcon
                  stroke={
                    passwordValid
                      ? '#00C853'
                      : passIsSpecialChar
                      ? '#00C853'
                      : '#D50000'
                  }
                  strokeWidth={2}
                  style={{
                    width: '16px',
                    marginRight: '2px',
                    marginTop: '2px',
                  }}
                />
                <sub>Password must contain at least one special character</sub>
              </StyledInfoItem>
              <StyledInfoItem>
                <CheckIcon
                  stroke={
                    passwordValid
                      ? '#00C853'
                      : passIsEightChars
                      ? '#00C853'
                      : '#D50000'
                  }
                  strokeWidth={2}
                  style={{
                    width: '16px',
                    marginRight: '2px',
                    marginTop: '2px',
                  }}
                />
                <sub>Password must be at least 8 characters long</sub>
              </StyledInfoItem>
              <StyledInfoItem>
                <CheckIcon
                  stroke={
                    passwordValid
                      ? '#00C853'
                      : confirmMatches
                      ? '#00C853'
                      : '#D50000'
                  }
                  strokeWidth={2}
                  style={{
                    width: '16px',
                    marginRight: '2px',
                    marginTop: '2px',
                  }}
                />
                <sub>Confirm Password must match Password</sub>
              </StyledInfoItem>
            </StyledInfoContainer>
          </div>
        </CardBody>
      </Card>
      {loading && <CubeSpinner />}
      {error && <Snackbar message={error} />}
    </StyledAuth>
  );
};
