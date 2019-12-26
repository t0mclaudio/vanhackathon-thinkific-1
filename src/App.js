import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Create from './Create';
import View from './View';
import Form from './Create/Form';

import { Provider } from './Context';

export default () => (
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
);
