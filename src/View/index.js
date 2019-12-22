/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Player from '../Components/Player';
import Canvas from '../Components/Canvas';
import Questions from './Questions';

import { PlayerContext } from '../Context';

const View = (props) => {
  const { isInfoSet, createMode, actions } = useContext(PlayerContext);
  if (createMode) actions.setViewMode();
  if (isInfoSet) {
    return (
      <Canvas>
        <Questions />
        <Player />
      </Canvas>
    );
  }
  if (!createMode) actions.setCreateMode();
  props.history.push('/');
  return null;
};

export default withRouter(View);
