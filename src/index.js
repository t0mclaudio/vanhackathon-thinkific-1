import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <div style={{ position: 'relative' }} >
        <Player />
      </div>
    )
  }
}





const mountPoint = document.getElementById('mount-point');
ReactDOM.render(<Index />, mountPoint);

