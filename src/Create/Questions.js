import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default props => {
  return (
    <div style={{marginTop: '15px'}}>
      {props.state.length > 0 ?
        props.state.map((question, index) => {
          return (
            <div key={index} style={style.question}>
              <small>{`${question.type.toUpperCase()}`}</small>
              <p>{`${question.question}`}</p>
              <small><FontAwesomeIcon style={style.clock} icon={faClock} /> {`${question.elapsed}`}</small>
            </div>
          )
        }) : <p>No questions listed </p>}
    </div>
  )
}

const style = {
  questions: {

  },
  question: {
    padding: '15px',
    border: '1px solid gray',
    borderRadius: '4px',
    marginBottom: '15px'
  },
  clock: {
    fontSize: '12px'
  }

}

