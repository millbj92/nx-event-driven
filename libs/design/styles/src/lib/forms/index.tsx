import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

export const PostForm = styled.form<LayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8rem;
  ${layout};
`;

export const SubmitButton = styled.input`
  width: 50%;
  height: 100%;
  border: none;
  outline: none;

  background-color: ${themeGet('colors.accent')};
  color: ${themeGet('colors.white')};
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-family: ${themeGet('fonts.primary')};
  padding: 10px;
  border-radius: ${themeGet('radii.default')};
  box-shadow: ${themeGet('shadows.elevation_1')};
  margin-left: auto;
`;
