import React from 'react';
import SelectQuestion from './SelectQuestion';
import FillTheBlank from './FillTheBlank';
import MultipleChoice from './MultipleChoice';
import TrueFalse from './TrueFalse';

export default (props) => {
  switch (props.state.activeInModal) {
    case "A":
      return <SelectQuestion updateModalModule={(id) => props.updateModalModule(id)} />
    case "B":
      return <FillTheBlank time={props.state.time.currentSecond} handleSubmit={data => props.handleSubmit(data) } />
    case "C":
      return <MultipleChoice />
    case "D":
      return <TrueFalse />
    default:
      return <SelectQuestion updateModalModule={(id) => props.updateModalModule(id)} />
  }  
}
