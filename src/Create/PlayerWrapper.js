import React from 'react';
import Player from '../Components/Player';

export default (props) => {
  return (
    <div style={{ position: 'relative', width: '640px', height: '390px', backgroundColor: 'black' }}>
      {props.state.url ? props.children : "" }
    </div>
  )
}