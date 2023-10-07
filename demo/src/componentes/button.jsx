import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/buttonStyle.css'

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

export function BotonEliminar({ onClick }) {
  return (
    <button className='btn btn-light border-custom' onClick={onClick}>Eliminar</button>
  );
}

export function BotonSiguiente({ onClick }) {
  return (
    <button className='btn btn-light border-custom' onClick={onClick}>Siguiente</button>
  );
}

export function BotonCancelar({ onClick }) {
  return (
    <button className='btn btn-light border-custom' onClick={onClick}>Cancelar</button>
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
    <button className='button' style={buttonStyle} onClick={onClick}>
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
    <button className='button' style={buttonStyle} onClick={onClick}>
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
    <button className='button' style={buttonStyle} onClick={onClick}>
      <div className='icon'>
        <img src={icon} alt="Icono" style={{ width: '80%', height: '80%' }} />
      </div>
      <span className='button-text'>Solicitar Auditorio</span>
    </button>
  );
}