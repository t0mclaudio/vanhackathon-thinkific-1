import React from 'react';

export default props => {
  return (
    <div style={style.overlay}>
      <div style={style.nav}>
      </div>
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
    padding: '15px',
    color: 'white'
  },
  close: {
    textAlign: 'right',
    fontSize: '28px',
    cursor: 'pointer',
  },
  open: {
    fontSize: '28px',
    cursor: 'pointer',
  },
  nav: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    marginBottom: "15px"
  },
  text: {
    fontSize: '18px',
    textAlign: 'right',
  }

}