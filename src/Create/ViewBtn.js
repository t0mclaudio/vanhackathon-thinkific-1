import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import { Consumer } from '../Context';

const style = {
  viewVideoBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
  },
};


export default withRouter((props) => (
  <Consumer>
    {({ isInfoSet, questions, actions }) => (
      isInfoSet
      && questions.length > 0
      && (
      <button
        type="button"
        style={style.viewVideoBtn}
        className="btn btn-success"
        onClick={() => props.history.push('/view')}
      >
        <FontAwesomeIcon style={{ fontSize: '28px' }} icon={faEye} />
      </button>
      )
    )}
  </Consumer>
));
