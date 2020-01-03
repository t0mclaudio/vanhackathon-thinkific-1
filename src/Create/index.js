/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Composer from './Composer';

import Canvas from '../Components/Canvas';
import Player from '../Components/Player';
import Questions from './Questions';
import ViewBtn from './ViewBtn';
import InsertBtn from './InsertBtn';
import Back from '../Components/Back';

import { PlayerContext } from '../Context';

export default withRouter((props) => {
  const {
    playerRef, isInfoSet, createMode, actions,
  } = useContext(PlayerContext);

  if (!createMode) actions.setCreateMode(); // hack
  if (isInfoSet) {
    return (
      <>
        <Back to="/" />
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
});
