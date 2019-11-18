import React from 'react';

export default props => {
  return (
    <div>
      <div>
        <button onClick={() => props.updateModalModule("B")}>Fill in the blank</button>
        <button onClick={() => props.updateModalModule("C")}>Multiple choice</button>
        <button onClick={() => props.updateModalModule("D")}>True or False</button>
      </div>
    </div>
  )
}