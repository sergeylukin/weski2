import { Route } from 'react-router-dom';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

import { Home } from './home/home';
import { DatepickerTheme } from '@namespace/shared/ui';

const colors = {
  brand: {
    500: '#0d59f9',
  },
};

const theme = extendTheme({
  components: { Datepicker: DatepickerTheme },
  colors,
});

const ui = (child: ReactJSXElement) => (
  <ChakraProvider theme={theme}>{child}</ChakraProvider>
);

export function App() {
  return <Route path="/" exact render={() => ui(<Home />)} />;
}

export default App;
