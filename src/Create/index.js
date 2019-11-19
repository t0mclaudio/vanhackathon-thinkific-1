import React from 'react';
import Modal from '../Components/Modal';
import Composer from './Composer';
import ComposerWrapper from './Composer/ComposerWrapper';
import Form from './Form';
import Canvas from './Canvas';
import Player from '../Components/Player';
import ModalWrapper from './Composer/ModalWrapper';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      isInfoSet: false,
      isComposing: false,
      time: {},
      activeInModal: 'A',
      prompts: []
    }
    this.player = React.createRef();
  }

  handleInfoSubmit(info) {
    this.setState({ info: info, isInfoSet: true })
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

  handleSubmit(data) {
    let prompts = this.state.prompts;
    prompts.push(data)
    this.setState({ prompts: prompts })
    this.closeComposer()
  }

  handleInsertClick(time) {
    this.openComposer()
  }

  render() {
    return (
      <div className="mt-3">
        <Canvas>
          {this.state.isComposing ?
            <ComposerWrapper
              state={this.state}
              closeComposer={() => this.closeComposer()}
              updateModalModule={(id) => this.updateModalModule(id)}>
              <Composer
                state={this.state}
                updateModalModule={(id) => this.updateModalModule(id)}
                handleSubmit={data => this.handleSubmit(data)} />
            </ComposerWrapper>
            : ""}
          {this.state.isInfoSet ?
            <Player
              info={this.state.info}
              ref={this.player}
              allowInsert={true}
              handleInsertClick={time => this.handleInsertClick(time)}
            /> :
            <Form handleInfoSubmit={info => this.handleInfoSubmit(info)} />
          }
        </Canvas>
        <div>
          {this.state.prompts.map(prompt => {
            return (
              <div style={{ padding: '10px', border: '1px solid gray' }}>{`${prompt.question} : ${prompt.answer}`}</div>
            )

          })}
        </div>
      </div>
    )
  }
}
