import React from 'react';

export default class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      choice:"",
      choices: [],
      time: props.time,
      type: 'multiple choice'
    }
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

  }

  handleSubmit() {
    console.log(this.state)
    this.props.handleSubmit(this.state)
  }

  handleChoiceSubmit(e) {
    e.preventDefault()
    let choices = this.state.choices
    let choice = this.state.choice
    choices.push(choice)
    this.setState({choices:choices, choice: ""})
  }

  render() {
    return (
     <div>
       <label htmlFor="question">Please enter your question</label>
       <textarea id="question" name="question" value={this.state.question} onChange={e => this.handleChange(e)} />
       <label htmlFor="answer">Please enter corrent Answer</label>
       <input id="answer" type="text" name="answer" value={this.state.answer} onChange={e => this.handleChange(e)}  />

       <form onSubmit={e => this.handleChoiceSubmit(e)}>
         <label htmlFor="choice">Please enter your choices</label>
         <input id="choice" name="choice" onChange={e => this.handleChange(e)} value={this.state.choice} />
         <input type="submit" value="Add" />
        <div>{
          this.state.choices.map(choice => {
            return (
              <div key={choice} style={{padding: '10px', border: '1px solid gray'}}>
                {choice}
              </div> 
            )
          })
          }</div>
       </form>
       <button onClick={e => this.handleSubmit(e)}>Submit</button>

     </div>
    )
  }
}