import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesLogin.css';

// Componente del encabezado
function simpleHeader() {
  return (
    <div className="login-header">
      <a href="/home">
        <img className="logoU" src={require("../imagenes/logoUnicauca.png")} alt="logoUnicauca" />
      </a>
    </div>
  );
}

export default simpleHeader;