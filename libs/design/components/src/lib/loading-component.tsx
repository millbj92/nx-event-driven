import { CubeSpinner } from '@super-rad-poc/design/styles';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const loadingTexts = [
  'Activating astounding',
  'Beginning brilliance',
  'Creating captivating',
  'Extracting extraordinary',
  'Filling with fascinating',
  'Generating greatness',
  'Initializing incredible',
  'Making magnificence',
  'Syncronizing spectacular',
  'Quantifying quality',
  'Rendering remarkable',
  'Preparing phenominal',
];

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
  const [loadingText, setLoadingText] = useState(
    loadingTexts[Math.floor(Math.random() * loadingTexts.length)]
  );

  const changeLoadingText = () => {
    const index = Math.floor(Math.random() * loadingTexts.length);
    setLoadingText(loadingTexts[index]);
  };

  useEffect(() => {
    const interval = setInterval(changeLoadingText, 3000);
    return () => clearInterval(interval);
  }, [loadingText]);

  return (
    <StyledLoadingContainer>
      <CubeSpinner />
      <br />
      <h3>{loadingText}.</h3>
    </StyledLoadingContainer>
  );
};
