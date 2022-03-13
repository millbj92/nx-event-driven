import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';

export const FormTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  outline: none;
  resize: none;
  margin-bottom: 0.5rem;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSizes[2]};
  background-color: ${themeGet('colors.white')};
  color: ${themeGet('colors.primary_text')};
  border-radius: ${themeGet('radii.default')};
  box-shadow: ${themeGet('shadows.elevation_1')};
  border: 1px solid ${themeGet('colors.gray_light')};

  &:focus,
  &:active {
    border: 1px solid ${themeGet('colors.primary')};
  }
`;

export const FormInput = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  outline: none;
  margin-bottom: 0.5rem;

  font-size: ${(props) => props.theme.fontSizes[2]};
  background-color: ${themeGet('colors.white')};
  color: ${themeGet('colors.primary_text')};
  border-radius: ${themeGet('radii.default')};
  box-shadow: ${themeGet('shadows.elevation_1')};
  border: 1px solid ${themeGet('colors.gray_light')};

  &:focus,
  &:active {
    border: 1px solid ${themeGet('colors.primary')};
  }
`;
