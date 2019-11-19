import React from 'react';

export default (props) => {
  return (
    <div style={style.wrapper} className="col-8">
      {props.children}
    </div>
  )
}

const style = {
  wrapper: {
    position: 'relative',
    width: '640px',
    minHeight: '390px',
    backgroundColor: '#222f3e',
    borderRadius: '4px',
  }
}

