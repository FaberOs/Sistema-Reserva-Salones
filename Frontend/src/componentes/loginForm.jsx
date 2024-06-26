import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesLogin.css';
import { useNavigate } from 'react-router-dom';

import { BotonIniciarSesionLogin, Checkbox } from './button.jsx';
import TextInput from './textInput.jsx';
//import { useEffect } from 'react';

import ModalBienvenida from './modalBienvenida.jsx';
import ModalRechazo from './modalRechazo.jsx';
import ClienteAutenticacion from '../services/ClienteAutenticacion';
//import { error } from 'jquery';

function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalr, setShowModalr] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleConfirmModal = () => {
    setShowModal(false);    
    navigate('/home');
  };

  const handleConfirmModalR = () => {
    setShowModalr(false);   
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
    localStorage.setItem('User',JSON.stringify({
      "username": "juanperez",
      "contrasenia": "password",
      "rol": "ADMINISTRADOR"
    })); */

    // Aquí puedes agregar la lógica para procesar el inicio de sesión

    
    ClienteAutenticacion.Autenticar({
      "username": username,
      "contrasenia": password
    }).then(response => {
      setUsername(response.data.username);
      setPassword(response.data.contrasenia);
      localStorage.setItem('User',JSON.stringify(response.data));
      setShowModal(true);
      //alert("Bienvenido"); 
    }).catch(error => {
        //alert("Revise Credenciales"); 
        setShowModalr(true);
        console.log(error);
    })

    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
    console.log('Recordar datos:', rememberMe);
  };
/*
  useEffect(() => {
    ClienteAutenticacion.Autenticar({
      "username": "juanperez",
      "contrasenia": "contraseña1"
  }).then(response => {
      setUsername(response.data.username);
      setPassword(response.data.contrasenia);
      console.log(response.data.username);
    }).catch(error => {
        console.log(error);
    })
  },[])*/

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
                  <ModalBienvenida isOpen={showModal} onConfirm={handleConfirmModal}/>
                  <ModalRechazo isOpen={showModalr} onConfirm={handleConfirmModalR}/>
                </div>
              </form>
              <div className="forgot-pass text-center mt-2">
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


