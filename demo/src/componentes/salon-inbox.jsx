import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../hojas-de-estilo/inbox-facultad-styles.css';

import ReloadIcon from '../iconos/reload-icon.svg';
import PaginationLeftIcon from '../iconos/pagination-left-icon.svg';
import PaginationRightIcon from '../iconos/pagination-right-icon.svg';
import EllipsisIcon from '../iconos/ellipsis-icon.svg';
import RecycleIcon from '../iconos/recycle-bin-icon.svg';
import LockIcon from '../iconos/lock-icon.svg';

import ClienteSalon from '../services/ClienteSalon';
import ClienteAuditorio from '../services/ClienteAuditorio';
import { BotonCrearSalon } from './button';
import CreateSalonModal from './crear-salon-modal';

const SalonInbox = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAuditorioModal, setShowAuditorioModal] = useState(false);
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [selectedAuditorio, setSelectedAuditorio] = useState(null);
  const [showCreateSalonModal, setShowCreateSalonModal] = useState(false);
  const [salones, setSalones] = useState([]);
  const [auditorios, setAuditorios] = useState([]);

  useEffect(() => {
    // Obtener todos los salones al cargar el componente
    ClienteSalon.obtenerTodosLosSalones()
      .then(response => {
        console.log('Salones obtenidos:', response.data);
        setSalones(response.data);
      })
      .catch(error => {
        console.error('Error al obtener salones:', error);
      });

    // Obtener todos los auditorios al cargar el componente
    ClienteAuditorio.obtenerTodosLosAuditorios()
      .then(response => {
        console.log('Auditorios obtenidos:', response.data);
        setAuditorios(response.data);
      })
      .catch(error => {
        console.error('Error al obtener auditorios:', error);
      });
  }, []);

  const handleCreateSalonClick = () => {
    setShowCreateSalonModal(true);
  };

  const handleRowClick = (salon) => {
    setSelectedSalon(salon);
    setSelectedAuditorio(null); // Limpiar la selección del auditorio
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseAuditorioModal = () => {
    setShowAuditorioModal(false);
  };

  const handleAuditorioRowClick = (auditorio) => {
    setShowAuditorioModal(true);
    setSelectedAuditorio(auditorio);
    setSelectedSalon(null); // Limpiar la selección del salón
  };

  const handleReloadClick = () => {
    // Actualizar la lista de salones y auditorios al hacer clic en recargar
    ClienteSalon.obtenerTodosLosSalones()
      .then(response => {
        console.log('Salones actualizados:', response.data);
        setSalones(response.data);
      })
      .catch(error => {
        console.error('Error al obtener salones:', error);
      });

    ClienteAuditorio.obtenerTodosLosAuditorios()
      .then(response => {
        console.log('Auditorios actualizados:', response.data);
        setAuditorios(response.data);
      })
      .catch(error => {
        console.error('Error al obtener auditorios:', error);
      });
  };

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
          <BotonCrearSalon onClick={handleCreateSalonClick} />
          <CreateSalonModal show={showCreateSalonModal} onHide={() => setShowCreateSalonModal(false)} />
        </div>
        <div className="col-1 ml-auto text-right"></div>
        <div className="col-2 text-right">
          <img src={PaginationLeftIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
          <img src={PaginationRightIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
        </div>
      </div>
      {salones.map(salon => (
        <div key={salon.idSalon} className={`row inbox-row ${selectedSalon === salon ? 'selected-row' : ''}`} onClick={() => handleRowClick(salon)}>
          <div className="col-1">
            <input type="checkbox" className="inbox-checkbox" />
          </div>
          <div className="col-2">{salon.idSalon}</div>
          <div className="col-2">{salon.capacidad}</div>
          <div className="col-2">{salon.numeracionSalon}</div>
          <div className="col-4">{salon.tipo}</div>
          <div className="col-1 text-center">
            <img
              src={RecycleIcon}
              alt="Eliminar"
              className="inbox-option-icon"
            // onClick={}
            />
          </div>
          <div className="col-1 text-center">
            <img
              src={LockIcon}
              alt="Bloquear"
              className="inbox-option-icon"
            // onClick={}
            />
          </div>
        </div>
      ))}
      {auditorios.map(auditorio => (
        <div key={auditorio.idAuditorio} className={`row inbox-row ${selectedAuditorio === auditorio ? 'selected-row' : ''}`} onClick={() => handleAuditorioRowClick(auditorio)}>
          <div className="col-1">
            <input type="checkbox" className="inbox-checkbox" />
          </div>
          <div className="col-2">{auditorio.idAuditorio}</div>
          <div className="col-2">{auditorio.capacidad}</div>
          <div className="col-2">{auditorio.numeracionSalon}</div>
          <div className="col-4">{auditorio.nombre}</div>
          <div className="col-1 text-center">
            <img
              src={RecycleIcon}
              alt="Eliminar"
              className="inbox-option-icon"
            // onClick={}
            />
          </div>
          <div className="col-1 text-center">
            <img
              src={LockIcon}
              alt="Bloquear"
              className="inbox-option-icon"
            // onClick={}
            />
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Salon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedSalon && (
            <>
              <p>ID de Salon: {selectedSalon.idSalon}</p>
              <p>Capacidad: {selectedSalon.capacidad}</p>
              <p>Numeracion: {selectedSalon.numeracionSalon}</p>
              <p>Tipo: {selectedSalon.tipo}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cerrar
        </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para detalles del auditorio */}
      <Modal show={showAuditorioModal} onHide={handleCloseAuditorioModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Auditorio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedAuditorio && (
            <>
              <p>ID de Auditorio: {selectedAuditorio.idAuditorio}</p>
              <p>Capacidad: {selectedAuditorio.capacidad}</p>
              <p>Numeracion: {selectedAuditorio.numeracionSalon}</p>
              <p>Nombre: {selectedAuditorio.nombre}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAuditorioModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SalonInbox;
