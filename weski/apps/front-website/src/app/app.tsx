import { Route } from 'react-router-dom';
import {
  ComponentMultiStyleConfig,
  extendTheme,
  ChakraProvider,
} from '@chakra-ui/react';

import { Home } from './home/home';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const colors = {
  brand: {
    500: '#0d59f9',
  },
};

const Datepicker: ComponentMultiStyleConfig = {
  parts: [
    'popContent',
    'popBody',
    'shortcutButtonGroup',
    'shortcutButton',
    'divider',
    'navigationContainer',
    'navigationButton',
    'navigationLabel',
    'calendarContainer',
    'dayLabelContainer',
    'dayLabel',
    'calendarMatrixContainer',
    'calendarMatrixDay',
    'todayButtonGroup',
    'todayButton',
  ],

  baseStyle: ({ colorScheme = 'blue', theme }) => {
    return {
      popContent: {
        _focus: {
          outline: 'none',
        },
      },

      popBody: {
        shadow: 'lg',
      },

      shortcutButtonGroup: {
        marginBottom: 2,
        spacing: 2,
      },

      shortcutButton: {
        fontWeight: 'normal',

        _focus: {
          outline: 'none',
        },
      },

      divider: {
        marginBottom: 2,
      },

      navigationContainer: {
        alignItems: 'baseline',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 2,
      },

      navigationButton: {
        backgroundColor: 'white',
        borderColor: theme['colors'].gray[200],
        borderWidth: 1,
        shadow: 'sm',

        _active: {
          shadow: 'none',
        },

        _focus: {
          outline: 'none',
        },

        _hover: {
          backgroundColor: 'white',
          shadow: 'md',
        },
      },

      navigationLabel: {
        fontWeight: 'bold',
      },

      calendarContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 2,
      },

      dayLabelContainer: {
        display: 'flex',
      },

      dayLabel: {
        alignItems: 'center',
        color: theme['colors'].gray[600],
        display: 'flex',
        fontSize: 'sm',
        height: 10,
        justifyContent: 'center',
        width: '100%',
      },

      calendarMatrixContainer: {
        display: 'flex',
      },

      calendarMatrixDay: {
        alignItems: 'center',
        borderRadius: 4,
        display: 'flex',
        height: 10,
        justifyContent: 'center',
        width: '100%',

        _hover: {
          backgroundColor: theme['colors'][colorScheme][50],
          cursor: 'pointer',
        },

        '&[data-in-range="false"]': {
          color: theme['colors'].gray[400],
        },

        '&[data-selected="true"]': {
          backgroundColor: theme['colors'][colorScheme][400],
          color: 'white',
          shadow: 'md',

          _hover: {
            backgroundColor: 'none',
          },

          '&[data-today="true"]': {
            color: 'white',
          },
        },

        '&[data-today="true"]': {
          borderColor: theme['colors'][colorScheme][400],
          borderWidth: 1,
          color: theme['colors'][colorScheme][400],
        },

        '&[data-dont-round="true"]': {
          borderRadius: 0,
        },

        '&[data-dont-round-left="true"]': {
          borderLeftRadius: 0,
        },

        '&[data-dont-round-right="true"]': {
          borderRightRadius: 0,
        },
      },

      todayButtonGroup: {
        justifyContent: 'center',
        spacing: '2',
        variant: 'ghost',
        width: '100%',
      },

      todayButton: {
        fontWeight: 'normal',

        _focus: {
          outline: 'none',
        },
      },
    };
  },

  defaultProps: {
    colorScheme: 'blue',
  },
};

const theme = extendTheme({
  components: { Datepicker },
  colors,
});

const ui = (child: ReactJSXElement) => (
  <ChakraProvider theme={theme}>{child}</ChakraProvider>
);

export function App() {
  return <Route path="/" exact render={() => ui(<Home />)} />;
}

export default App;
