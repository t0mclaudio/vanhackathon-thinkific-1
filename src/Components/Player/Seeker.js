import React, { useContext } from 'react';
import { PlayerContext } from '../../Context';

const Seeker = () => {
  const { played, actions } = useContext(PlayerContext);
  return (
    <div>
      <input
        style={{ width: '100%' }}
        type="range"
        min={0}
        max={1}
        step="any"
        value={played}
        onChange={actions.handleSeekChange}
        onMouseUp={(e) => actions.handleSeekMouseUp(e)}
      />
    </div>
  )
};

export default Seeker;
