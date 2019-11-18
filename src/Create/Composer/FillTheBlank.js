import React from 'react';

export default class FillTheBlank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      time: props.time
    }
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    //console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    //console.log(this.state)
    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="question">Question</label>
        <textarea id="question" name="question" value={this.state.question} onChange={e => this.handleChange(e)}></textarea>
        <label htmlFor="answer">Answer</label>
        <input id="answer" type="text" name="answer" value={this.state.answer} onChange={e => this.handleChange(e)}></input>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}