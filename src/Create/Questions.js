import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default props => (
  <div style={{ marginTop: '15px' }}>
    {props.qs.length > 0 ?
      props.qs.map((question, index) => (
        <Question key={index} q={question} />
      ))
      : <NoQuestion /> }
  </div>
)

const Question = (props) => (
  <div style={style.question}>
    <small>{`${props.q.type.toUpperCase()}`}</small>
    <p>{`${props.q.question}`}</p>
    <small><FontAwesomeIcon style={style.clock} icon={faClock} /> {`${props.q.elapsed}`}</small>
  </div>
)

const NoQuestion = () => <p>No questions listed </p>;

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

