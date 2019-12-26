import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Create from './Create';
import View from './View';
import Form from './Create/Form';
import ErrorBoundary from './ErrorBoundary';

import { Provider } from './Context';

export default () => (
  <ErrorBoundary>
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/view">
            <View />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </ErrorBoundary>
);
