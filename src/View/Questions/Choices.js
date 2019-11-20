import React from 'react';

export default props => {
  return (
    <form onSubmit={(e) => props.submitAnswer(e)}>
      {props.state.wrongAnswer ?
        <div>
          <small id="passwordHelp" className="text-danger">
            That is the wrong answer. Try again
        </small>
        </div>
        : ""
      }

      {props.state.question.choices.map((choice, index) => {
        let isSelected = choice === props.state.answer ? style.selected : style.choice
        return (
          <p style={isSelected} key={index} onClick={() => props.selectAnswer(choice)}>{choice}</p> 
        )
      })}


      <input type="submit" className="btn btn-warning mt-4" />
    </form>
  )
}

const style = {
  correct: "form-control",
  wrong: "form-control is-invalid",
  choice: {
    padding: '12px',
    margin: '10px 0',
    backgroundColor: 'white',
    borderRadius: '4px',
    color: '#222f3e',
    fontSize: '15px'
  },
  selected: {
    padding: '12px',
    margin: '10px 0',
    backgroundColor: '#10ac84',
    borderRadius: '4px',
    color: '#222f3e',
    fontSize: '15px'    
  }
}