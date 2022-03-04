import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MicroFrontend from './micro-frontend/micro-frontend';

const dashboardHost = 'http://localhost:3001';
const authHost = 'http://localhost:3002';

const StyledApp = styled.div``;

const Nav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <p className="navbar-item">Super Rad POC</p>

      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Dashboard
        </Link>

        <Link className="navbar-item" to="/auth">
          Login
        </Link>
      </div>
    </div>
  </nav>
);

const Dashboard = () => <MicroFrontend name="Dashboard" host={dashboardHost} />;
const Auth = () => <MicroFrontend name="Auth" host={authHost} />;

export function App() {
  return (
    <Router>
      <StyledApp>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>

          <Route exact path="/auth">
            <Auth />
          </Route>
        </Switch>
      </StyledApp>
    </Router>
  );
}

export default App;
