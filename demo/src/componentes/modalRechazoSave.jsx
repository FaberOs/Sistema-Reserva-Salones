import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../hojas-de-estilo/confirm-modal-styles.css'
import ExclamationIcon from '../iconos/exclamation-icon.svg';

function ModalRechazoSave({ isOpen, onConfirm}) {

  const modalStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div>
      <div className={`modal-backdrop ${isOpen ? 'show' : ''}`} style={modalStyle}></div>
      <div className={`modal ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={modalStyle}>
        <div className="modal-dialog d-flex align-items-center justify-content-center" role="document">
          <div className="modal-content text-center">
            <div className="modal-body">
              <img src={ExclamationIcon} alt="Exclamation Icon" />
              <p>No se pudo generar la reserva.</p>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-primary buttonAceptar" onClick={onConfirm}>Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}export default ModalRechazoSave;