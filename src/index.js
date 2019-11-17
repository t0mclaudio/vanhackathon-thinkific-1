import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';

const mount = document.getElementById('mount');


class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      prompt: false,
      playing: false,
      currentSecond: 0,
      timeElapsed: 0
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
    if (elapsedSeconds === 5) {
      this.pause()
    }
  }

  convertSecondsToInt(time) {
    return parseInt(time)
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
      seconds = Math.floor(time - minutes * 60)

    return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}`
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ position: 'relative'}} >
          {this.state.prompt ? <Prompt /> : ""}
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

const Prompt = () => {
  return (
    <div style={style.cover} >
      <button onClick={() => alert("Clicked")}>Click here</button>
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

