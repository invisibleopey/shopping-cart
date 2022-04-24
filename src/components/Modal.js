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
      <div className="modal-content">
        <span>CONTENT OF THE MODAL</span>
        <button style={{ display: 'block' }} onClick={onDismiss}>
          Close
        </button>
      </div>
    </Dialog>
  );
}

export default Modal;
