import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';
import { PostIcon } from '@super-rad-poc/desgn/icons';

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
  & > a,
  span {
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
    cursor: pointer;

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
      <PostIcon />
    </StyledSvgButtonWithIcon>
  );
};
