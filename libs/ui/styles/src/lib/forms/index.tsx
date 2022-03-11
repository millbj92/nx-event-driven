import styled from 'styled-components';

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8rem;
`;

export const SubmitButton = styled.input`
  width: 50%;
  height: 100%;
  border: none;
  outline: none;
  background-color: #3448c5;
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  margin-left: auto;
`;
