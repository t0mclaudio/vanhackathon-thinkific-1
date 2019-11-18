import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends Component {
  render() {
    const { children } = this.props
    return (
      ReactDOM.createPortal(
        children,
        document.getElementById('modal')
      )
    )
  }
}
