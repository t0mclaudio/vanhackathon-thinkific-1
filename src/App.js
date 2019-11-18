import React from 'react';
import Player from './Components/Player';
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
  constructor(props) {
    super(props);
    this.state = {
    }
    this.player = React.createRef();
  }

  play() {
    this.player.current.play()
  }

  pause() {
    this.player.current.pause()
  }

  render() {
    return (
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/edit">Edit</Link></li>
        </ul>
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
        <div style={{ position: 'relative', width: '640px', height: '360px' }}>
          <Prompter />
          <Player ref={this.player} />
        </div>
      </Router>
    )
  }
}

const Prompter = props => {
  return (
    <div style={{ width: '90%', height: '90%', position: 'absolute', zIndex: 999, padding: '10px' }}>
      <input type="text" style={{ display: 'block', padding: '10px 0', margin: '10px', width: '250px' }} />
      <input type="text" style={{ display: 'block', padding: '10px 0', margin: '10px', width: '250px' }} />
      <input type="text" style={{ display: 'block', padding: '10px 0', margin: '10px', width: '250px' }} />
    </div>
  )
}

