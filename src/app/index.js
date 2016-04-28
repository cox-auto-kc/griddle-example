import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router';
import Main from './main';

// Render the main app react component into the app div.
render(
  <Main />, 
  document.getElementById('app')
);