import React from 'react';
import ReactPlayer from 'react-player';
import Overlay from './Overlay';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      playing: false,
      currentSecond: 0,
      overlay: false,
      elapsed: 0,
      seeking: false,
      played: 0
    }
  }

  componentDidUpdate(previousProps) {
    if (previousProps.url !== this.props.url) {
      this.setState({ url: this.props.url })
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
    if ([5, 10].includes(elapsedSeconds)) {
      this.player.seekTo(elapsedSeconds) // go to next second
      this.pause()
    }
    this.setState({played: state.played})
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

  ref = player => {
    this.player = player
  }

  render() {
    return (
      <div style={{ position: 'relative' }} >
        {this.state.overlay ? <Overlay /> : null}
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
            style={{width:'100%'}}
            type='range' min={0} max={1} step='any'
            value={this.state.played}
            onMouseDown={this.handleSeekMouseDown}
            onChange={this.handleSeekChange}
            onMouseUp={this.handleSeekMouseUp}
          />
        </div>
        {this.state.ready ?
          <button onClick={() => this.togglePlayPause()} >
            {this.state.playing ? 'Pause' : 'Play'}
          </button> : ""
        }

        <span>{this.state.elapsed}</span>
      </div>
    )
  }
}