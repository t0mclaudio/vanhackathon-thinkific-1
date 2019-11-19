import React from 'react';

export default (props) => {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

const style = {
  position: 'relative',
  width: '640px',
  minHeight: '390px',
  backgroundColor: '#222f3e',
  borderRadius: '4px'
}