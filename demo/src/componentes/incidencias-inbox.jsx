import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

import '../hojas-de-estilo/inbox-styles.css';

import ReloadIcon from '../iconos/reload-icon.svg';
import PaginationLeftIcon from '../iconos/pagination-left-icon.svg';
import PaginationRightIcon from '../iconos/pagination-right-icon.svg';
import EllipsisIcon from '../iconos/ellipsis-icon.svg';

import ClienteIncidencias from '../services/ClienteIncidencias';

const IncidenciasInbox = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIncidencia, setSelectedIncidencia] = useState(null);
  const [incidencias, setIncidencias] = useState([]);

  const handleRowClick = (idIncidencia) => {
    ClienteIncidencias.getIncidenciaById(idIncidencia)
      .then((response) => {
        setSelectedIncidencia(response.data);
        setShowModal(true);
      })
      .catch((error) => {
        console.error('Error al obtener la incidencia por ID:', error);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleReloadClick = () => {
    // Cambia la llamada para obtener todas las incidencias
    ClienteIncidencias.getAllIncidencias()
      .then(response => {
        console.log('Incidencias obtenidas:', response.data);
        setIncidencias(response.data);
      })
      .catch(error => {
        console.error('Error al obtener incidencias:', error);
      });
  };

  useEffect(() => {
    handleReloadClick();
  }, []);

  return (
    <div className="container m-4 inbox-container">
      <div className="row align-items-center first-inbox-row">
        <div className="col-1">
          <input type="checkbox" className="inbox-checkbox" />
        </div>
        <div className="col-1">
          <img src={ReloadIcon} alt="Refrescar" className="inbox-container-icon" onClick={handleReloadClick} />
        </div>
        <div className="col-1">
          <img src={EllipsisIcon} alt="Elipsis" className="inbox-container-icon" />
        </div>
        <div className="col-1 ml-auto text-right"></div>
        <div className="col-2 text-right">
          <img src={PaginationLeftIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
          <img src={PaginationRightIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
        </div>
      </div>
      {incidencias.map(incidencia => (
        <div key={incidencia.id} className="row inbox-row" onClick={() => handleRowClick(incidencia.id)}>
          <div className="col-1">
            <input type="checkbox" className="inbox-checkbox" />
          </div>
          <div className="col-1">
            {incidencia.id}
          </div>
          <div className="col-3">
            {incidencia.remitente}
          </div>
          <div className="col-3">
            {incidencia.asunto}
          </div>
          <div className="col-3">
            {incidencia.fechaReporte}
          </div>
          <div className="col-3">
            {incidencia.mensaje}
          </div>
          <div className="col-2 text-center">
            {/* Puedes mostrar aquí otros detalles de la incidencia */}
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la incidencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedIncidencia && (
            <>
              <p>ID de Incidencia: {selectedIncidencia.id}</p>
              <p>Remitente: {selectedIncidencia.remitente}</p>
              <p>Asunto: {selectedIncidencia.asunto}</p>
              <p>Fecha de Reporte: {selectedIncidencia.fechaReporte}</p>
              <p>Mensaje: {selectedIncidencia.mensaje}</p>
              {/* ... (agregar el resto de los campos) ... */}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default IncidenciasInbox;
