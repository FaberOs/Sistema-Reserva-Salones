import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

import '../hojas-de-estilo/inbox-styles.css';

import ReloadIcon from '../iconos/reload-icon.svg';
//import PaginationLeftIcon from '../iconos/pagination-left-icon.svg';
//import PaginationRightIcon from '../iconos/pagination-right-icon.svg';
import EllipsisIcon from '../iconos/ellipsis-icon.svg';

import ClienteReserva from '../services/ClienteReservas';

const RechazadosInbox = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedReserva, setSelectedReserva] = useState(null);
  const [reservas, setReservas] = useState([]);

  const handleRowClick = (idReserva) => {
    ClienteReserva.ObtenerReservaPorId(idReserva)
      .then((response) => {
        setSelectedReserva(response.data);
        setShowModal(true);
      })
      .catch((error) => {
        console.error('Error al obtener la reserva por ID:', error);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleReloadClick = () => {
   // Cambia la llamada para obtener solo las reservas RECHAZADAS
   ClienteReserva.ObtenerReservasPorEstado('RECHAZADA')
   .then(response => {
     console.log('Reservas RECHAZADAS obtenidas:', response.data);
     setReservas(response.data);
   })
   .catch(error => {
     console.error('Error al obtener reservas RECHAZADAS:', error);
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
        {/*<div className="col-2 text-right">
          <img src={PaginationLeftIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
          <img src={PaginationRightIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
        </div>*/}
      </div>
      {reservas.map(reserva => (
        <div key={reserva.idReserva} className="row inbox-row" onClick={() => handleRowClick(reserva.idReserva)}>
          <div className="col-md-1 col-1">
            <input type="checkbox" className="inbox-checkbox" />
          </div>
          <div className="col-md-1 col-1">
            {reserva.idReserva}
          </div>
          <div className="col-md-3 col-3">
            {reserva.nombreProfesor}
          </div>
          <div className="col-md-3 col-3">
            {reserva.programaProfesor}
          </div>
          <div className="col-md-2 col-2">
            {reserva.horaInicio} - {reserva.horaFinal}
            <br />
            {reserva.diaInicio}
          </div>
          <div className="col-md-2 col-2 text-center">
            {reserva.estadoReserva}
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedReserva && (
            <>
              <p>ID de Reserva: {selectedReserva.idReserva}</p>
              <p>Nombre del Profesor: {selectedReserva.nombreProfesor}</p>
              <p>Programa Académico: {selectedReserva.programaProfesor}</p>
              <p>Hora de Inicio: {selectedReserva.horaInicio}</p>
              <p>Hora de Fin: {selectedReserva.horaFinal}</p>
              <p>Día de Inicio: {selectedReserva.diaInicio}</p>
              <p>Estado de la Reserva: {selectedReserva.estadoReserva}</p>
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

export default RechazadosInbox;