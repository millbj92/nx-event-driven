import { useClickedOutside, useWindowSize } from '@super-rad-poc/ui/hooks';
import {
  Nav as StyledNav,
  NavBurger,
  NavButton,
  NavButtons,
  NavEnd,
  NavMain,
  NavMenu,
  NavMenuItem,
  NavStart,
  NavTextPrimary,
  NavTextSecondary,
} from '@super-rad-poc/ui/styles';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [isBurgerVisible, setIsBurgerVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  function clickedOutside() {
    setBurgerActive(false);
  }
  useClickedOutside([menuRef], clickedOutside);
  useEffect(() => {
    if (!windowSize || !windowSize.width) return;

    if (windowSize.width > 768) {
      setIsBurgerVisible(false);
      setBurgerActive(false);
    } else {
      setIsBurgerVisible(true);
    }
  }, [windowSize]);

  return (
    <StyledNav ref={menuRef}>
      <NavStart>
        <Link to="/">
          <NavMain>
            <span>
              <NavTextPrimary>Micro</NavTextPrimary>
              <NavTextSecondary>Social</NavTextSecondary>
            </span>
          </NavMain>
        </Link>
      </NavStart>
      <NavEnd>
        {!isBurgerVisible && (
          <NavButtons>
            <NavButton>
              <Link to="/home">Home</Link>
            </NavButton>
            <NavButton>
              <Link to="/auth">Login / Register</Link>
            </NavButton>
          </NavButtons>
        )}
        {isBurgerVisible && (
          <>
            <NavBurger
              isActive={burgerActive}
              onClicked={() => setBurgerActive(!burgerActive)}
            />
            <NavMenu isActive={burgerActive}>
              <NavMenuItem>
                <Link onClick={() => setBurgerActive(false)} to="/home">
                  Home
                </Link>
              </NavMenuItem>
              <NavMenuItem>
                <Link onClick={() => setBurgerActive(false)} to="/auth">
                  Login/Register
                </Link>
              </NavMenuItem>
            </NavMenu>
          </>
        )}
      </NavEnd>
    </StyledNav>
  );
};
