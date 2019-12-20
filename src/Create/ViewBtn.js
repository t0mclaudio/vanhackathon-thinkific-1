import React from 'react';
import { Link } from 'react-router-dom';

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


export default () => (
  <Consumer>
    {({ isInfoSet, questions, actions }) => (
      isInfoSet
      && questions.length > 0
      && (
      <Link
        to="/view"
        style={style.viewVideoBtn}
        className="btn btn-success"
        onClick={() => actions.handleViewVideo()}>
        <FontAwesomeIcon style={{ fontSize: '28px' }} icon={faEye} />
      </Link>
      )
    )}
  </Consumer>
);
