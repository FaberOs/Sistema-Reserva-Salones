import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../hojas-de-estilo/inbox-facultad-styles.css';

import ReloadIcon from '../iconos/reload-icon.svg';
import PaginationLeftIcon from '../iconos/pagination-left-icon.svg';
import PaginationRightIcon from '../iconos/pagination-right-icon.svg';
import EllipsisIcon from '../iconos/ellipsis-icon.svg';
import RecycleIcon from '../iconos/recycle-bin-icon.svg';

import ClienteFacultades from '../services/ClienteFacultades';
import { BotonCrearFacultad } from './button';
import CreateFacultadModal from './crear-facultad-modal.jsx';

const FacultadInbox = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFacultad, setSelectedFacultad] = useState(null);
  const [showCreateFacultadModal, setShowCreateFacultadModal] = useState(false);
  const [facultades, setFacultades] = useState([]);

  const handleCreateFacultadClick = () => {
    setShowCreateFacultadModal(true);
  };

  const handleRowClick = (facultad) => {
    setSelectedFacultad(facultad);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleReloadClick = () => {
    // Actualizar la lista de facultades al hacer clic en recargar
    ClienteFacultades.ObtenerTodasLasFacultades()
      .then(response => {
        console.log('Facultades actualizadas:', response.data);
        setFacultades(response.data);
      })
      .catch(error => {
        console.error('Error al obtener facultades:', error);
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
        <div className='col-2'>
          <BotonCrearFacultad onClick={handleCreateFacultadClick} />
          <CreateFacultadModal show={showCreateFacultadModal} onHide={() => setShowCreateFacultadModal(false)} />
        </div>
        <div className="col-1 ml-auto text-right"></div>
        <div className="col-2 text-right">
          <img src={PaginationLeftIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
          <img src={PaginationRightIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
        </div>
      </div>
      {facultades.map(facultad => (
        <div key={facultad.idFacultad} className="row inbox-row" onClick={() => handleRowClick(facultad)}>
          <div className="col-1">
            <input type="checkbox" className="inbox-checkbox" />
          </div>
          <div className="col-1">
            {facultad.idFacultad}
          </div>
          <div className="col-4">
            {facultad.nombreFacultad}
          </div>
          <div className="col-4">
            {/* Puedes mostrar más detalles de la facultad aquí según tus necesidades */}
          </div>
          <div className="col-1">
          </div>
          <div className="col-2 text-center">
            <img
              src={RecycleIcon}
              alt="Eliminar"
              className="inbox-option-icon"
            // onClick={}
            />
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la Facultad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedFacultad && (
            <>
              <p>ID de Facultad: {selectedFacultad.idFacultad}</p>
              <p>Nombre de Facultad: {selectedFacultad.nombreFacultad}</p>
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

export default FacultadInbox;
