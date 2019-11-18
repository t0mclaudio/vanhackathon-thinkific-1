import React from 'react';

export default (props) => {
  return (
    props.state.url ?
      <button onClick={() => props.clearURL()}>Change Video</button>
      :
      <form onSubmit={e => props.submitUrl(e)}>
        <label htmlFor="urlfield">Please enter URL</label>
        <input id="urlfield" type="url" name="url" />
        <input type="submit" />
      </form>
  )
}