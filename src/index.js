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
      elapsed: 0
    }
  }

  play() {
    console.log('here')
    this.setState({ playing: true, prompt: false })
  }

  pause() {
    console.log('here')
    this.setState({ playing: false, prompt: true })
  }

  timeElapsed(state) {
    this.setState({ elapsed: this.sec2time(parseInt(state.playedSeconds)) })
  }

  sec2time(timeInSeconds) {
    var pad = function (num, size) { return ('000' + num).slice(size * -1); },
      time = parseFloat(timeInSeconds).toFixed(3),
      hours = Math.floor(time / 60 / 60),
      minutes = Math.floor(time / 60) % 60,
      seconds = Math.floor(time - minutes * 60)

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ position: 'relative', opacity: 1, backgroundColor: 'red'}} >
          {this.state.prompt ? <Prompt /> : ""}
          <div style={{ pointerEvents: 'none', backgroundColor: 'black' }}>
            <ReactPlayer url="https://home.wistia.com/medias/29b0fbf547"
              config = {{
                wistia: {
                  options: {
                    controlsVisibleOnLoad: false
                  }
                }
              }}
              playing={this.state.playing}
              onProgress={state => this.timeElapsed(state)} />
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
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    zIndex: "99",
    position: 'absolute',
    opacity: .6
  }
}

ReactDOM.render(<Sample />, mount);

