import React from 'react';

export default props => {
  return (
    <div className="col-4" style={{ padding: '0 10px' }}>
      {props.state.question ? 
      props.state.questions.map(question => {
        return (
          <div style={style.question}>
            <small>{`${question.type.toUpperCase()}`}</small>
            <p>{`${question.question}`}</p>
            <small>{`${question.elapsed}`}</small>
          </div>
        )
      }) : <p>No questions listed </p> }
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
  }

}