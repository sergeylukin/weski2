import { render } from '@testing-library/react';

import FrontWebsiteFeatureHotelsList from './front-website-feature-hotels-list';

describe('FrontWebsiteFeatureHotelsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontWebsiteFeatureHotelsList />);
    expect(baseElement).toBeTruthy();
  });
});
