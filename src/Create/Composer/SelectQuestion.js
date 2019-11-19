import React from 'react';
import { whileStatement } from '@babel/types';

export default props => {
  return (
    <div style={style.wrapper}>
      <p>What type of question do you want to create?</p>
      <div style={style.choices}>
        <div style={style.choice} onClick={() => props.updateModalModule("B")}>Fill in the blank</div>
        <div style={style.choice} onClick={() => props.updateModalModule("C")}>Multiple choice</div>
      </div>
    </div>
  )
}

const style= {
  wrapper : {
    padding: '15px',
    color: 'white'
  },
  choices: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridGap: '15px'
  },

  choice: {
    backgroundColor: 'white',
    color: '#222f3e',
    borderRadius: '4px',
    height: '48px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer'
  }
}