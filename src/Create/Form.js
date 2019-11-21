import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      title: "",
      description: ""
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleInfoSubmit(e) {
    e.preventDefault()
    this.props.handleInfoSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={e => this.handleInfoSubmit(e)} style={{padding: '35px'}}>
        <div className="form-group">
          <label htmlFor="title" style={style.label} >Please enter title</label>
          <input id="title" className="form-control" type="text" name="title" onChange={e => this.handleChange(e)} value={this.state.title} />
        </div>
        <div className="form-group">
          <label htmlFor="description" style={style.label}>Please enter description</label>
          <textarea id="description" className="form-control" type="url" name="description" onChange={e => this.handleChange(e)} value={this.state.description} />
        </div>
        <div className="form-group">
          <label htmlFor="urlfield" style={style.label}>Please enter Video URL</label>
          <input id="urlfield" className="form-control" type="url" name="url" onChange={e => this.handleChange(e)} value={this.state.url} />
        </div>

        <input type="submit" className="btn btn-warning" />
      </form>
    )
  }
}

const style = {
  label: {
    color: 'white'
  }
}