import { extendTheme } from '@chakra-ui/react';

import { DatepickerTheme } from '@namespace/shared/ui';

const colors = {
  brand: {
    500: '#0d59f9',
  },
};

export const frontWebsiteTheme = extendTheme({
  components: { Datepicker: DatepickerTheme },
  colors,
});
