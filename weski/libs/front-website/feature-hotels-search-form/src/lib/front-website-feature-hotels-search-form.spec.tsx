import { render } from '@testing-library/react';

import FrontWebsiteFeatureHotelsSearchForm from './front-website-feature-hotels-search-form';

describe('FrontWebsiteFeatureHotelsSearchForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontWebsiteFeatureHotelsSearchForm />);
    expect(baseElement).toBeTruthy();
  });
});
