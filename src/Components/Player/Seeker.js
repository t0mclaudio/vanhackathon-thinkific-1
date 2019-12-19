import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';

const Seeker = (props) => (
  <Consumer>
    {({ played, actions }) => (
      <div>
        <input
          style={{ width: '100%' }}
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          onChange={actions.handleSeekChange}
          onMouseUp={(e) => actions.handleSeekMouseUp(e, props.playerRef)}
        />
      </div>
    )}
  </Consumer>
);

Seeker.propTypes = {
  playerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default Seeker;
