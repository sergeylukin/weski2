import { Route } from 'react-router-dom';

import { FrontWebsiteFeatureHotelsList as HotelsList } from '@namespace/front-website/feature-hotels-list';

export function App() {
  return <Route path="/" exact render={() => <HotelsList />} />;
}

export default App;
