import React from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from './src/containers/Home';

import reducers from './src/reducers/index';
let store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <NativeRouter>
      <Route exact path="/" component={Home}/>
    </NativeRouter>
  </Provider>
);

export default App;
