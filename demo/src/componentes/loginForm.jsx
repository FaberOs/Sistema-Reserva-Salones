import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesLogin.css';

import { BotonIniciarSesion, Checkbox } from './button';

// Componente del formulario de inicio de sesión
function LoginForm() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-header">
              <h3 className="mb-0 text-dark text-center">Iniciar sesión</h3>
            </div>
            <div className="card-body custom-pd">
              <form autoComplete="off">
                <div className="form-group mb-3 d-flex justify-content-center align-items-center">
                  <i className="fa-light fa-user"></i>
                  <input type="text" placeholder="Usuario" className="form-control border-custom" id="username" required />
                </div>
                <div className="form-group mb-3 d-flex justify-content-center align-items-center">
                  <input type="password" placeholder="Contraseña" className="form-control border-custom" id="password" required />
                </div>
                <div className="form-group mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <Checkbox label="Recordar datos" />
                    </div>
                    <a href="#page">¿Olvidaste tu contraseña?</a>
                  </div>
                </div>
                <div className="form-group text-center">
                  <BotonIniciarSesion />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
