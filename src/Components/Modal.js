import React from 'react';
import Portal from './Portal';

export default (props) => {
  return (
    <Portal>
      <div className="modal" style={modal}>
        <div id="modalWrapper" style={modalWrapper}>
          <div id="modalBody" style={modalBody}>
            <span 
              id="closePortalBtn" 
              style={closePortalBtn}
              onClick={() => props.toggleShow()}>close [x]</span>
            {/* {this.props.children} */}
            Hello world!!!!
          </div>
        </div>
      </div>
    </Portal>
  )
}

const modal = {
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: 'rgb(33,33,33,.8)',
  display: 'block',
  width: '100%',
  height: '100%',
  zIndex: 9999,
}

const modalWrapper = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',    
}

const modalBody =  {
  backgroundColor: 'white',
  borderRadius: '4px',
  width: '550px',
  minHeight: '550px',
  margin: 'auto',
  padding: '15px'
}

const closePortalBtn = {
  display: 'block',
  width: '100%',
  textAlign: 'right',
  fontSize: '1em',
  padding: '5px',
  color: 'silver',
  border: 'none',
  cursor: 'pointer',  
}