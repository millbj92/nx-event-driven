import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';

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
  background-color: ${(props) =>
    props.inverted ? themeGet('colors.primary') : 'transparent'};
  color: ${themeGet('colors.primary')};
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-family: ${themeGet('fonts.primary')};
  border-radius: ${(props) =>
    props.rounded ? themeGet('radii.circle') : themeGet('radii.default')};
  box-shadow: ${themeGet('shadows.elevation_1')};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
    box-shadow: ${themeGet('shadows.elevation_2')};
  }

  &:active {
    transform: scale(1.1);
    box-shadow: ${themeGet('shadows.elevation_1')};
  }
  & > svg {
    width: 100%;
    height: 100%;
    fill: ${(props) =>
      props.inverted ? themeGet('colors.white') : themeGet('colors.primary')};
    stroke: ${(props) =>
      props.inverted ? themeGet('colors.primary') : themeGet('colors.white')};
  }
`;

export const AccentButton = styled.button`
  width: 8rem;
  height: 2rem;
  margin: 0;
  padding: 0.5rem;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${themeGet('colors.accent')};
  color: ${themeGet('colors.white')};
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-family: ${themeGet('fonts.primary')};
  border-radius: ${themeGet('radii.lg')};
  box-shadow: ${themeGet('shadows.elevation_1')};

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
    box-shadow: ${themeGet('shadows.elevation_2')};
  }

  &:active {
    transform: scale(1.1);
    box-shadow: ${themeGet('shadows.elevation_1')};
  }
`;

export const AccentLink = styled.span`
  width: 8rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0.5rem;
    border: none;
    outline: none;
    text-decoration: none;

    background-color: ${themeGet('colors.accent')};
    color: ${themeGet('colors.white')};
    font-size: ${(props) => props.theme.fontSizes[2]};
    font-family: ${themeGet('fonts.primary')};
    border-radius: ${themeGet('radii.lg')};
    box-shadow: ${themeGet('shadows.elevation_1')};

    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.3);
      box-shadow: ${themeGet('shadows.elevation_2')};
    }

    &:active {
      transform: scale(1.1);
      box-shadow: ${themeGet('shadows.elevation_1')};
    }
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
