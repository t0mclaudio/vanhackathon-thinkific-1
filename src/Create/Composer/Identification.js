/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Consumer } from '../../Context';

const Identification = () => {
  const initialState = {
    question: '',
    answer: '',
    type: 'identification',
  };

  const [state, setState] = useState(initialState);

  return (
    <Consumer>
      {({ elapsed, currentSecond, actions }) => {
        const handleSubmit = (e) => {
          e.preventDefault();
          actions.handleSubmit({ ...state, elapsed, time: currentSecond });
        };

        const handleChange = (event) => {
          setState({ ...state, [event.target.name]: event.target.value });
        };

        return (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="question">Question</label>
              <textarea id="question" name="question" value={state.question} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="answer">Answer</label>
              <input id="answer" type="text" name="answer" value={state.answer} onChange={handleChange} className="form-control" />
            </div>
            <input type="submit" value="Submit" className="btn btn-warning" />
          </form>
        );
      }}
    </Consumer>
  );
};

export default Identification;
