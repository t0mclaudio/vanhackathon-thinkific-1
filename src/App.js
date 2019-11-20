import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Create from './Create';
import View from './View';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  handleViewVideo(data) {
    this.setState({ data: data })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Create handleViewVideo={data => this.handleViewVideo(data)} />
          </Route>
          <Route exact path="/view">
            <View data={this.state.data} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

