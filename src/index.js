import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';

class Index extends React.Component {
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
      <div style={{ position: 'relative' }} >
        <Player ref={this.player} />
      </div>
    )
  }
}

const mountPoint = document.getElementById('mount-point');
ReactDOM.render(<Index />, mountPoint);

