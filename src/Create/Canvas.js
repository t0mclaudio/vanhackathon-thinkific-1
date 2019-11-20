import React from 'react';

export default (props) => {
  return (
    <div style={style.wrapper}>
      {props.children}
    </div>
  )
}

const style = {
  wrapper: {
    position: 'relative',
    width: '640px',
    borderRadius: '4px',
    padding: 0,
    backgroundColor: '#222f3e'
  }
}

