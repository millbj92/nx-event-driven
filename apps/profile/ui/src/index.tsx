import { LoadingSpinner } from '@super-rad-poc/design/components';
import { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { useStore } from '@super-rad-poc/common/hooks';
import { ProfilePage } from './pages/profile-page';

const Profile = () => {
  return (
    <Route path="/profile">
      <Suspense fallback={<LoadingSpinner />}>
        <ProfilePage />
      </Suspense>
    </Route>
  );
};

export { Profile };
