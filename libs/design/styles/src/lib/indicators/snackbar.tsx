import themeGet from '@styled-system/theme-get';
import { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Text } from '../typography';
import { rgba } from 'polished';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

export type StyledSnackbarProps = {
  isOpen: boolean;
  isClosing: boolean;
};

const slideUp = keyframes`
  0% {
    bottom: -3rem;
    opacity: 0;
  }
  100% {
    bottom: 1rem;
    opacity: 1;
  }
`;

const slideToTop = keyframes`
  0% {
    bottom: 1rem;
    opacity: 1;
  }
  100% {
    bottom: 110%;
    opacity: 0;
  }
`;

const StyledSnackbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: transparent;
  pointer-events: none;
`;

const StyledSnackbarContent = styled.div<StyledSnackbarProps & LayoutProps>`
  position: absolute;
  bottom: -3rem;
  width: 25%;
  left: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  padding: 1.5rem;
  background-color: ${themeGet('colors.primary_text')};
  border: ${(props) =>
    `1px solid ${rgba(props.theme.colors.primary_light, 0.4)}`};
  border-radius: ${themeGet('radii.default')};
  box-shadow: ${themeGet('shadows.elevation_1')};
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  animation: ${slideUp} 0.5s ease-in-out;
  ${(props) =>
    props.isClosing &&
    css`
      animation: ${slideToTop} 0.5s ease-in-out;
    `}
  animation-fill-mode: forwards;
  ${layout};
`;

const StyledSnackbarClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  background-color: ${themeGet('colors.primary_text')};
  color: ${themeGet('colors.primary')};
  border-radius: ${themeGet('radii.default')};
  box-shadow: ${themeGet('shadows.elevation_1')};
`;

const StyledSnackbarCloseIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${themeGet('colors.white')};
  }
`;

const StyledSnackbarActionButton = styled.button`
  height: 100%;
  border: none;
  outline: none;
  float: right;

  background-color: transparent;
  color: ${themeGet('colors.secondary_light')};
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-family: ${themeGet('fonts.primary')};
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }

  &:active {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:disabled:hover {
    transform: scale(1);
  }

  &:disabled:active {
    transform: scale(1);
  }

  &:disabled:focus {
    outline: none;
  }
`;

export type SnackbarProps = {
  isOpen: boolean;
  message: string;
  closeBtn: boolean;
  action?: string;
  onClose?: () => void;
  onAction?: () => void;
  readonly created: Date;
};

const snackbarDefaultProps: Partial<SnackbarProps> = {
  isOpen: true,
  closeBtn: false,
  created: new Date(),
  action: 'close',
};

export const Snackbar = ({
  isOpen,
  message,
  closeBtn,
  action,
  onClose,
  onAction,
}: SnackbarProps) => {
  const [isOpenState, setIsOpen] = useState(isOpen);
  const [isClosingState, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpenState === true) {
      setTimeout(() => {
        setIsOpen(false);
      }, 5000);
    }

    if (isOpenState === false) {
      handleClose();
    }
  }, [isOpenState]);

  const handleClose = () => {
    setIsOpen(false);
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      if (onClose) onClose();
    }, 500);
  };

  const handleActionButtonClick = () => {
    if (onAction) onAction();
    handleClose();
  };

  return (
    <StyledSnackbar>
      <StyledSnackbarContent
        width={[1 / 3, 1 / 4]}
        isClosing={isClosingState}
        isOpen={isOpenState}
      >
        <Text color="white">{message}</Text>
        {action && (
          <StyledSnackbarActionButton onClick={handleActionButtonClick}>
            {action}
          </StyledSnackbarActionButton>
        )}

        {closeBtn && (
          <StyledSnackbarClose onClick={handleClose}>
            <StyledSnackbarCloseIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </StyledSnackbarCloseIcon>
          </StyledSnackbarClose>
        )}
      </StyledSnackbarContent>
    </StyledSnackbar>
  );
};

Snackbar.defaultProps = snackbarDefaultProps;

export {
  StyledSnackbar,
  StyledSnackbarContent,
  StyledSnackbarClose,
  StyledSnackbarCloseIcon,
  StyledSnackbarActionButton,
};
