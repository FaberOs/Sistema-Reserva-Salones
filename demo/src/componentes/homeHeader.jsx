import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesHome.css';

import { BotonIniciarSesionHome } from './button';

function principalHeader() {
  return (
    <div className="home-header shadow-lg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 col-6 text-center">
            <a className="navbar-brand" href="/home">
              <img className="logoU img-fluid" src={require("../imagenes/logoUnicauca.png")} alt="logoUnicauca" />
            </a>
          </div>
          <div className="col-md-10 col-6 text-end">
            <Link to="/login">
              <BotonIniciarSesionHome />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default principalHeader;