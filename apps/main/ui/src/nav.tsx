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
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '@super-rad-poc/common/hooks';

type AuthNavBtnProps = {
  logout: () => void;
};
const AuthenticatedNavButtons = ({ logout }: AuthNavBtnProps) => {
  return (
    <>
      <NavButton onClick={() => logout()}>
        <span>Logout</span>
      </NavButton>
      <NavButton>
        <Link to="/profile">Profile</Link>
      </NavButton>
    </>
  );
};

type UnauthNavProps = {
  loginWithRedirect: () => void;
};
const UnauthNavButtons = ({ loginWithRedirect }: UnauthNavProps) => {
  return (
    <NavButton onClick={() => loginWithRedirect()}>
      <span>Login</span>
    </NavButton>
  );
};

type BurgerAuthProps = {
  logout: () => void;
};
const BurgerAuthButtons = ({ logout }: BurgerAuthProps) => {
  return (
    <>
      <NavMenuItem>
        <Link to="/profile">Profile</Link>
      </NavMenuItem>
      <NavMenuItem>
        <span onClick={() => logout()}>Logout</span>
      </NavMenuItem>
    </>
  );
};

type BurgerUnauthProps = {
  loginWithRedirect: () => void;
};
const BurgerUnauthButtons = ({ loginWithRedirect }: BurgerUnauthProps) => {
  return (
    <NavMenuItem>
      <span onClick={() => loginWithRedirect()}>Login</span>
    </NavMenuItem>
  );
};

export const Nav = () => {
  const { isAuthenticated, setIsAuthenticated } = useStore();
  const [burgerActive, setBurgerActive] = useState(false);
  const [isBurgerVisible, setIsBurgerVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const { loginWithRedirect, logout, isAuthenticated: loggedIn } = useAuth0();
  function clickedOutside() {
    setBurgerActive(false);
  }
  const location = useLocation();
  useEffect(() => {
    setBurgerActive(false);
  }, [location]);

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
            <NavButton>
              <Link to={isAuthenticated ? '/home' : '/'}>Home</Link>
            </NavButton>
            {!isAuthenticated ? (
              <UnauthNavButtons
                loginWithRedirect={() => loginWithRedirect({})}
              />
            ) : (
              <AuthenticatedNavButtons logout={() => logout()} />
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
              <NavMenuItem>
                <Link to={isAuthenticated ? '/home' : '/'}>Home</Link>
              </NavMenuItem>
              {isAuthenticated ? (
                <BurgerAuthButtons logout={() => logout()} />
              ) : (
                <BurgerUnauthButtons
                  loginWithRedirect={() => loginWithRedirect()}
                />
              )}
            </NavMenu>
          </>
        )}
      </NavEnd>
    </StyledNav>
  );
};
