import { Route } from 'react-router-dom';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

import { Home } from './home/home';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const colors = {
  brand: {
    500: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

const ui = (child: ReactJSXElement) => (
  <ChakraProvider theme={theme}>{child}</ChakraProvider>
);

export function App() {
  return <Route path="/" exact render={() => ui(<Home />)} />;
}

export default App;
