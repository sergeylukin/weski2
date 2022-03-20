import { render } from '@testing-library/react';

import FrontWebsiteDataAccessHotels from './front-website-data-access-hotels';

describe('FrontWebsiteDataAccessHotels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontWebsiteDataAccessHotels />);
    expect(baseElement).toBeTruthy();
  });
});
