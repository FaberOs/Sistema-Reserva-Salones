import React from 'react';
import { Link } from 'react-router-dom'; 

function Error404() {
  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <div className="text-center">
        <h1 className="display-3 font-weight-bold">Error 404</h1>
        <p className="lead">Página no encontrada</p>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <Link to="/home" className="btn btn-primary">Home</Link>
      </div>
    </div>
  );
}

export default Error404;


