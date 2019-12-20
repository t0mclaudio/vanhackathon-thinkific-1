import React from 'react';

const style = {
  wrapper: {
    position: 'relative',
    width: '640px',
    borderRadius: '4px',
    padding: 0,
    backgroundColor: '#222f3e',
    fontSize: '16px',
  },
};

export default (props) => (
  <div style={style.wrapper}>
    {props.children}
  </div>
);
