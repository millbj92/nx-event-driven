import styled from 'styled-components';

import { elevation_1, elevation_2 } from '../elevation';

export type SvgButtonProps = {
  rounded?: boolean;
  inverted?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledSvgButtonWithIcon = styled.button<SvgButtonProps>`
  width: 28px;
  height: 28px;
  padding: 7px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.inverted ? '#3448c5' : 'transparent')};
  color: #3448c5;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  border-radius: ${(props) => (props.rounded ? '50%' : '4px')};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
    box-shadow: ${elevation_2};
  }

  &:active {
    transform: scale(1.1);
    box-shadow: ${elevation_1};
  }
  & > svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => (props.inverted ? '#fff' : '#3448c5')};
    stroke: ${(props) => (props.inverted ? '#3448c5' : '#fff')};
  }
`;

export const LoginButton = styled.button`
  width: 8rem;
  height: 1.5rem;
  margin: 0;
  padding: 0.5rem;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e20c69;
  color: #fff;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  border-radius: 2rem;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
    box-shadow: ${elevation_2};
  }

  &:active {
    transform: scale(1.1);
    box-shadow: ${elevation_1};
  }
`;

export const PostButton = (props: SvgButtonProps) => {
  return (
    <StyledSvgButtonWithIcon type="submit" value="Post" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.17 81.45">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <polygon points="29.77 51.79 1.56 46.12 94.77 1.23 43.04 80.38 32.3 54.06 82.57 11.55 29.77 51.79" />
          </g>
        </g>
      </svg>
    </StyledSvgButtonWithIcon>
  );
};
