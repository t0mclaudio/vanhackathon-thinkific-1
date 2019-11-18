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
      url: "",
      openModal: false,
      time: {},
      activeInModal: 'A'
    }
    this.player = React.createRef();
  }

  submitUrl(e) {
    e.preventDefault()
    this.setState({ url: e.target.elements.url.value })
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

  clearURL() {
    this.setState({ url: "" })
  }

  updateModalModule(id) {
    this.setState({ activeInModal: id })
  }

  render() {
    return (
      <React.Fragment>
        <Form state={this.state} clearURL={() => this.clearURL()} submitUrl={e => this.submitUrl(e)} />
        <PlayerWrapper state={this.state}>
          <Player url={this.state.url} ref={this.player} />
        </PlayerWrapper>
        <NewButton state={this.state} openModal={() => this.openModal()} />
        <ModalWrapper state={this.state}>
          <Modal toggleShow={() => this.closeModal()}>
            <ComposerWrapper state={this.state} updateModalModule={(id) => this.updateModalModule(id)} >
              <Composer state={this.state} updateModalModule={(id) => this.updateModalModule(id)} />
            </ComposerWrapper>
          </Modal>
        </ModalWrapper>
      </React.Fragment>
    )
  }
}