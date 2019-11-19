import React from 'react';
import SelectQuestion from './SelectQuestion';
import Identification from './Identification';
import MultipleChoice from './MultipleChoice';

export default (props) => {
  switch (props.state.activeInModal) {
    case "A":
      return <SelectQuestion updateModalModule={(id) => props.updateModalModule(id)} />
    case "B":
      return <Identification time={props.state.time} handleSubmit={data => props.handleSubmit(data) } />
    case "C":
      return <MultipleChoice time={props.state.time} handleSubmit={data => props.handleSubmit(data) } />
    default:
      return <SelectQuestion updateModalModule={(id) => props.updateModalModule(id)} />
  }  
}
