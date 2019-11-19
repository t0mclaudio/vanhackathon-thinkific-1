import React from 'react';

export default (props) => {
  return (
    props.state.info.url ?
      <button onClick={() => props.openModal()}>Create new prompt</button> : ""
  )
}