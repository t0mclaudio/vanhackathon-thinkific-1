import React, { useState } from 'react';
import { Consumer } from '../../Context';

const style = {
  choice: {
    padding: '10px',
    border: '1px solid gray',
    margin: '10px 0',
    borderRadius: '4px',
    fontSize: '18px',
  },
};


const MultipleChoice = () => {
  const initialState = {
    question: '',
    answer: '',
    choice: '',
    choices: [],
    type: 'multiple choice',
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleChoiceSubmit = (e) => {
    e.preventDefault();
    const { choices, choice } = state;
    choices.push(choice);
    setState({ ...state, choices, choice: '' });
  };

  return (
    <Consumer>
      {({ currentSecond, elapsed, actions }) => {
        const handleSubmit = () => {
          actions.handleSubmit({ ...state, time: currentSecond, elapsed });
        };

        return (
          <div>
            <div className="form-group">
              <label htmlFor="question">Please enter your question</label>
              <textarea id="question" className="form-control" name="question" value={state.question} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="answer">What is the correct answer?</label>
              <input id="answer" className="form-control" type="text" name="answer" value={state.answer} onChange={handleChange} />
            </div>
            <form className="form-inline" onSubmit={handleChoiceSubmit}>
              <div className="input-group">
                <input id="choice" name="choice" onChange={handleChange} value={state.choice} className="form-control" placeholder="Enter Choice" />
                <div className="input-group-append">
                  <input type="submit" value="Add to choices" className="btn btn-primary" />
                </div>
              </div>
            </form>
            <div>
              {state.choices.map((choice) => <div key={choice} style={style.choice}>{choice}</div>)}
            </div>
            <button type="button" onClick={handleSubmit} className="btn btn-warning">Submit</button>
          </div>
        );
      }}
    </Consumer>
  );
};

export default MultipleChoice;
