/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Seeker = (props) => (
  <div>
    <input
      style={{ width: '100%' }}
      type="range"
      min={0}
      max={1}
      step="any"
      value={props.played}
      onChange={props.handleSeekChange}
      onMouseUp={props.handleSeekMouseUp}
    />
  </div>
);

Seeker.propTypes = {
  played: PropTypes.number.isRequired,
  handleSeekChange: PropTypes.func.isRequired,
  handleSeekMouseUp: PropTypes.func.isRequired,
};

export default Seeker;
