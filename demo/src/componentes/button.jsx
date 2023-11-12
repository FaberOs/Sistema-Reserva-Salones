import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../hojas-de-estilo/buttonStyle.css'
import { useNavigate } from 'react-router-dom';

import ConfirmModal from './confirm-modal.jsx';
import ClienteReserva from '../services/ClienteReservas';


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

export function BotonAceptar({sSalon, hS, pP, nE, m}) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "#0D4185",
    border: `2px solid #0D4185`,
    color: '#fff',
  };

  const handleAcceptClick = () => {
    setShowModal(true);
  };

  const handleConfirm = (e) => {
    // Realiza la acción de confirmación aqui.3
    setShowModal(false);    
    ClienteReserva.Reservar({
      "idSalon": parseInt(sSalon),
      "cedulaCiudadania": JSON.parse(localStorage.getItem('User')).numeroIdentificacion,
      "horasSolicitadas": parseInt(hS),
      "numeroDeEstudiantes": parseInt(nE),
      "estadoReserva": "PENDIENTE",
      "programaPosgrado":  pP,
      "edificio": "Edificio A",
      "ubicacionDocente": "salon 332",
      "mensaje": m,
      "fechaReserva": "2023-11-02T10:00:00"
    }).then(response => {
      alert("Guardado con exito"); 
      navigate('/home');
    }).catch(error => {
        alert("Fallo guardar la reserva, revise los datos"); 
        console.log(error);
    })    
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="btn" style={buttonStyle} onClick={handleAcceptClick}>
        Aceptar
        {parseInt(sSalon)}
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