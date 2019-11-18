import React from 'react';
import Player from '../Components/Player';

import Modal from '../Components/Modal';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      openModal: false,
      currentTime: 0,
    }
    this.player = React.createRef();
  }

  submitUrl(e) {
    e.preventDefault()
    console.log(e.target.elements.url.value)
    this.setState({ url: e.target.elements.url.value })
  }

  openModal() {
    this.player.current.pause();
    this.setState({
      openModal: true,
      currentTime: this.player.current.reportCurrentSecond()
    })
  }

  closeModal() {
    this.setState({ openModal: false })
  }

  clear() {
    this.setState({ url: "" })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.url ?
          <button onClick={() => this.clear()}>Change Video</button>
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
          </div>: "" }


        {this.state.openModal ?
          <Modal toggleShow={() => this.closeModal()}>
            {this.state.currentTime}
          </Modal>
          : ""}
      </React.Fragment>

    )
  }
}

