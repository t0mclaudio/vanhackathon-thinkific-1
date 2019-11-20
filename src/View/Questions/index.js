import React from 'react';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.q,
      answer: "",
      wrongAnswer: false
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value.toLocaleLowerCase(),
      wrongAnswer: false
    })
  }

  submitAnswer(e) {
    e.preventDefault()
    let correctAnswer = this.state.question.answer.toLowerCase().trim()
    let answer = this.state.answer.trim()
    if (answer === correctAnswer) {
      alert(true)
      this.props.continue()
    } else {
      alert(false)
      this.setState({
        wrongAnswer: true,
      })
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.question.question}</p>
        <form onSubmit={(e) => this.submitAnswer(e)}>
          <input type="text" className={this.state.wrongAnswer ? style.wrong : style.correct} name="answer" value={this.state.answer} onChange={e => this.handleChange(e)} />
          {this.state.wrongAnswer ?
            <div>
              <small id="passwordHelp" className="text-danger">
                That is the wrong answer. Try again
              </small>
            </div>
            : ""
          }
          <input type="submit" className="btn btn-warning mt-4" />
        </form>
      </div>
    )
  }
}

const style = {
  correct: "form-control",
  wrong: "form-control is-invalid"
}