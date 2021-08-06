import React from 'react';
import { Provider } from 'react-redux'
import store from './src/store';

import MainScreen from './src/screens/MainScreen';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
