import React from 'react';
import { Consumer } from '../../Context';

const style = {
  wrapper: {
    padding: '15px',
    color: 'white',
  },
  choices: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridGap: '15px',
  },

  choice: {
    backgroundColor: 'white',
    color: '#222f3e',
    borderRadius: '4px',
    height: '48px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default () => (
  <Consumer>
    {({ actions }) => (
      <div style={style.wrapper}>
        <p>What type of question do you want to create?</p>
        <div style={style.choices}>
          <button type="button" style={style.choice} onClick={() => actions.updateModalModule('B')}>Fill in the blank</button>
          <button type="button" style={style.choice} onClick={() => actions.updateModalModule('C')}>Multiple choice</button>
        </div>
      </div>
    )}
  </Consumer>
);