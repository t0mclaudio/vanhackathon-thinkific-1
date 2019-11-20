import React from 'react';

export default props => {
  return (
    <form onSubmit={(e) => props.submitAnswer(e)}>
      <input type="text" className={props.state.wrongAnswer ? style.wrong : style.correct} name="answer" value={props.state.answer} onChange={e => props.handleChange(e)} />
      {props.state.wrongAnswer ?
        <div>
          <small id="passwordHelp" className="text-danger">
            That is the wrong answer. Try again
        </small>
        </div>
        : ""
      }
      <input type="submit" className="btn btn-warning mt-4" />
    </form>
  )
}

const style = {
  correct: "form-control",
  wrong: "form-control is-invalid"
}