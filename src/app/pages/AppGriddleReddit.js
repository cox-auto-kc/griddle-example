import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import AsyncApp from '../components/reddit-async-app';

const store = configureStore();

class AppGriddleReddit extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    );
  }
}

export default AppGriddleReddit;
