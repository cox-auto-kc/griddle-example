import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import configureStore from './store/configureStore';

import Main from './main';

//Pages
import Home from './pages/Home';
import AppButtons from './pages/AppButtons';
import AppProgressBar from './pages/AppProgressBar';
import AppTextFields from './pages/AppTextFields';
import AppLinkedItems from './pages/AppLinkedItems';
import AppAlerts from './pages/AppAlerts';
import AppGriddle from './pages/AppGriddle';
import AppGriddleReddit from './pages/AppGriddleReddit';
import AppGriddleVehicles from './pages/AppGriddleVehicles';
<<<<<<< HEAD
import AppExternalData from './pages/AppExternalData';
=======
>>>>>>> 14d82be23df41153f8390fdd1678ef286fc19035


const store = configureStore();

// Render the main app react component into the app div.
ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={Main}>
        <Route path="/" component={Home} />
        <Route path="/buttons" component={AppButtons} />
        <Route path="/progress-bar" component={AppProgressBar} />
        <Route path="/text-fields" component={AppTextFields} />
        <Route path="/linked-items" component={AppLinkedItems} />
        <Route path="/alerts" component={AppAlerts} />
        <Route path="/charts" component={AppGriddle} />
        <Route path="/reddit" component={AppGriddleReddit} />
        <Route path="/vehicles" component={AppGriddleVehicles} />
<<<<<<< HEAD
        <Route path="/external-data" component={AppExternalData} />
=======
>>>>>>> 14d82be23df41153f8390fdd1678ef286fc19035
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
