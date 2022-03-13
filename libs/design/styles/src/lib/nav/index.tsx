import { themeGet } from '@styled-system/theme-get';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const leftToRightAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  92% {
    transform: translateX(106%);
  }
  100% {
    transform: translateX(104%);
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  width: 95%;
  padding: 1rem;
  padding-bottom: 0;
  z-index: 9999;
`;

export const NavMain = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.2rem;
  margin-right: 1rem;
  color: ${themeGet('colors.primary')};
`;

export const NavTextPrimary = styled.span`
  margin-right: 0;
`;

export const NavTextSecondary = styled.span`
  font-weight: normal;
`;

export const NavStart = styled.div`
  margin-right: auto;
  & > a {
    color: ${themeGet('colors.primary')};
    text-decoration: none;

    &:hover,
    &:active,
    &:visited {
      color: ${themeGet('colors.primary')};
    }

    &:focus {
      outline: none;
    }
  }
`;

export const NavEnd = styled.div`
  margin-left: auto;
`;

export interface NavMenuProps {
  isActive: boolean;
}

export const NavMenu = styled.div<NavMenuProps>`
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100vw;
  border-radius: 4px;
  padding: 1rem;
  padding-top: 0;
  z-index: 1;
`;

export const NavMenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;

  & > a {
    font-size: 1rem;
    position: relative;
    width: 100%;
    height: 100%;
    text-decoration: none;

    color: ${themeGet('colors.primary')};

    &::before {
      content: '';
      position: absolute;
      top: -7px;
      left: -105%;
      width: 100%;
      height: 175%;
      z-index: -1;
      background: hsla(232, 78%, 66%, 1);
      background: linear-gradient(
        45deg,
        hsla(232, 78%, 66%, 1) 0%,
        hsla(220, 7%, 92%, 0) 100%
      );
      background: -moz-linear-gradient(
        45deg,
        hsla(232, 78%, 66%, 1) 0%,
        hsla(220, 7%, 92%, 0) 100%
      );
      background: -webkit-linear-gradient(
        45deg,
        hsla(232, 78%, 66%, 1) 0%,
        hsla(220, 7%, 92%, 0) 100%
      );
    }
  }

  &:hover {
    & > a {
      color: ${themeGet('colors.white')};

      &::before {
        animation-name: ${leftToRightAnimation};
        animation-duration: 0.4s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
      }
    }
  }
`;

const StyledNavBurger = styled.div`
  display: block;
  position: relative;
  height: 50px;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;

  & input[type='checkbox'] {
    display: block;
    width: 34px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;

    opacity: 0;
    cursor: pointer;
    z-index: 2;

    -webkit-touch-callout: none;
  }

  & span {
    display: block;
    width: 34px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background-color: ${themeGet('colors.primary')};
    border-radius: 4px;

    z-index: 1;
    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      opacity 0.55s ease;
  }

  & span:first-child {
    transform-origin: 0% 0%;
  }

  & span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  input:checked ~ span {
    opacity: 1;
    transform: rotate(-45deg) translate(-2px, -1px);
    background: ${themeGet('colors.primary_light')};
  }

  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  input:checked ~ span:nth-last-child(2) {
    transform: rotate(45deg) translate(-9px, -8px);
  }

  @media (min-width: 768px) {
    display: block;

    &:focus {
      outline: none;
    }
  }
`;

export const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;

  & > button:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  margin: 0;
  cursor: pointer;
  outline: none;
  font-size: 1.3rem;
  font-weight: semi-bold;
  line-height: 1.2rem;
  color: ${themeGet('colors.primary_light')};

  &:hover {
    background-color: ${themeGet('colors.primary_light')};
    & > a {
      color: ${themeGet('colors.background')};
    }
  }

  & > a {
    color: ${themeGet('colors.primary_light')};
    text-decoration: none;
  }
`;

export type NavBurgerProps = {
  onClicked: () => void;
  isActive: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const NavBurger = (props: NavBurgerProps) => {
  const { onClicked, isActive, ...rest } = props;
  return (
    <StyledNavBurger>
      <input
        onChange={(e) => {
          props.onClicked();
        }}
        checked={isActive}
        type="checkbox"
      />
      <span></span>
      <span></span>
      <span></span>
    </StyledNavBurger>
  );
};
