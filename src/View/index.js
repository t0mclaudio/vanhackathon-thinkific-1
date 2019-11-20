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
      currentQuestion: null,
      data: this.props.data
    }
    this.player = React.createRef();
  }

  openComposer() {
    this.player.current.pause();
    this.setState({
      isComposing: true,
      time: this.player.current.reportTime()
    })
  }

  closeComposer() {
    this.setState({ isComposing: false, activeInModal: 'A' })
  }

  updateModalModule(id) {
    this.setState({ activeInModal: id })
  }

  reportElapsedSeconds(elapsed) {
    if (this.state.data.questions.find(q => q.time === elapsed)) {
      let currentQuestion = this.state.data.questions.find(q => q.time === elapsed)
      this.player.current.pause()
      this.player.current.seekTo(elapsed) // go to next second
      this.setState({ prompted: true, currentQuestion: currentQuestion })
    }
  }

  handleInsertClick(time) {
    this.openComposer()
  }

  continue() {
    this.player.current.play()
    this.setState({ prompted: false })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.data.info ?
          <Canvas>
            <div style={{ backgroundColor: '#222f3e' }}>
              {this.state.prompted ?
                <QuestionWrapper
                  state={this.state}
                  closeComposer={() => this.closeComposer()}
                  updateModalModule={(id) => this.updateModalModule(id)}
                >
                  <Questions q={this.state.currentQuestion} continue={() => this.continue()} />
                </QuestionWrapper>
                : ""}
              <Player
                info={this.state.data.info}
                ref={this.player}
                reportElapsedTime={(e) => this.reportElapsedSeconds(e)}
                handleInsertClick={() => console.log('here')}
              />
            </div>
          </Canvas>
          : <h1 style={{textAlign: 'center'}}>No title found</h1>}
      </React.Fragment>
    )
  }
}