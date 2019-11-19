import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Create from './Create';
import Home from './Home';
import Edit from './Edit';

export default class App extends React.Component {
  render() {
    return (
      <div className="row">
        <Router>
          <div className="col-lg-2">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/create">Create</Link></li>
              <li><Link to="/edit">Edit</Link></li>
            </ul>
          </div>
          <div className="col-lg-10">
            <Switch>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/edit">
                <Edit />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

