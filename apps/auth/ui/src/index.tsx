import { LoadingSpinner } from '@super-rad-poc/design/components';
import { Suspense, lazy } from 'react';
import styled from 'styled-components';
import React, { Route, Switch, Redirect } from 'wouter';

const Login = lazy(() => import('./login'));
const Register = lazy(() => import('./register'));

const Auth = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path="/auth">
          <Redirect to="/auth/login" />
        </Route>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
      </Switch>
    </Suspense>
  );
};

export { Auth };
