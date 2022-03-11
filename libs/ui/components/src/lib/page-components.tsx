import React from 'react';
import styled from 'styled-components';

export interface TestComponentsProps {
  children: string | React.ReactNode;
  headerLogo: React.ReactNode;
}

export type HeaderProps = {
  headerLogo: React.ReactNode;
  to: string;
};

const Body = styled.div`
  flex: auto;
`;

export function PageComponent(props: TestComponentsProps) {
  return (
    <>
      {props.headerLogo}

      <Body>{props.children}</Body>
    </>
  );
}

export default PageComponent;
