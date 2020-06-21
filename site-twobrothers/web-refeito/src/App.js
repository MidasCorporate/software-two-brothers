import React from 'react';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';

// import { persistor } from './store';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    // <Provider store={store}>
    // <PersistGate persistor={persistor}>
    <Router history={history}>
      <Routes />
    </Router>
    // </PersistGate>
    // </Provider>
  );
}

export default App;
