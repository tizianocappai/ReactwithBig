import { createContext } from 'react';

const Context = createContext({
    theme: '',
    setTheme: () => {},
    filter: '',
    setFilter: () => {}
  });

export default Context;