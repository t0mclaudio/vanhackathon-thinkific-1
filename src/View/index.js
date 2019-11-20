import React from 'react';
import Player from '../Components/Player';
import Canvas from '../Create/Canvas';
import QuestionWrapper from './QuestionWrapper';
import Questions from './Questions';

export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prompted: false,
      question: null,
      data: this.props.data
    }
    this.player = React.createRef();
  }

  openPrompt() {
    this.player.current.pause();
    this.setState({
      prompted: true,
      time: this.player.current.reportTime()
    })
  }

  closePrompt() {
    this.setState({ prompted: false, activeInModal: 'A' })
  }

  continue() {
    this.player.current.play()
    this.setState({ prompted: false })
  }

  reportElapsedSeconds(elapsed) {
    if (this.state.data.questions.find(q => q.time === elapsed)) {
      let question = this.state.data.questions.find(q => q.time === elapsed)
      this.player.current.pause()
      this.player.current.seekTo(elapsed)
      this.setState({ prompted: true, question: question })
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.data.info ?
          <Canvas>
            {this.state.prompted ?
              <QuestionWrapper state={this.state} closePrompt={() => this.closePrompt()}>
                <Questions q={this.state.question} continue={() => this.continue()} />
              </QuestionWrapper>
            : "" }
            <Player
              info={this.state.data.info}
              ref={this.player}
              reportElapsedTime={(e) => this.reportElapsedSeconds(e)}
              handleInsertClick={null}
            />
          </Canvas>
        : <h1 style={{ textAlign: 'center' }}>No title found</h1>}
      </React.Fragment>
    )
  }
}