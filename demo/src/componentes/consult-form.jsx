import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import TextInput from './textInput.jsx'; 
import '../hojas-de-estilo/consult-form-styles.css'; 

const ConsultForm = () => {
  // Estados para gestionar el valor del correo y la visibilidad del modal
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Datos de ejemplo para el modal
  const reservaData = {
    nombreProfesor: 'Profesor',
    correoInstitucional: 'profesor@example.com',
    programaAcademico: 'Programa',
    idSalon: '123',
    horaInicio: '09:00 AM',
    horaFin: '11:00 AM',
    fecha: '2023-01-01',
    estadoReserva: 'Aprobada',
  };

  // Funciones para gestionar el cambio en el campo de correo y la apertura/cierre del modal
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Función para consultar la reserva
  const handleConsult = () => {
    // Realiza la lógica de consulta de reserva aquí (puedes usar el valor de 'email')
    // En este ejemplo, simplemente abrimos el modal con datos de ejemplo
    handleShowModal();
  };

  return (
    <div className="container consult-form-container">
      <h2 className="mb-3">Consultar Reserva</h2>
      <div className="mb-3">
        <p>Digite su correo electrónico:</p>
        <TextInput
          id="correoInstitucional"
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <Button variant="primary" onClick={handleConsult}>
        Consultar
      </Button>

      {/* Modal para mostrar la información de la reserva */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Muestra los datos de la reserva aquí */}
          <p>Nombre del Profesor: {reservaData.nombreProfesor}</p>
          <p>Email: {reservaData.correoInstitucional}</p>
          <p>Programa Académico: {reservaData.programaAcademico}</p>
          <p>ID del Salón: {reservaData.idSalon}</p>
          <p>Hora de Inicio: {reservaData.horaInicio}</p>
          <p>Hora de Fin: {reservaData.horaFin}</p>
          <p>Fecha: {reservaData.fecha}</p>
          <p>Estado de la Reserva: {reservaData.estadoReserva}</p>
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
