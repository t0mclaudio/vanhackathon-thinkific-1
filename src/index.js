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
      <div style={{position:'relative', width:'640px', height: '360px'}}>
        <Prompter />
        <Player ref={this.player} />
      </div>
    )
  }
}

const Prompter = props => {
  return (
    <div style={{width: '90%', height: '90%', position: 'absolute', zIndex:999, padding: '10px' }}>
      <input type="text" style={{display: 'block', padding: '10px 0', margin: '10px', width: '250px'}} /> 
      <input type="text" style={{display: 'block', padding: '10px 0', margin: '10px', width: '250px'}} />
      <input type="text" style={{display: 'block', padding: '10px 0', margin: '10px', width: '250px'}} />
    </div>
  )
}

const mountPoint = document.getElementById('mount-point');
ReactDOM.render(<Index />, mountPoint);

