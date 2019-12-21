import React from 'react';
import { withRouter } from 'react-router-dom';
import { Consumer } from '../Context';
import Canvas from '../Components/Canvas';

const style = {
  label: {
    color: 'white',
  },
};

const Form = (props) => (
  <Consumer>
    {({ url, title, description, actions }) => {
      const handleSubmit = (e) => {
        actions.handleInfoSubmit(e);
        props.history.push('/create');
      };

      return (
        <Canvas>
          <form onSubmit={handleSubmit} style={{ padding: '35px' }}>
            <div className="form-group">
              <label htmlFor="title" style={style.label}>Please enter title</label>
              <input id="title" className="form-control" type="text" name="title" onChange={(e) => actions.handleChange(e)} value={title} />
            </div>
            <div className="form-group">
              <label htmlFor="description" style={style.label}>Please enter description</label>
              <textarea id="description" className="form-control" type="url" name="description" onChange={(e) => actions.handleChange(e)} value={description} />
            </div>
            <div className="form-group">
              <label htmlFor="urlfield" style={style.label}>Please enter Video URL</label>
              <input id="urlfield" className="form-control" type="url" name="url" onChange={(e) => actions.handleChange(e)} value={url} />
            </div>

            <input type="submit" className="btn btn-warning" />
          </form>
        </Canvas>
      );
    }}
  </Consumer>
);

export default withRouter(Form);
