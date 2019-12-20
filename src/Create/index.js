/* eslint-disable react/prop-types */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Composer from './Composer';

import Canvas from './Canvas';
import Player from '../Components/Player';
import Questions from './Questions';
import ViewBtn from './ViewBtn';

import { Consumer } from '../Context';

const style = {
  insertButton: {
    marginLeft: '10px',
    color: '#ecf0f1',
    fontSize: '32px',
  },
};

const Create = (props) => {
  return (
    <Consumer>
      {({ isInfoSet, actions }) => {
        if (isInfoSet) {
          return (
            <>
              <Canvas>
                <Composer />
                <Player>
                  <FontAwesomeIcon icon={faFile} onClick={actions.handleInsertClick} style={style.insertButton} />
                </Player>
                <ViewBtn />
              </Canvas>
              <Questions />
            </>
          );
        }
        return props.history.push('/');
      }}
    </Consumer>
  );
};

export default withRouter(Create);
