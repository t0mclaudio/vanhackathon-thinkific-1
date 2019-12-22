import React, { useContext, useState } from 'react';
import { PlayerContext } from '../../Context';
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
    display: 'block',
  },
  selected: {
    padding: '12px',
    margin: '10px 0',
    backgroundColor: '#10ac84',
    borderRadius: '4px',
    color: '#222f3e',
    fontSize: '15px',
    display: 'block',
  },
};

export default () => {
  const { question, actions } = useContext(PlayerContext);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setCorrect] = useState(true);

  const selectAnswer = (ans) => setAnswer(ans);

  const submitAnswer = () => {
    if (question.answer.trim() === answer.trim()) {
      actions.closePrompt();
      actions.play();
    } else {
      setCorrect(false);
    }
  };

  return (
    <form onSubmit={submitAnswer}>
      <p>{question.question}</p>
      { !isCorrect && <WrongAnswer />}
      { question.choices.map((choice) => {
        const isSelected = choice === question.answer ? style.selected : style.choice;
        return (
          <button
            type="button"
            style={isSelected}
            key={choice}
            onClick={() => selectAnswer(choice)}
          >
            {choice}
          </button>
        );
      })}
      <input type="submit" className="btn btn-warning mt-4" />
    </form>
  );
};
