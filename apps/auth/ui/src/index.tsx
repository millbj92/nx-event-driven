import { Suspense, useState } from 'react';

import { Login } from './login';

const Auth = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
};

export { Auth };
