import { Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { frontWebsiteTheme } from '@namespace/front-website/theme';

import { Home } from './home/home';

const ui = (child: ReactJSXElement) => (
  <ChakraProvider theme={frontWebsiteTheme}>{child}</ChakraProvider>
);

export function App() {
  return <Route path="/" exact render={() => ui(<Home />)} />;
}

export default App;
