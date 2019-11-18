import React from 'react';
import Player from '../Components/Player';

import Modal from '../Components/Modal';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      openModal: false,
      time: {},
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
      time: this.player.current.reportTime()
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
            <SelectQuestionType time={this.state.time} />  
          </Modal>
          : ""}
      </React.Fragment>

    )
  }
}

const SelectQuestionType = props => {
  return (
    <div>
      <h3>Prompt will be positioned at {props.time.elapsed}</h3>
      <div>
        <button>Fill in the blank</button>
        <button>Multiple choice</button>
        <button>True or False</button>
        <button>Poll</button>
      </div>
    </div>
  )
}
