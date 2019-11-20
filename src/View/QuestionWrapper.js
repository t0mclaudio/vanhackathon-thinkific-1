import React from 'react';

export default props => {
  return (
    <div style={style.overlay}>
      {props.children}
    </div>
  )
}

const style = {
  overlay: {
    display: 'grid',
    width: '640px',
    minHeight: '427px',
    backgroundColor: '#222f3e',
    zIndex: "99",
    position: 'absolute',
    borderRadius: '4px',
    padding: '30px',
    color: 'white'
  }
}