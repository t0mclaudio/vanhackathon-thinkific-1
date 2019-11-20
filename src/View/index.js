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
      data: {
        info: {
          url: 'https://home.wistia.com/medias/e4a27b971d',
          title: 'This is a test data'
        },
        activeInModal: 'A',
        questions: [
          {
            question: "Best programming language",
            answer: "python",
            choice: "python",
            choices: ["python", "javascript", "java", "ruby"],
            time: 2,
            elapsed: "00.00.02",
            type: 'multiple choice'
          },
          {
            question: "Largest city in the world",
            answer: "davao",
            time: 4,
            elapsed: '00.00.04',
            type: "identification"
          }
        ],
        stamps: [],
        isInfoSet: false,
        isComposing: false,
        time: {}
      }
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
    this.setState({prompted:false})
  }

  render() {
    return (
      <React.Fragment>
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
          <h1>{this.state.data.info.title}</h1>
        </Canvas>
      </React.Fragment>
    )
  }
}