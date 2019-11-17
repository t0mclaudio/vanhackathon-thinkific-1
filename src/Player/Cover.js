import React from 'react';

export default () => {
  return (
    <div style={style.cover} >
      <button onClick={() => this.promptClicked()}>Click here</button>
    </div>
  )
}

const style = {
  cover: {
    width: '640px',
    height: '360px',
    backgroundColor: 'red',
    zIndex: "99",
    position: 'absolute',
    opacity: .6
  }
}