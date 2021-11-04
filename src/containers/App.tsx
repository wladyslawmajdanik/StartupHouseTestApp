import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { StackNavigationContainer } from '../navigation/StackNavigationContainer';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigationContainer />
    </Provider>
  );
};
export default App;
