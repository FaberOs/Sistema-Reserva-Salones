import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/inbox-styles.css'; // Importa los estilos CSS

import ReloadIcon from "../iconos/reload-icon.svg";
import PaginationIcon from "../iconos/pagination-icon.svg";
import EllipsisIcon from "../iconos/ellipsis-icon.svg";

const Inbox = () => {
  return (
    <div className="container mt-4 inbox-container">
      <div className="row bg-light p-2 align-items-center">
        <div className="col-1">
          <input type="checkbox" />
        </div>
        <div className="col-1">
          <img
            src={ReloadIcon}
            alt="Refrescar"
            className="img-fluid"
          />
        </div>
        <div className="col-1">
          <img
            src={EllipsisIcon}
            alt="Elipsis"
            className="img-fluid"
          />
        </div>
        <div className="col-3 ml-auto text-right">
          <img
            src={PaginationIcon}
            alt="Pagination"
            className="img-fluid"
          />
        </div>
        <div className="col-3 text-right">
          <img
            src={PaginationIcon}
            alt="Pagination"
            className="img-fluid"
          />
        </div>
      </div>

      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="row inbox-row">
          <div className="col-1">
            <input type="checkbox" />
          </div>
          <div className="col-1">
            Contenido aquí
          </div>
          <div className="col-1">
            Contenido aquí
          </div>
          <div className="col-3 ml-auto text-right">
            Contenido aquí
          </div>
          <div className="col-3 text-right">
            Contenido aquí
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inbox;
