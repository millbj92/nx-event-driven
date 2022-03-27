import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';

export const CircleImage = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin: 1em auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 99em;
  border: 1px solid #fff;
`;

export const AvatarContainer = styled.figure`
  z-index: 1;
  border-radius: 28px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${themeGet('colors.primary', '#009E7F')} solid 2px;
  img {
    width: 100%;
    border-radius: 30px;
    height: auto;
  }
`;
