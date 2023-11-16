import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

import '../hojas-de-estilo/inbox-styles.css';

import ReloadIcon from '../iconos/reload-icon.svg';
import PaginationLeftIcon from '../iconos/pagination-left-icon.svg';
import PaginationRightIcon from '../iconos/pagination-right-icon.svg';
import EllipsisIcon from '../iconos/ellipsis-icon.svg';

import ClienteReserva from '../services/ClienteReservas';

const Inbox = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [reservas, setReservas] = useState([]);

  ClienteReserva.ObtenerTodasLasReservas()
    .then(response => {
        console.log('Reservas obtenidas:', response.data);
        setReservas(response.data);
    })
    .catch(error => {
        console.error('Error al obtener reservas:', error);
    });


  return (
    <div className="container m-4 inbox-container">
      <div className="row align-items-center first-inbox-row">
        <div className="col-1">
          <input type="checkbox" className="inbox-checkbox" />
        </div>
        <div className="col-1">
          <img src={ReloadIcon} alt="Refrescar" className="inbox-container-icon" />
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
      {reservas.map(reserva => (
        <div key={reserva.idReserva} className="row inbox-row">
          <div className="col-1">
            <input type="checkbox" className="inbox-checkbox" />
          </div>
          <div className="col-1">
            {reserva.idReserva}
           
          </div>
         
          <div className="col-2">
            {reserva.nombreProfesor}
            
          </div>
          <div className="col-3">
            {reserva.programaProfesor}
            
          </div>
          <div className="col-3 ml-auto text-right">

          
            {reserva.horaInicio} - {reserva.horaFinal}
            <br />
            {reserva.diaInicio}
            
          </div>
          <div className="col-2 text-right">
            {reserva.estadoReserva}
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del mensaje</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Que acción desea realizar a la solicitud?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Rechazar
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Inbox;

