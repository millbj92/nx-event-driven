import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #fafafa;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  @media (min-width: 1440px) {
    width: 30%;
  }

  @media (min-width: 1920px) {
    width: 50%;
  }
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
  border-bottom: 1px solid #3448c5;
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
  border-top: 1px solid #3448c5;
`;

export const CardFooterContent = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100;
  display: flex;
`;

export const CardFooterLink = styled.span`
  font-size: 1rem;
  color: #3448c5;
  cursor: pointer;
  &:hover {
    color: #d66853;
    text-decoration: underline;
  }
`;

export const CardToolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
