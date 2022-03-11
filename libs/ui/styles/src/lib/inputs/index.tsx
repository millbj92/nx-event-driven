import styled from 'styled-components';

export const PostTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  background-color: #fff;
  color: #333;
  border-radius: 4px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  border: 1px solid #d3d2d2;

  @media (min-width: 1440px) {
    width: 30%;
  }

  @media (min-width: 1920px) {
    width: 50%;
  }

  &:focus {
    border: 1px solid #3448c5;
    background-color: #fff;
    color: #333;
  }
`;
