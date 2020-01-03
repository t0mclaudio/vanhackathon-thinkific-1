/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Player from '../Components/Player';
import Canvas from '../Components/Canvas';
import Questions from './Questions';
import Back from '../Components/Back';

import { PlayerContext } from '../Context';

const View = (props) => {
  const {
    playerRef,
    isInfoSet,
    createMode,
    actions,
  } = useContext(PlayerContext);
  if (createMode) actions.setViewMode();
  if (isInfoSet) {
    return (
      <>
        <Back to="/create" />
        <Canvas>
          <Questions />
          <Player ref={playerRef} />
        </Canvas>
      </>
    );
  }
  if (!createMode) actions.setCreateMode();
  props.history.push('/');
  return null;
};

export default withRouter(View);
