import {Router} from './navigation';
import {StoreProvider} from './stores';
import React from 'react';

export const App = () => {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
};
