import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesHome.css';

function ImageCarousel() {
  return (
    <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require("../imagenes/carousel1.jpg")} alt="Imagen 1" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={require("../imagenes/carousel2.jpg")} alt="Imagen 2" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={require("../imagenes/carousel3.jpg")} alt="Imagen 3" className="d-block w-100" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#imageCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </a>
      <a className="carousel-control-next" href="#imageCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </a>
    </div>
  );
}

export default ImageCarousel;
