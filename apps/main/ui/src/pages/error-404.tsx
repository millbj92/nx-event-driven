import {
  AccentLink,
  HeadingTertiary,
  Subtitle,
  Title,
} from '@super-rad-poc/design/styles';
import * as React from 'react';
import MascotSad from '../images/mascot/mascot_sad.png';
import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledError = styled.div`
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

export default function Error404() {
  return (
    <StyledError>
      <Title color="#fafafa">Uh oh! - 404</Title>
      <Subtitle color="#fafafa">Looks like we can't find that page.</Subtitle>
      <StyledTextContent>
        <span>
          Please{' '}
          <StyledLink>
            <Link to="/">Go Home</Link>{' '}
          </StyledLink>
          and try again.
        </span>
        <br />
        <sub>
          If this keeps happening, please{' '}
          <StyledLink>
            <a target={'_blank'} href="mailto:support@sociium.io">
              contect support
            </a>
          </StyledLink>
        </sub>
      </StyledTextContent>
      <div>
        <img src={MascotSad} style={{ width: '10rem' }} alt="Sad Mascot" />
      </div>
    </StyledError>
  );
}
