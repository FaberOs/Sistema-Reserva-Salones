import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/inbox-styles.css'; // Importa los estilos CSS

import ReloadIcon from "../iconos/reload-icon.svg";
import PaginationLeftIcon from "../iconos/pagination-left-icon.svg";
import PaginationRightIcon from "../iconos/pagination-right-icon.svg";
import EllipsisIcon from "../iconos/ellipsis-icon.svg";

const Inbox = () => {
  return (
    <div className="container m-4 inbox-container">
      <div className="row align-items-center first-inbox-row">
        <div className="col-1">
          <input type="checkbox" className="inbox-checkbox" />
        </div>
        <div className="col-1">
          <img
            src={ReloadIcon}
            alt="Refrescar"
            className="inbox-container-icon"
          />
        </div>
        <div className="col-1">
          <img
            src={EllipsisIcon}
            alt="Elipsis"
            className="inbox-container-icon"
          />
        </div>
        <div className="col-1 ml-auto text-right">
          
        </div>
        <div className="col-2 text-right">
          <img
            src={PaginationLeftIcon}
            alt="Pagination"
            className="inbox-container-icon pagination-icon"
          />
          <img
            src={PaginationRightIcon}
            alt="Pagination"
            className="inbox-container-icon pagination-icon"
          />
        </div>
      </div>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="row inbox-row">
          <div className="col-1">
            <input type="checkbox" className="inbox-checkbox" />
          </div>
          <div className="col-1">
            {/* Contenido aquí */}
          </div>
          <div className="col-1">
            {/* Contenido aquí */}
          </div>
          <div className="col-3 ml-auto text-right">
            {/* Contenido aquí */}
          </div>
          <div className="col-3 text-right">
            {/* Contenido aquí */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inbox;
