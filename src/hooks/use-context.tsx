import { useContext, createContext } from 'react';
import { IContext } from 'src/types/context';

const defaultContext = createContext<IContext>({
  themeContext: 'light',
  set: {
    theme: () => undefined,
  },
});

export const useDefaultContext = () => useContext<IContext>(defaultContext);

export const ContextProvider = defaultContext.Provider;
