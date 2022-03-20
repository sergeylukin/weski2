import { render } from '@testing-library/react';

import Datepicker from './datepicker';

describe('Datepicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Datepicker />);
    expect(baseElement).toBeTruthy();
  });
});
