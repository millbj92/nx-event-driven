import { LoadingSpinner } from '@super-rad-poc/design/components';
import { Suspense, lazy } from 'react';
import styled from 'styled-components';
import React, { Route, Switch, Redirect } from 'wouter';

const Profile = () => {
  return (
    <Route path="/profile">
      <div>
        <h1>Profile</h1>
      </div>
    </Route>
  );
};

export { Profile };
