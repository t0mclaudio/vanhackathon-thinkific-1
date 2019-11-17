import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';

const mountPoint = document.getElementById('mount-point');


const Index = props => {
  return (
    <Player />
  )
}

ReactDOM.render(<Index />, mountPoint);

