import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesLogin.css';

import { BotonIniciarSesionLogin, Checkbox } from './button.jsx';
import TextInput from './textInput.jsx';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el inicio de sesión
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
    console.log('Recordar datos:', rememberMe);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-header">
              <h3 className="mb-0 text-dark text-center">Iniciar sesión</h3>
            </div>
            <div className="card-body custom-pd">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <TextInput
                  id="username"
                  type="text"
                  placeholder="Usuario"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
                <TextInput
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <Checkbox
                  label="Recordar datos"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <div className="form-group text-center mt-3">
                  <BotonIniciarSesionLogin />
                </div>
              </form>
              <div className="text-center mt-2">
                <a href="#forgot-password">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;


