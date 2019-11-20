import React from 'react';
import ReactPlayer from 'react-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle, faFile } from '@fortawesome/free-solid-svg-icons'

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.info.url,
      playing: false,
      currentSecond: 0,
      elapsed: '00:00:00',
      seeking: false,
      played: 0,
      allowInsert: this.props.allowInsert || false
    }
  }

  togglePlayPause() {
    this.state.playing ? this.pause() : this.play()
  }

  play() {
    this.setState({ playing: true, overlay: false })
  }

  pause() {
    this.setState({ playing: false, overlay: true })
  }

  onProgress(state) {
    console.log(state)
    let elapsedSeconds = this.convertSecondsToInt(state.playedSeconds)
    this.timeElapsed(elapsedSeconds);
    this.props.reportElapsedTime(elapsedSeconds)
    this.setState({ played: state.played })
  }

  convertSecondsToInt(time) {
    return parseInt(Math.ceil(time))
  }

  timeElapsed(currentSecond) {
    this.setState({
      currentSecond: currentSecond,
      elapsed: this.convertSecondsToTime(currentSecond),
    })
  }

  convertSecondsToTime(timeInSeconds) {
    var pad = function (num, size) { return ('000' + num).slice(size * -1); },
      time = parseFloat(timeInSeconds).toFixed(3),
      hours = Math.floor(time / 60 / 60),
      minutes = Math.floor(time / 60) % 60,
      seconds = Math.floor(time - minutes * 60);

    return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`
  }

  reportTime() {
    return {
      currentSecond: this.state.currentSecond,
      elapsed: this.state.elapsed
    }
  }

  reportReady() {
    this.setState({ ready: true })
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleInsertClick() {
    this.props.handleInsertClick({
      currentSecond: this.state.currentSecond,
      elapsed: this.state.elapsed
    })
  }

  seekTo(sec) {
    this.player.seekTo(sec)
  }

  ref = player => {
    this.player = player
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ pointerEvents: 'none' }}>
          <ReactPlayer
            ref={this.ref}
            url={this.state.url}
            config={{
              wistia: {
                options: {
                  controlsVisibleOnLoad: false,
                  playButton: false
                }
              }
            }}
            onReady={() => this.reportReady()}
            playing={this.state.playing}
            onProgress={state => this.onProgress(state)} />
        </div>
        <div>
          <input
            style={{ width: '100%' }}
            type='range' min={0} max={1} step='any'
            value={this.state.played}
            onMouseDown={this.handleSeekMouseDown}
            onChange={this.handleSeekChange}
            onMouseUp={this.handleSeekMouseUp}
          />
        </div>
        <div style={style.footerWrapper}>
          <div style={style.buttons}>
            {this.state.playing ?
              <FontAwesomeIcon icon={faPauseCircle} onClick={() => this.togglePlayPause()} style={style.button} /> :
              <div>
                <FontAwesomeIcon icon={faPlayCircle} onClick={() => this.togglePlayPause()} style={style.button} />
                {this.state.allowInsert && this.state.currentSecond > 0 ?
                  <FontAwesomeIcon
                    icon={faFile}
                    onClick={() => this.handleInsertClick()}
                    style={style.insertButton} /> :
                  ""
                }

              </div>
            }
          </div>
          <span style={style.time}>{this.state.elapsed}</span>
        </div>
      </React.Fragment>
    )
  }
}

const style = {
  footerWrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignItems: 'center'
  },
  buttons: {
    padding: '10px'
  },

  insertButton: {
    marginLeft: '10px',
    color: '#ecf0f1',
    fontSize: '32px',

  },
  button: {
    color: '#ecf0f1',
    fontSize: '32px'
  },
  time: {
    textAlign: 'right',
    fontSize: '22px',
    paddingRight: '15px',
    color: 'white'
  }
}