import React from 'react';

export default (props) => {
  return (
    props.state.url ?
      <button onClick={() => props.clearURL()}>Change Video</button>
      :
      <form onSubmit={e => props.submitUrl(e)}>
        {/* <label htmlFor="title">Please enter title</label>
        <input id="title" type="text" name="title" required/>

        <label htmlFor="description">Please enter description</label>
        <textarea id="description" type="url" name="description" required/> */}

        <label htmlFor="urlfield">Please enter URL</label>
        <input id="urlfield" type="url" name="url" required/>

        <input type="submit" />
      </form>
  )
}