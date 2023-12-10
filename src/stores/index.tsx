import React from 'react';
import {RootStore} from './root';

import {createContext, useContext, ReactNode} from 'react';

const root = new RootStore();

const StoreContext = createContext<RootStore>(null!);

export const StoreProvider = ({children}: {children: ReactNode}) => {
  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
};

export const useStores = () => useContext(StoreContext);
