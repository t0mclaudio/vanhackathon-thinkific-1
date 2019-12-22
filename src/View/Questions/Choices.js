import React from 'react';
import wrongAnswer from './WrongAnswer';
import WrongAnswer from './WrongAnswer';

const style = {
  correct: 'form-control',
  wrong: 'form-control is-invalid',
  choice: {
    padding: '12px',
    margin: '10px 0',
    backgroundColor: 'white',
    borderRadius: '4px',
    color: '#222f3e',
    fontSize: '15px',
  },
  selected: {
    padding: '12px',
    margin: '10px 0',
    backgroundColor: '#10ac84',
    borderRadius: '4px',
    color: '#222f3e',
    fontSize: '15px',
  },
};

export default (props) => (
  <form onSubmit={(e) => props.submitAnswer(e)}>
    { props.state.wrongAnswer
      && <WrongAnswer />
    }

    {props.state.question.choices.map((choice, index) => {
      const isSelected = choice === props.state.answer ? style.selected : style.choice
      return (
        <p style={isSelected} key={index} onClick={() => props.selectAnswer(choice)}>{choice}</p>
      );
    })}
    <input type="submit" className="btn btn-warning mt-4" />
  </form>
);
