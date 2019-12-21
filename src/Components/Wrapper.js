import React from 'react';

const style = {
  overlay: {
    display: 'grid',
    width: '640px',
    minHeight: '427px',
    backgroundColor: '#222f3e',
    zIndex: 99,
    position: 'absolute',
    borderRadius: '4px',
    padding: '15px',
    color: 'white',
  },
};

export default (props) => (
  <div style={style.overlay}>
    {props.children}
  </div>
);
