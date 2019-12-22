/* eslint-disable max-len */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

import { PlayerContext } from '../../Context';
import Seeker from './Seeker';
import style from './style';

const Player = React.forwardRef((props, ref) => {
  const { url, playing, elapsed, actions } = useContext(PlayerContext);
  return (
    <>
      <div style={{ pointerEvents: 'none' }}>
        <ReactPlayer
          ref={ref}
          url={url}
          config={{
            wistia: {
              options: {
                controlsVisibleOnLoad: false,
                playButton: false,
              },
            },
          }}
          playing={playing}
          onProgress={(state) => actions.onProgress(state, ref)}
        />
      </div>
      <Seeker playerRef={ref} />
      <div style={style.footerWrapper}>
        <div style={style.buttons}>
          {playing
            ? <FontAwesomeIcon icon={faPauseCircle} onClick={() => actions.pause()} style={style.button} />
            : <FontAwesomeIcon icon={faPlayCircle} onClick={() => actions.play()} style={style.button} />}
          {props.children}
        </div>
        <span style={style.time}>{elapsed}</span>
      </div>
    </>
  );
});

export default Player;
