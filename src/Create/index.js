import React from 'react';
import Player from '../Components/Player';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    }
  }
  submitUrl(e) {
    e.preventDefault()
    console.log(e.target.elements.url.value)
    this.setState({url:e.target.elements.url.value})
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={e => this.submitUrl(e)}>
          <label htmlFor="urlfield">Please enter URL</label>
          <input id="urlfield" type="url" name="url" />
          <input type="submit" />
        </form>

        <div style={{ position: 'relative', width: '640px', height: '360px' }}>
          {/* <Prompter /> */}
          <Player url={this.state.url}/>
        </div>
      </React.Fragment>

    )
  }
}

// const Prompter = props => {
//   return (
//     <div style={{ width: '90%', height: '90%', position: 'absolute', zIndex: 999, padding: '10px' }}>
//       <input type="text" style={{ display: 'block', padding: '10px 0', margin: '10px', width: '250px' }} />
//       <input type="text" style={{ display: 'block', padding: '10px 0', margin: '10px', width: '250px' }} />
//       <input type="text" style={{ display: 'block', padding: '10px 0', margin: '10px', width: '250px' }} />
//     </div>
//   )
// }