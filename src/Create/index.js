import React from 'react';
import Modal from '../Components/Modal';
import Composer from './Composer';
import ComposerWrapper from './Composer/ComposerWrapper';
import Form from './Form';
import PlayerWrapper from './PlayerWrapper';
import Player from '../Components/Player';
import ModalWrapper from './Composer/ModalWrapper';
import NewButton from './NewButton';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      infoIsSet: false,
      url: "",
      openModal: false,
      time: {},
      activeInModal: 'A',
      prompts: []
    }
    this.player = React.createRef();
  }

  handleInfoSubmit(info) {
    this.setState({info:info, infoIsSet:true})
  }

  openModal() {
    this.player.current.pause();
    this.setState({
      openModal: true,
      time: this.player.current.reportTime()
    })
  }

  closeModal() {
    this.setState({ openModal: false, activeInModal: 'A' })
  }

  updateModalModule(id) {
    this.setState({ activeInModal: id })
  }

  handleSubmit(data) {
    let prompts = this.state.prompts;
    prompts.push(data)
    this.setState({ prompts: prompts })
    this.closeModal()
  }

  render() {
    return (
      <div className="mt-3">
        <Form set={this.state.infoIsSet} handleInfoSubmit={info => this.handleInfoSubmit(info)} />
        <PlayerWrapper state={this.state}>
          <Player info={this.state.info} ref={this.player} />
        </PlayerWrapper>
        <NewButton state={this.state} openModal={() => this.openModal()} />
        <ModalWrapper state={this.state}>
          <Modal toggleShow={() => this.closeModal()}>
            <ComposerWrapper state={this.state} updateModalModule={(id) => this.updateModalModule(id)} >
              <Composer 
                state={this.state} 
                updateModalModule={(id) => this.updateModalModule(id)} 
                handleSubmit={data => this.handleSubmit(data)}
                />
            </ComposerWrapper>
          </Modal>
        </ModalWrapper>
        <div>
          { this.state.prompts.map(prompt => {
            return (
              <div style={{padding:'10px', border: '1px solid gray'}}>{`${prompt.question} : ${prompt.answer}`}</div>
            )
            
          })}
        </div>
      </div>
    )
  }
}