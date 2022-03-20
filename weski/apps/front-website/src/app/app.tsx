import { Route } from 'react-router-dom';

import { Home } from './home/home';

export function App() {
  return <Route path="/" exact render={() => <Home />} />;
}

export default App;
