import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Create from './Create';

export default class App extends React.Component {
  render() {
    return (
      <div className="row">
        <Router>
            <Switch>
              <Route path="/">
                <Create />
              </Route>
            </Switch>
        </Router>
      </div>
    )
  }
}

