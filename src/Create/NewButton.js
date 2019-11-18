import React from 'react';

export default (props) => {
  return (
    props.state.url ?
      <button onClick={() => props.openModal()}>Create new prompt</button> : ""
  )
}