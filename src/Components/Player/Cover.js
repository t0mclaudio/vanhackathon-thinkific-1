import React from 'react';

export default () => {
  return <div style={style.cover}></div>
}

const style = {
  cover: {
    width: '640px',
    height: '360px',
    backgroundColor: 'black',
    zIndex: "99",
    position: 'absolute',
    opacity: .75
  }
}