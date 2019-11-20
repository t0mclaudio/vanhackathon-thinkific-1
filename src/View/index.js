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
      getEmail: {
        question: "To continue, type in your email address?",
        passThrough: true,
        type: 'get email',
        answer: ""
      },
      data: this.props.data,
      embedCode: ""
    }
    this.player = React.createRef();
  }

  componentWillReceiveProps(props) {
    this.setState({ embedCode: props.embedCode })
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
    if (elapsed === 1) {
      this.player.current.pause();
      this.player.current.seekTo(elapsed);
      this.setState({ prompted: true, question: this.state.getEmail })
    }
    if (this.state.data.questions.find(q => q.time === elapsed)) {
      this.player.current.pause()
      this.player.current.seekTo(elapsed)
      let question = this.state.data.questions.find(q => q.time === elapsed)
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
              : ""}
            <Player
              info={this.state.data.info}
              ref={this.player}
              reportElapsedTime={(e) => this.reportElapsedSeconds(e)}
              handleInsertClick={null}
            />
          </Canvas>
          : <h1 style={{ textAlign: 'center' }}>No title found</h1>}
        {this.state.embedCode ? 
          <div style={{width: '640px', marginTop: "15px"}}>
            <h5>Embed Code</h5>    
            <textarea readOnly value={this.state.embedCode} className="form-control" style={{height: '237px', fontSize: '13px'}} />
          </div>
        : null}
      </React.Fragment>
    )
  }
}