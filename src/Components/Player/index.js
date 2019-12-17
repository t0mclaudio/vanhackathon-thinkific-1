/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faFile } from '@fortawesome/free-solid-svg-icons';

import Seeker from './Seeker';

import { convertSecondsToInt, convertSecondsToTime } from './helper';
import style from './style';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    const { url } = props.info;
    const { allowInsert } = props;
    this.state = {
      url,
      playing: false,
      currentSecond: 0,
      elapsed: '00:00:00',
      played: 0,
      allowInsert: allowInsert || false,
    };
  }

  onProgress(state) {
    const { reportElapsedTime } = this.props;
    const elapsedSeconds = convertSecondsToInt(state.playedSeconds);
    this.timeElapsed(elapsedSeconds);
    reportElapsedTime(elapsedSeconds);
    this.setState({ played: state.played });
  }

  ref = (player) => {
    this.player = player;
  }

  handleSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  }

  handleSeekMouseUp = (e) => {
    this.player.seekTo(parseFloat(e.target.value));
  }

  play() {
    this.setState({ playing: true });
  }

  pause() {
    this.setState({ playing: false });
  }

  timeElapsed(currentSecond) {
    this.setState({
      currentSecond,
      elapsed: convertSecondsToTime(currentSecond),
    });
  }

  handleInsertClick() {
    const { currentSecond, elapsed } = this.state;
    const { handleInsertClick } = this.props;
    handleInsertClick({ currentSecond, elapsed });
  }

  seekTo(sec) {
    this.player.seekTo(sec);
  }

  reportTime() {
    const { currentSecond, elapsed } = this.state;
    return {
      currentSecond,
      elapsed,
    };
  }

  render() {
    const {
      url,
      playing,
      played,
      currentSecond,
      allowInsert,
      elapsed,
    } = this.state;
    return (
      <>
        <div style={{ pointerEvents: 'none' }}>
          <ReactPlayer
            ref={this.ref}
            url={url}
            config={{
              wistia: {
                options: {
                  controlsVisibleOnLoad: false,
                  playButton: false,
                },
              },
            }}
            onReady={() => this.reportReady()}
            playing={playing}
            onProgress={(state) => this.onProgress(state)}
          />
        </div>
        <Seeker
          played={played}
          handleSeekChange={this.handleSeekChange}
          handleSeekMouseUp={this.handleSeekMouseUp}
        />
        <div style={style.footerWrapper}>
          <div style={style.buttons}>
            { playing
              ? <FontAwesomeIcon icon={faPauseCircle} onClick={() => this.pause()} style={style.button} />
              : <FontAwesomeIcon icon={faPlayCircle} onClick={() => this.play()} style={style.button} />}
            { allowInsert
              && !playing
              && currentSecond > 1
              && <FontAwesomeIcon icon={faFile} onClick={() => this.handleInsertClick()} style={style.insertButton} />}
          </div>
          <span style={style.time}>{elapsed}</span>
        </div>
      </>
    );
  }
}

Player.propTypes = {
  info: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  allowInsert: PropTypes.bool.isRequired,
  handleInsertClick: PropTypes.func.isRequired,
  reportElapsedTime: PropTypes.func.isRequired,
};
