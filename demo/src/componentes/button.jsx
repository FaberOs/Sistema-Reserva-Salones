import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesLogin.css';

export function BotonIniciarSesion({ onClick }) {
  return (
    <button className='btn btn-light border-custom text-secondary' onClick={onClick}>Iniciar Sesión</button>
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
      <label>
        <input type="checkbox" className='form-check-input border-custom' id='RememberMe' checked={checked} onChange={onChange} />
        <label className='form-check-label'>{label}</label>
      </label>
    );
}