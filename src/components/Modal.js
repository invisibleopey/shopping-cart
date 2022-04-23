import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

function Modal() {
  let navigate = useNavigate();

  function onDismiss() {
    navigate(-1);
  }

  return (
    <Dialog aria-labelledby="label" onDismiss={onDismiss}>
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          padding: '8px 8px',
        }}
      >
        <h1>CONTENT OF THE MODAL</h1>
        <button style={{ display: 'block' }} onClick={onDismiss}>
          Close
        </button>
      </div>
    </Dialog>
  );
}

export default Modal;
