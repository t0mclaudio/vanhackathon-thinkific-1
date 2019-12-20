import React from 'react';
import Identification from './Identification';
import Choices from './Choices';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.q,
      answer: '',
      wrongAnswer: false
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value.toLocaleLowerCase(),
      wrongAnswer: false,
    });
  }

  selectAnswer(answer) {
    this.setState({
      answer,
      wrongAnswer: false
    });
  }

  submitAnswer(e) {
    e.preventDefault();
    const correctAnswer = this.state.question.answer.toLowerCase().trim();
    const answer = this.state.answer.trim();
    if (answer === correctAnswer || this.state.question.passThrough) {
      this.props.continue();
    } else {
      this.setState({
        wrongAnswer: true,
      });
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.question.question}</p>
        { this.state.question.type === 'multiple choice'
          ? <Choices state={this.state} selectAnswer={(ans) => this.selectAnswer(ans)} submitAnswer={(e) => this.submitAnswer(e)} />
          : <Identification state={this.state} handleChange={(e) => this.handleChange(e)} submitAnswer={(e) => this.submitAnswer(e)} /> }
      </div>
    );
  }
}
