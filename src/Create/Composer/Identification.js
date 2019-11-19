import React from 'react';

export default class FillTheBlank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      time: props.time.time,
      elapsed: props.time.elapsed,
      type: "identification"
    }
  }
  handleChange(event) {
    console.log(event.target.name)
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
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <textarea id="question" name="question" value={this.state.question} onChange={e => this.handleChange(e)} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <input id="answer" type="text" name="answer" value={this.state.answer} onChange={e => this.handleChange(e)} className="form-control" />
        </div>
        <input type="submit" value="Submit" className="btn btn-warning" />
      </form>
    )
  }
}