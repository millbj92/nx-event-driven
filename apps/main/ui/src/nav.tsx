import { useAuth0 } from '@auth0/auth0-react';
import { useClickedOutside, useWindowSize } from '@super-rad-poc/common/hooks';
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
} from '@super-rad-poc/design/styles';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { useStore } from './store';

export const Nav = () => {
  const { isAuthenticated, setIsAuthenticated } = useStore();
  const [burgerActive, setBurgerActive] = useState(false);
  const [isBurgerVisible, setIsBurgerVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated: loggedIn,
    isLoading,
  } = useAuth0();
  function clickedOutside() {
    setBurgerActive(false);
  }

  const onLoginClicked = () => {
    setBurgerActive(false);
    loginWithRedirect();
  };

  useClickedOutside([menuRef], clickedOutside);
  useEffect(() => {
    if (loggedIn) setIsAuthenticated(true);
    else setIsAuthenticated(false);

    if (!windowSize || !windowSize.width) return;

    if (windowSize.width > 768) {
      setIsBurgerVisible(false);
      setBurgerActive(false);
    } else {
      setIsBurgerVisible(true);
    }
  }, [windowSize, loggedIn]);

  return (
    <StyledNav ref={menuRef}>
      <NavStart>
        <Link to="/">
          <NavMain>
            <span style={{ cursor: 'pointer' }}>
              <NavTextPrimary>Soci</NavTextPrimary>
              <NavTextSecondary>ium</NavTextSecondary>
            </span>
          </NavMain>
        </Link>
      </NavStart>
      <NavEnd>
        {!isBurgerVisible && (
          <NavButtons>
            {isAuthenticated && (
              <NavButton>
                <Link href="/home">Home</Link>
              </NavButton>
            )}

            {!isAuthenticated && (
              <NavButton onClick={() => loginWithRedirect()}>
                <span>Login</span>
              </NavButton>
            )}
            {isAuthenticated && (
              <NavButton onClick={() => logout()}>
                <span>Logout</span>
              </NavButton>
            )}
          </NavButtons>
        )}
        {isBurgerVisible && (
          <>
            <NavBurger
              isActive={burgerActive}
              onClicked={() => setBurgerActive(!burgerActive)}
            />
            <NavMenu isActive={burgerActive}>
              {isAuthenticated && (
                <NavMenuItem>
                  <Link onClick={() => setBurgerActive(false)} to="/home">
                    Home
                  </Link>
                </NavMenuItem>
              )}
              <NavMenuItem>
                {isAuthenticated && (
                  <span onClick={() => logout()}>Logout</span>
                )}
                {!isAuthenticated && (
                  <span onClick={() => onLoginClicked()}>Login</span>
                )}
              </NavMenuItem>
            </NavMenu>
          </>
        )}
      </NavEnd>
    </StyledNav>
  );
};
