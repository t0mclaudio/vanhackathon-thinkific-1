import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import { Consumer } from '../Context';

const style = {
  insertButton: {
    marginLeft: '10px',
    color: '#ecf0f1',
    fontSize: '32px',
  },
};

export default () => (
  <Consumer>
    {({ actions }) => (
      <FontAwesomeIcon
        icon={faFile}
        onClick={actions.handleInsertClick}
        style={style.insertButton}
      />
    )}
  </Consumer>
);
