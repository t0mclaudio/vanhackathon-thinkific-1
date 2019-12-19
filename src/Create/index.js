import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Composer from './Composer';
import Form from './Form';
import Canvas from './Canvas';
import Player from '../Components/Player';
import Questions from './Questions';
import ViewBtn from './ViewBtn';

import { Consumer } from '../Context';

const Create = (props) => {
  return (
    <Consumer>
      {({ isComposing, isInfoSet, questions, actions }) => (
        <>
          <Canvas>
            { isComposing && <Composer /> }
            {isInfoSet ?
              <Player>
                <FontAwesomeIcon icon={faFile} onClick={actions.handleInsertClick} style={style.insertButton} />
              </Player> :
              <Form handleInfoSubmit={info => actions.handleInfoSubmit(info)} />
            }
            {isInfoSet && questions.length > 0 &&
              <Link to="/view"
                style={style.viewVideoBtn}
                className="btn btn-success"
                onClick={() => actions.handleViewVideo()}><ViewBtn /></Link>
            }
          </Canvas>
          {isInfoSet && <Questions qs={questions} />}
        </>
      )}
    </Consumer>
  )
}

const style = {
  viewVideoBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
  },
  insertButton: {
    marginLeft: '10px',
    color: '#ecf0f1',
    fontSize: '32px',
  },
};

export default Create;
