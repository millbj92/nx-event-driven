import {
  AccentLink,
  HeadingTertiary,
  Subtitle,
  Title,
} from '@super-rad-poc/design/styles';
import * as React from 'react';
import { Link } from '@super-rad-poc/design/styles';
import MascotExplain from '../images/mascot/mascot_explain.png';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledConfirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${themeGet('colors.primary_text')};
  color: ${themeGet('colors.light_text')};
`;

const StyledLink = styled.span`
  color: ${themeGet('colors.accent')};
  font-size: ${(props) => props.theme.fontSizes[2]};

  & > a {
    color: ${themeGet('colors.accent')};
    font-size: ${(props) => props.theme.fontSizes[2]};
    text-decoration: none;

    &:hover {
      color: ${themeGet('colors.light_text')};
    }
  }
`;

const StyledTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export default function Confirm() {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  });

  return (
    <StyledConfirm>
      <Title color="#fafafa">Thanks for signing up!</Title>
      <p color="#fafafa">
        In order to keep everyone safe, we require that you verify your email
        before you can log in.
      </p>
      <StyledTextContent>
        <p color="#fafafa">Please check your email for a verification link.</p>
        <p>
          You will be automatically redirected to the home page in a couple
          seconds.{' '}
        </p>
        <p>
          {' '}
          Otherwise, you can also <Link to="/">click here</Link>
        </p>
      </StyledTextContent>
      <div>
        <img src={MascotExplain} style={{ width: '10rem' }} alt="Sad Mascot" />
      </div>
    </StyledConfirm>
  );
}
