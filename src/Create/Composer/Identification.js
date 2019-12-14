/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Identification = (props) => {
  const initialState = {
    question: '',
    answer: '',
    time: props.time.currentSecond,
    elapsed: props.time.elapsed,
    type: 'identification',
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(state);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="question">Question</label>
        <textarea id="question" name="question" value={state.question} onChange={(e) => handleChange(e)} className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="answer">Answer</label>
        <input id="answer" type="text" name="answer" value={state.answer} onChange={(e) => handleChange(e)} className="form-control" />
      </div>
      <input type="submit" value="Submit" className="btn btn-warning" />
    </form>
  );
};

Identification.propTypes = {
  time: PropTypes.shape({
    currentSecond: PropTypes.number.isRequired,
    elapsed: PropTypes.string.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Identification;
