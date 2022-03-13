import { CubeSpinner } from '@super-rad-poc/design/styles';
import styled from 'styled-components';

const StyledLoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoadingSpinner = () => {
  return (
    <StyledLoadingContainer>
      <CubeSpinner />
      <h3>Loading...</h3>
    </StyledLoadingContainer>
  );
};
