import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import TextInput from './textInput.jsx';
import ClienteReserva from '../services/ClienteReservas';
import '../hojas-de-estilo/consult-form-styles.css';

const ConsultForm = () => {
  const [idReserva, setIdReserva] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [reservaData, setReservaData] = useState(null);

  const handleIdReservaChange = (e) => setIdReserva(e.target.value);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleConsult = () => {
    ClienteReserva.ObtenerReservaPorId(idReserva)
      .then((response) => {
        setReservaData(response.data);
        handleShowModal();
      })
      .catch((error) => {
        console.error('Error al obtener la reserva:', error);
      });
  };

  

  return (
    <div className="container consult-form-container">
      <h2 className="mb-3">Consultar Reserva</h2>
      <div className="mb-3">
        <p>Digite el ID de la reserva:</p>
        <TextInput
          id="idReserva"
          type="text"
          placeholder="ID de Reserva"
          value={idReserva}
          onChange={handleIdReservaChange}
          required
        />
      </div>
      <Button variant="primary" onClick={handleConsult}>
        Consultar
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {reservaData && (
            <>
              <p>Nombre del Profesor: {reservaData.nombreProfesor}</p>
              <p>Email: {reservaData.correoInstitucional}</p>
              <p>Programa Académico: {reservaData.programaProfesor}</p>
              <p>ID del Salón: {reservaData.idSalon}</p>
              <p>Hora de Inicio: {reservaData.horaInicio}</p>
              <p>Hora de Fin: {reservaData.horaFinal}</p>
              <p>Mensaje: {reservaData.mensaje}</p>
              <p>Fecha: {reservaData.diaInicio}</p>
              <p>Número de Estudiantes: {reservaData.numeroEstudiantes}</p>
              <p>Estado de la Reserva: {reservaData.estadoReserva}</p>
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

export default ConsultForm;
