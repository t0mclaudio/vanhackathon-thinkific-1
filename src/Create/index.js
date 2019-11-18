import React from 'react';

export default () => {
  return (
    <form>
      <label htmlFor="urlfield">Please enter URL</label>
      <input id="urlfield" type="url" name="url" />
      <input type="submit" />
    </form>

  )
}