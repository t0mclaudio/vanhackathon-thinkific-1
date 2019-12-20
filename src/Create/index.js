import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Composer from './Composer';

import Canvas from './Canvas';
import Player from '../Components/Player';
import Questions from './Questions';
import ViewBtn from './ViewBtn';
import InsertBtn from './InsertBtn';

import { PlayerContext } from '../Context';

const Create = (props) => {
  const ctx = useContext(PlayerContext);
  const { isInfoSet } = ctx;
  if (isInfoSet) {
    return (
      <>
        <Canvas>
          <Composer />
          <Player>
            <InsertBtn />
          </Player>
          <ViewBtn />
        </Canvas>
        <Questions />
      </>
    );
  }
  return props.history.push('/');
};

export default withRouter(Create);
