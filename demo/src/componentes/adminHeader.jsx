import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesHome.css';
import { BotonIniciarSesionHome } from './button';
import { BotonCierraSesion } from './button';
import SidebarTop from './sidebar-offcanvas';

function AdminHeader() {
  const handleSubmit = (e) => {
    localStorage.clear();
  };

  return (
    <div className="home-header shadow-lg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 col-5 d-flex align-items-center">
            <Link to="/home">
              <img className="logoU img-fluid" src={require("../imagenes/logoUnicauca.png")} alt="logoUnicauca" />
            </Link>
          </div>
          <div className="col-md-10 col-7 d-flex align-items-center justify-content-end">
            {localStorage.length === 0 ? (
              <Link to="/login">
                <BotonIniciarSesionHome />
              </Link>
            ) : (
              <Link to="/" onClick={handleSubmit}>
                <BotonCierraSesion />
              </Link>
            )}
            <div className="d-sm-block d-md-none">
              <SidebarTop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;