import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesHome.css';

function principalHeader() {
  return(
    <div className="header shadow-lg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 text-center">
            <a className="navbar-brand" href="#default">
              <img className="logoU" src={require("../imagenes/logoUnicauca.png")} alt="logoUnicauca" />
            </a>
          </div>
          <div className="col-md-10 text-end">
            <button className="btn btn-outline-light btn-sm rounded-2 border-custom" type="button">Iniciar sesión</button>
            <img className="user-image" src={require("../imagenes/user.png")} alt="Usuario" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default principalHeader;