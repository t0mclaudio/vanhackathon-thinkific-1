import React from 'react';

export default (props) => {
  return (
    props.state.openModal ? 
    props.children : "" 
  )
}