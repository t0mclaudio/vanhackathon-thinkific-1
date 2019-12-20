/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import { PlayerContext } from '../Context';

const style = {
  question: {
    padding: '15px',
    border: '1px solid gray',
    borderRadius: '4px',
    marginBottom: '15px',
  },
  clock: {
    fontSize: '12px',
  },
};

const Question = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { type, question, elapsed } = props.q;
  return (
    <div style={style.question}>
      <small>{`${type.toUpperCase()}`}</small>
      <p>{`${question}`}</p>
      <small>
        <FontAwesomeIcon style={style.clock} icon={faClock} />
        {`${elapsed}`}
      </small>
    </div>
  );
};

Question.propTypes = {
  q: PropTypes.shape({
    type: PropTypes.string,
    question: PropTypes.string,
    elapsed: PropTypes.string,
  }).isRequired,
};

const NoQuestion = () => <p>No questions listed </p>;

export default () => {
  const ctx = useContext(PlayerContext);
  const { questions } = ctx;
  return (
    <div style={{ marginTop: '15px' }}>
      {questions.length > 0
        ? questions.map((question, index) => <Question key={index} q={question} />)
        : <NoQuestion />}
    </div>
  );
};
