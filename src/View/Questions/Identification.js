import React, { useState, useContext } from 'react';
import { PlayerContext } from '../../Context';

import WrongAnswer from './WrongAnswer';

export default () => {
  const { question, actions } = useContext(PlayerContext);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setCorrect] = useState(true);
  const correct = 'form-control';
  const wrong = 'form-control is-invalid';

  const handleChange = (e) => {
    setCorrect(true);
    setAnswer(e.target.value);
  };

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
      <input
        type="text"
        className={isCorrect ? correct : wrong}
        name="answer"
        value={answer}
        onChange={handleChange}
      />
      {!isCorrect && <WrongAnswer />}
      <input type="submit" className="btn btn-warning mt-4" />
    </form>
  );
};
