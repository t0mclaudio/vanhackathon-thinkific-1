import React from 'react';
import ReactPlayer from 'react-player';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      prompt: false,
      playing: false,
      currentSecond: 0
    }
  }

  play() {
    this.setState({ playing: true, prompt: false })
  }

  pause() {
    this.setState({ playing: false, prompt: true })
  }

  onProgress(state) {
    console.log(state)
    let elapsedSeconds = this.convertSecondsToInt(state.playedSeconds)
    this.timeElapsed(elapsedSeconds);
    if ([3,6,9,12,15,18].includes(elapsedSeconds)) {
      this.player.seekTo(elapsedSeconds) // go to next second
      this.pause()
    }
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

  promptClicked() {
    this.play()
  }

  ref = player => {
    this.player = player
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ position: 'relative'}} >
          {this.state.prompt ? <Prompt promptClicked={() => this.promptClicked()} /> : ""}
          <div style={{ pointerEvents: 'none'}}>
            <ReactPlayer url="https://www.youtube.com/watch?v=jNgP6d9HraI"
              config = {{
                wistia: {
                  options: {
                    controlsVisibleOnLoad: false,
                    playButton: false
                  }
                }
              }}
              ref={this.ref}
              playing={this.state.playing}
              onProgress={state => this.onProgress(state)} />
          </div>
        </div>
        <button onClick={() => this.play()}>Play</button>
        <button onClick={() => this.pause()}>Pause</button>
        <h3>{this.state.elapsed}</h3>
      </React.Fragment>

    )
  }
}

const Prompt = props => {
  return (
    <div style={style.cover} >
      <button onClick={() => props.promptClicked()}>Click here</button>
    </div>
  )
}

const style = {
  cover: {
    width: '640px',
    height: '360px',
    backgroundColor: 'red',
    zIndex: "99",
    position: 'absolute',
    opacity: .6
  }
}

ReactDOM.render(<Sample />, mount);

