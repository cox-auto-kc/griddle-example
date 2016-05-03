import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

import Main from './main';

//Pages
import Home from './pages/Home';
import AppButtons from './pages/AppButtons';
import AppProgressBar from './pages/AppProgressBar';
import AppTextFields from './pages/AppTextFields';
import AppLinkedItems from './pages/AppLinkedItems';
import AppAlerts from './pages/AppAlerts';
import AppGriddle from './pages/AppGriddle';


// Render the main app react component into the app div.
ReactDOM.render((
    <Router history={browserHistory}>
      <Route component={Main}>
        <Route path="/" component={Home} />
        <Route path="/buttons" component={AppButtons} />
        <Route path="/progress-bar" component={AppProgressBar} />
        <Route path="/text-fields" component={AppTextFields} />
        <Route path="/linked-items" component={AppLinkedItems} />
        <Route path="/alerts" component={AppAlerts} />
        <Route path="/charts" component={AppGriddle} />
      </Route>
    </Router>
), document.getElementById('app'));