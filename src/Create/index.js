import React from 'react';
import Player from '../Components/Player';

import Modal from '../Components/Modal';
import Composer from './Composer';
import ComposerWrapper from './Composer/ComposerWrapper';

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
        {this.state.url ?
          <button onClick={() => this.clearURL()}>Change Video</button>
          :
          <form onSubmit={e => this.submitUrl(e)}>
            <label htmlFor="urlfield">Please enter URL</label>
            <input id="urlfield" type="url" name="url" />
            <input type="submit" />
          </form>
        }

        <div style={{ position: 'relative', width: '640px', height: '390px', backgroundColor: 'black' }}>
          {this.state.url ?
            <Player url={this.state.url} ref={this.player} />
            :
            ""
          }

        </div>
        {this.state.url ?
          <div>
            <button onClick={() => this.openModal()}>Create new prompt</button>
          </div> : ""}


        {this.state.openModal ?
          <Modal toggleShow={() => this.closeModal()}>
            <ComposerWrapper state={this.state} updateModalModule={(id) => this.updateModalModule(id)} >
              <Composer state={this.state} updateModalModule={(id) => this.updateModalModule(id)} />
            </ComposerWrapper>
          </Modal>
          : ""}
      </React.Fragment>

    )
  }
}