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
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background-color: ${themeGet('colors.accent')};
  color: ${themeGet('colors.white')};
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-family: ${themeGet('fonts.primary')};
  padding: 10px;
  border-radius: ${themeGet('radii.default')};
  box-shadow: ${themeGet('shadows.elevation_1')};
  margin-left: auto;

  &:hover {
    box-shadow: ${themeGet('shadows.elevation_2')};
    transform: translateY(-2px) scale(1.02);
  }

  &:active,
  &:focus {
    box-shadow: ${themeGet('shadows.elevation_3')};
    transform: translateY(0) scale(1);
  }

  &:disabled {
    background-color: ${themeGet('colors.gray_light')};
    color: ${themeGet('colors.gray_dark')};
    cursor: not-allowed;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-bottom: 2rem;
  position: relative;

  input {
    &::placeholder {
      opacity: 0;
    }
  }

  label {
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 10px;
    left: 10px;
    color: ${themeGet('colors.gray_light')};
    font-size: ${(props) => props.theme.fontSizes[2]};
    font-family: ${themeGet('fonts.primary')};
    color: ${themeGet('colors.primary_text')};
    margin-bottom: 0.5rem;
  }

  input:focus ~ label,
  textarea:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  textarea:not(placeholder-shown) ~ label {
    color: ${themeGet('colors.primary')};
    font-size: ${(props) => props.theme.fontSizes[2]};
    font-family: ${themeGet('fonts.primary')};
    font-weight: ${themeGet('fontWeights.normal')};
    text-shadow: ${themeGet('shadows.elevation_1')};
    top: -0.25rem;
    left: 1px;
    transform: translateY(-100%);
  }
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: ${themeGet('colors.gray_light')};
  color: ${themeGet('colors.primary_text')};
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-family: ${themeGet('fonts.primary')};
  padding: 10px;
  border-radius: ${themeGet('radii.default')};
  box-shadow: ${themeGet('shadows.elevation_1')};
  margin-left: auto;

  &:focus,
  &:active {
    border: 1px solid ${themeGet('colors.primary')};
  }
`;

export const FormLabel = styled.label`
  pointer-events: none;
`;
//   font-size: ${(props) => props.theme.fontSizes[2]};
//   font-family: ${themeGet('fonts.primary')};
//   color: ${themeGet('colors.accent')};
//   margin-bottom: 0.5rem;
// `;
