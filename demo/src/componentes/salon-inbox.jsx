import React, { useState, useEffect } from 'react';
import { Modal, Button, Overlay, Popover } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../hojas-de-estilo/inbox-facultad-styles.css';

import ReloadIcon from '../iconos/reload-icon.svg';
//import PaginationLeftIcon from '../iconos/pagination-left-icon.svg';
//import PaginationRightIcon from '../iconos/pagination-right-icon.svg';
import EllipsisIcon from '../iconos/ellipsis-icon.svg';
import RecycleIcon from '../iconos/recycle-bin-icon.svg';
import LockIcon from '../iconos/lock-icon.svg';
import InfoIcon from '../iconos/info-icon.svg'

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

  const [filtro, setFiltro] = useState("todos");
  const [showFiltroPopover, setShowFiltroPopover] = useState(false);
  const [target, setTarget] = useState(null);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [salonToModify, setSalonToModify] = useState(null);
  const [auditorioToModify, setAuditorioToModify] = useState(null);

  const handleShowConfirmationModal = (id) => {
    setSalonToModify(id);
    setShowConfirmationModal(true);
  };

  const handleDetallesClick = (salon) => {
    setSelectedSalon(salon);
    setShowModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setSalonToModify(null);
    setShowConfirmationModal(false);
  };

  const handleFiltroClick = (selectedFiltro) => {
    setFiltro(selectedFiltro);
    setShowFiltroPopover(false);
  };

  const handleEllipsisClick = (event) => {
    setShowFiltroPopover(!showFiltroPopover);
    setTarget(event.target);
  };

  const handleEliminarSalonClick = (id) => {
    // Cierra el modal principal
    setShowModal(false);
    // Actualiza el ID del salón a eliminar
    setSalonToModify(id);
    // Muestra el modal de confirmación
    setShowConfirmationModal(true);
  };

  const handleEliminarAuditorioClick = (id) => {
    // Cierra el modal principal
    setShowModal(false);
    // Actualiza el ID del salón a eliminar
    setSalonToModify(id);
    // Muestra el modal de confirmación
    setShowConfirmationModal(true);
  };
  
  const handleBloquearClick = (id) => {
    // Cierra el modal principal
    setShowModal(false);
    // Actualiza el ID del salón a bloquear
    setSalonToModify(id);
    // Muestra el modal de confirmación
    setShowConfirmationModal(true);
  };

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

  const filtroPopover = (
    <Popover id="filtro-popover" style={{ backgroundColor: '#CCCCCC', border: 'none' }}>
      <Popover.Body style={{ display: 'flex', flexDirection: 'column' }}>
        <Button variant="light" onClick={() => handleFiltroClick('todos')} style={{ textDecoration: 'none', color: 'black' }}>
          Todos
        </Button>
        <Button variant="light" onClick={() => handleFiltroClick('salones')} style={{ textDecoration: 'none', color: 'black' }}>
          Salones
        </Button>
        <Button variant="light" onClick={() => handleFiltroClick('auditorios')} style={{ textDecoration: 'none', color: 'black' }}>
          Auditorios
        </Button>
      </Popover.Body>
    </Popover>
  );

  useEffect(() => {
    // Actualiza la lista de salones y auditorios según el filtro seleccionado
    if (filtro === "salones") {
      ClienteSalon.obtenerTodosLosSalones()
        .then((response) => {
          console.log('Salones obtenidos:', response.data);
          setSalones(response.data);
          setAuditorios([]); // Limpiar la lista de auditorios
        })
        .catch((error) => {
          console.error('Error al obtener salones:', error);
        });
    } else if (filtro === "auditorios") {
      ClienteAuditorio.obtenerTodosLosAuditorios()
        .then((response) => {
          console.log('Auditorios obtenidos:', response.data);
          setAuditorios(response.data);
          setSalones([]); // Limpiar la lista de salones
        })
        .catch((error) => {
          console.error('Error al obtener auditorios:', error);
        });
    } else {
      // Mostrar todos
      ClienteSalon.obtenerTodosLosSalones()
        .then((salonesResponse) => {
          console.log('Salones obtenidos:', salonesResponse.data);
          setSalones(salonesResponse.data);
        })
        .catch((error) => {
          console.error('Error al obtener salones:', error);
        });

      ClienteAuditorio.obtenerTodosLosAuditorios()
        .then((auditoriosResponse) => {
          console.log('Auditorios obtenidos:', auditoriosResponse.data);
          setAuditorios(auditoriosResponse.data);
        })
        .catch((error) => {
          console.error('Error al obtener auditorios:', error);
        });
    }
  }, [filtro]);

  

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
          <img
            src={EllipsisIcon}
            alt="Elipsis"
            className="inbox-container-icon"
            onClick={handleEllipsisClick}
          />
          <Overlay
            show={showFiltroPopover}
            target={target}
            placement="bottom"
            containerPadding={20}
          >
            {filtroPopover}
          </Overlay>
        </div>
        <div className='col-md-4 col-6'>
          <BotonCrearSalon onClick={handleCreateSalonClick} className="btn btn-sm ms-2" />
          <CreateSalonModal show={showCreateSalonModal} onHide={() => setShowCreateSalonModal(false)} />
        </div>
        <div className="col-1 ml-auto text-right"></div>
        {/*<div className="col-2 text-right">
          <img src={PaginationLeftIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
          <img src={PaginationRightIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
        </div>*/}
      </div>
      {salones.map(salon => (
        <div key={salon.idSalon} className={`row inbox-row ${selectedSalon === salon ? 'selected-row' : ''}`}>
          <div className="col-md-1">
            <input type="checkbox" className="inbox-checkbox" />
          </div>
          <div className="col-md-2 col-1">{salon.idSalon}</div>
          <div className="col-md-1 col-1">{salon.capacidad}</div>
          <div className="col-md-2 col-2">{salon.numeracionSalon}</div>
          <div className="col-md-3 col-3">{salon.tipo}</div>
          <div className="col-md-2 col-1 text-right">
          </div>
          <div className="col-md-1 col-1 text-right">
            <img
              src={RecycleIcon}
              alt="Eliminar"
              className="inbox-option-icon"
              onClick={() => handleShowConfirmationModal(salon.idSalon)}
            />
          </div>
          <div className="col-md-1 col-1 text-right">
            <img
              src={LockIcon}
              alt="Bloquear"
              className="inbox-option-icon"
              onClick={() => handleShowConfirmationModal(salon.idSalon)}
            />
          </div>
          <div className="col-md-1 col-1 text-left">
            <img
              src={InfoIcon}  // Reemplaza "DetallesIcon" con la ruta de tu icono de detalles
              alt="Detalles"
              className="inbox-option-icon"
              onClick={() => handleDetallesClick(salon)}
            />
          </div>
        </div>
      ))}
      {auditorios.map(auditorio => (
        <div key={auditorio.idAuditorio} className={`row inbox-row ${selectedAuditorio === auditorio ? 'selected-row' : ''}`}>
          <div className="col-md-1">
            <input type="checkbox" className="inbox-checkbox" />
          </div>
          <div className="col-md-2 col-1">{auditorio.idAuditorio}</div>
          <div className="col-md-1 col-1">{auditorio.capacidad}</div>
          <div className="col-md-2 col-2">{auditorio.numeracionSalon}</div>
          <div className="col-md-3 col-3">{auditorio.nombre}</div>
          <div className="col-md-2 col-1 text-right">
          </div>
          <div className="col-md-1 col-1 text-right">
            <img
              src={RecycleIcon}
              alt="Eliminar"
              className="inbox-option-icon"
              onClick={() => handleShowConfirmationModal(auditorio.idAuditorio)}
            />
          </div>
          <div className="col-md-1 col-1 text-right">
            <img
              src={LockIcon}
              alt="Bloquear"
              className="inbox-option-icon"
              onClick={() => handleShowConfirmationModal(auditorio.idAuditorio)}
            />
          </div>
          <div className="col-md-1 col-1 text-left">
            <img
              src={InfoIcon}  // Reemplaza "DetallesIcon" con la ruta de tu icono de detalles
              alt="Detalles"
              className="inbox-option-icon"
              onClick={() => handleDetallesClick(auditorio)}
            />
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
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
      <Modal show={showAuditorioModal} onHide={handleCloseAuditorioModal} backdrop="static">
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


      {/* Modal de confirmacion */}
      <Modal show={showConfirmationModal} onHide={handleCloseConfirmationModal} backdrop="static" style={{ heigh: '300px' }}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Acción</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas realizar esta acción?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmationModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleEliminarSalonClick}>
            Eliminar
          </Button>
          <Button variant="primary" onClick={handleBloquearClick}>
            Bloquear
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
};

export default SalonInbox;
