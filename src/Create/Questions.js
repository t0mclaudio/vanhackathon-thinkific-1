import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default props => {
  return (
    <div className="col-4" style={{ padding: '0 10px' }}>
      {props.state ?
        props.state.map(question => {
          return (
            <div style={style.question}>
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

