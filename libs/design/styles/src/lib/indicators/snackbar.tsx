import themeGet from '@styled-system/theme-get';
import { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Text } from '../typography';
import { rgba } from 'polished';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';
import {
  SnackbarNotification,
  SnackbarProps,
} from '@super-rad-poc/common/models';

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

const snackbarDefaultProps: Partial<SnackbarProps> = {
  isOpen: true,
  createdAt: new Date(),
  action: 'close',
};

export const Snackbar = ({
  id,
  isOpen,
  message,
  action,
  createdAt,
  closeHandler,
  actionHandler,
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
      if (closeHandler) closeHandler();
    }, 500);
  };

  const handleActionButtonClick = () => {
    if (actionHandler) actionHandler();
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
      </StyledSnackbarContent>
    </StyledSnackbar>
  );
};

Snackbar.defaultProps = snackbarDefaultProps;

export const SnackManager = () => {
  const [snacks, setSnacks] = useState<SnackbarNotification[]>([]);
  const addSnack = (snack: SnackbarProps) => {
    setSnacks((snacks) => [...snacks, snack]);
  };

  const removeSnack = (id: string) => {
    setSnacks((snacks) => snacks.filter((snack) => snack.id !== id));
  };

  return (
    <>
      {snacks &&
        snacks.map((snack) => (
          <Snackbar
            key={snack.id}
            {...snack}
            closeHandler={() => {
              setSnacks(snacks.filter((s) => s.id !== snack.id));
            }}
          />
        ))}
    </>
  );
};

export {
  StyledSnackbar,
  StyledSnackbarContent,
  StyledSnackbarActionButton,
};
