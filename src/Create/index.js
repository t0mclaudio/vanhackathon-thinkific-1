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
      activeInModal: 'A'
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
    this.setState({ openModal: false, activeInModal: 'A' })
  }

  clear() {
    this.setState({ url: "" })
  }

  updateModalModule(id) {
    this.setState({ activeInModal: id })
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
          </div> : ""}


        {this.state.openModal ?
          <Modal toggleShow={() => this.closeModal()}>
            <ComposerWrapper time={this.state.time} currentModule={this.state.activeInModal} updateModalModule={(id) => this.updateModalModule(id)} >
              <ModalSwitch module={this.state.activeInModal} updateModalModule={(id) => this.updateModalModule(id)} />
            </ComposerWrapper>
          </Modal>
          : ""}
      </React.Fragment>

    )
  }
}

const SelectQuestionType = props => {
  console.log(props)
  return (
    <div>
      <div>
        <button onClick={() => props.updateModalModule("B")}>Fill in the blank</button>
        <button onClick={() => props.updateModalModule("C")}>Multiple choice</button>
        <button onClick={() => props.updateModalModule("D")}>True or False</button>
      </div>
    </div>
  )
}

class FillInTheBlankComposer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: ""
    }
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <label for="question">Question</label>
        <textarea id="question" name="question" value={this.state.question}></textarea>
        <label for="answer">Answer</label>
        <input id="answer" type="text" name="answer" value={this.state.answer}></input>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


class MultipleChoiceComposer extends React.Component {
  render() {
    return (
      null
    )
  }
}

class TrueOrFalseComposer extends React.Component {
  render() {
    return (
      null
    )
  }
}


const ModalSwitch = props => {
  switch (props.module) {
    case "A":
      return <SelectQuestionType updateModalModule={(id) => props.updateModalModule(id)} />
    case "B":
      return <FillInTheBlankComposer />
    case "C":
      return <MultipleChoiceComposer />
    case "D":
      return <TrueOrFalseComposer />
    default:
      return <SelectQuestionType />
  }
}

const ComposerWrapper = props => {
  return (
    <div>
      {props.currentModule !== "A" ?
        <button onClick={() => props.updateModalModule("A")}>Back</button> : ""}
      <h3>Prompt will be positioned at {props.time.elapsed}</h3>
      {props.children}
    </div>
  )
}