import themeGet from '@styled-system/theme-get';
import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

const CubeSpinnerAnimation = keyframes`
   0% {
      transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
   }

   50% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
   }

   100% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
   }
`;

const StyledCubeSpinner = styled.div`
  width: 44px;
  height: 44px;
  animation-name: ${CubeSpinnerAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  transform-style: preserve-3d;
  margin-bottom: 2rem;

  & > div {
    background-color: ${(props) => rgba(props.theme.colors.primary, 0.2)};
    height: 100%;
    position: absolute;
    width: 100%;
    border: 4px solid ${themeGet('colors.primary_light')};
  }

  & div:nth-of-type(1) {
    transform: translateZ(-25px) rotateY(180deg);
  }

  & div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  & div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  & div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  & div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  & > div:nth-of-type(6) {
    transform: translateZ(25px);
  }
`;

export const CubeSpinner = () => {
  return (
    <StyledCubeSpinner>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </StyledCubeSpinner>
  );
};
