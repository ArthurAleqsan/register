import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import SignUp from './components/SignUp';
import Category from './components/Category';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <Category />
          <SignUp />
        </div>
      </Provider>

    );
  }
}

export default App;
