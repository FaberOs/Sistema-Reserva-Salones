import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../hojas-de-estilo/buttonStyle.css'

import ConfirmModal from './confirm-modal.jsx';

export function BotonIniciarSesionHome({ onClick }) {
  return (
    <button className='btn border-custom text-light btn-sm' onClick={onClick}>Iniciar Sesión</button>
  );
}

export function BotonIniciarSesionLogin({ onClick }) {
  return (
    <button className='btn custom-boton' onClick={onClick}>Iniciar Sesión</button>
  );
}

export function BotonCierraSesion({ onClick }) {
  return (
    <button className='btn custom-boton text-light btn-sm' onClick={onClick}>Cierra Sesión</button>
  );
}

export function BotonEliminar({ onClick }) {
  return (
    <button className='btn btn-light border-custom' onClick={onClick}>Eliminar</button>
  );
}

export function BotonAceptar({ color }) {
  const [showModal, setShowModal] = useState(false);

  const buttonStyle = {
    backgroundColor: color,
    border: `2px solid ${color}`,
    color: '#fff',
  };

  const handleAcceptClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    // Realiza la acción de confirmación aquí
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="btn" style={buttonStyle} onClick={handleAcceptClick}>
        Aceptar
      </button>
      <ConfirmModal isOpen={showModal} onConfirm={handleConfirm} onCancel={handleCancel} />
    </div>
  );
}

export function BotonSiguiente({ onClick, color }) {
  const buttonStyle = {
    backgroundColor: color, 
    border: `2px solid ${color}`,
    color: '#fff',
  };

  return (
    <button className='btn' style={buttonStyle} onClick={onClick}>
      Siguiente
    </button>
  );
}

export function BotonCancelar({ onClick, color }) {
  const buttonStyle = {
    backgroundColor: color, 
    border: `2px solid ${color}`, 
    color: '#fff',
  };

  return (
    <button className='btn' style={buttonStyle} onClick={onClick}>
      Cancelar
    </button>
  );
}

export function BotonRegresar({ onClick, color }) {
  const buttonStyle = {
    backgroundColor: color, 
    border: `2px solid ${color}`,
    color: '#fff',
  };

  return (
    <button className='btn' style={buttonStyle} onClick={onClick}>
      Regresar
    </button>
  );
}

export function Checkbox({ label, checked, onChange }) {
  return (
    <div className="form-group mb-3">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="rememberMe"
          checked={checked}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor="rememberMe">
          {label}
        </label>
      </div>
    </div>
  );
}

export function BotonSolicitarReserva({ onClick, color, icon }) {
  const buttonStyle = {
    backgroundColor: color,
  };
  
  return (
    <button className='button w-100 mb-2' style={buttonStyle} onClick={onClick}>
      <div className='icon'>
        <img src={icon} alt="Icono" style={{ width: '80%', height: '80%' }} />
      </div>
      <span className='button-text'>Solicitar Reserva</span>
    </button>
  );
}

export function BotonConsultarReserva({ onClick, color, icon }) {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className='button w-100 mb-2' style={buttonStyle} onClick={onClick}>
      <div className='icon'>
        <img src={icon} alt="Icono" style={{ width: '80%', height: '80%' }} />
      </div>
      <span className='button-text'>Consultar Reserva</span>
    </button>
  );
}

export function BotonSolicitarAuditorio({ onClick, color, icon }) {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className='button w-100 mb-2' style={buttonStyle} onClick={onClick}>
      <div className='icon'>
        <img src={icon} alt="Icono" style={{ width: '80%', height: '80%' }} />
      </div>
      <span className='button-text'>Solicitar Auditorio</span>
    </button>
  );
}