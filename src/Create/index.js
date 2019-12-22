/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Composer from './Composer';

import Canvas from '../Components/Canvas';
import Player from '../Components/Player';
import Questions from './Questions';
import ViewBtn from './ViewBtn';
import InsertBtn from './InsertBtn';

import { Consumer } from '../Context';

const Create = (props) => (
  <Consumer>
    {({ playerRef, isInfoSet, createMode, actions }) => {
      if (!createMode) actions.setCreateMode(); // hack
      if (isInfoSet) {
        return (
          <>
            <Canvas>
              <Composer />
              <Player ref={playerRef}>
                <InsertBtn />
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

export default withRouter(Create);
