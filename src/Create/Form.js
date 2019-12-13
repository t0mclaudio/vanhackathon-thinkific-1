import React, { useState } from 'react';

export default (props) => {
  const initialState = {
    url: "",
    title: "",
    description: "",
  }
  const [info, setInfo] = useState(initialState);

  const handleChange = (e) => setInfo({...info, [e.target.name]: e.target.value });

  const handleInfoSubmit = (e) => {
    e.preventDefault()
    props.handleInfoSubmit(info)
  };

  return (
    <form onSubmit={e => handleInfoSubmit(e)} style={{ padding: '35px' }}>
      <div className="form-group">
        <label htmlFor="title" style={style.label} >Please enter title</label>
        <input id="title" className="form-control" type="text" name="title" onChange={e => handleChange(e)} value={info.title} />
      </div>
      <div className="form-group">
        <label htmlFor="description" style={style.label}>Please enter description</label>
        <textarea id="description" className="form-control" type="url" name="description" onChange={e => handleChange(e)} value={info.description} />
      </div>
      <div className="form-group">
        <label htmlFor="urlfield" style={style.label}>Please enter Video URL</label>
        <input id="urlfield" className="form-control" type="url" name="url" onChange={e => handleChange(e)} value={info.url} />
      </div>

      <input type="submit" className="btn btn-warning" />
    </form>
  )
}

const style = {
  label: {
    color: 'white'
  }
}