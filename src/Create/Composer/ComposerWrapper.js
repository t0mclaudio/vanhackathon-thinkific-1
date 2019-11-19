import React from 'react';

export default props => {
  return (
    <div style={style.overlay}>
      <span
        id="closePortalBtn"
        style={style.closePortalBtn}
        onClick={() => props.closeComposer()}>close [x]</span>
      {props.state.currentModule !== "A" ?
        <button onClick={() => props.updateModalModule("A")}>Back</button> : ""}
      <h3>Prompt will be positioned at {props.state.time.elapsed}</h3>
      {props.children}
    </div>
  )
}

const style = {
  overlay: {
    width: '640px',
    height: '100%',
    backgroundColor: '#222f3e',
    zIndex: "99",
    position: 'absolute',
    borderRadius: '4px',
  },
  closePortalBtn: {
    display: 'block',
    width: '100%',
    textAlign: 'right',
    fontSize: '1em',
    padding: '5px',
    color: 'silver',
    border: 'none',
    cursor: 'pointer',
  }
}