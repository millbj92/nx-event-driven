import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 1rem;

  background-color: ${themeGet('colors.light_text')};
  border-radius: ${themeGet('radii.default')};
  box-shadow: ${themeGet('shadows.container')};
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 40%;
  padding: 0.2rem;

  border-bottom: 1px solid ${themeGet('colors.primary')};
`;

export const CardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CardDate = styled.sub`
  font-size: 0.8rem;
  margin-left: auto;
  color: #3448c5;
`;

export const CardImage = styled.img`
  position: absolute;
  top: -3.75rem;
  left: 1.5rem;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CardBody = styled.article`
  font-size: 1rem;
  padding: 2rem;
`;

export const CardFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  border-top: 1px solid ${themeGet('colors.primary')};
`;

export const CardFooterContent = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100;
  display: flex;
`;

export const CardFooterLink = styled.span`
  display: flex;
  & > a {
    font-size: 1rem;
    color: ${themeGet('colors.primary')};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    &:hover,
    &:focus {
      color: ${themeGet('colors.secondary')};
    }
  }
`;

export const CardToolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
