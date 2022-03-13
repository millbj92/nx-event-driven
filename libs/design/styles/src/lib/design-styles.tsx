import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DesignStylesProps {}

const StyledDesignStyles = styled.div`
  color: pink;
`;

export function DesignStyles(props: DesignStylesProps) {
  return (
    <StyledDesignStyles>
      <h1>Welcome to DesignStyles!</h1>
    </StyledDesignStyles>
  );
}

export default DesignStyles;
