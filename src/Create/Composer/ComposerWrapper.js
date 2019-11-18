import React from 'react';

export default props => {
  return (
    <div>
      {props.state.currentModule !== "A" ?
        <button onClick={() => props.updateModalModule("A")}>Back</button> : ""}
      <h3>Prompt will be positioned at {props.state.time.elapsed}</h3>
      {props.children}
    </div>
  )
}