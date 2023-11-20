import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import '../hojas-de-estilo/crear-facultad-modal-styles.css'
import TextInput from './textInput.jsx';

const CreateSalonModal = ({ show, onHide }) => {
  const [idSalon, setIdSalon] = useState('');
  const [capacidad, setCapacidad] = useState('');
  const [numeracion, setNumeracion] = useState('');

  const handleIdChange = (e) => {
    setIdSalon(e.target.value);
  };

  const handleCapacidadChange = (e) => {
    setCapacidad(e.target.value);
  };

  const handleNumeracionChange = (e) => {
    setNumeracion(e.target.value);
  };

  const handleSave = () => {
    // Puedes realizar alguna acción con los datos del formulario aquí
    // Por ejemplo, puedes enviarlos a tu servidor
    // También puedes cerrar el modal llamando a onHide
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Salon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <TextInput
            id="idSalon"
            type="text"
            placeholder="ID del Salon"
            value={idSalon}
            onChange={handleIdChange}
            required
          />
          <TextInput
            id="capacidad"
            type="text"
            placeholder="Capacidad"
            value={capacidad}
            onChange={handleCapacidadChange}
            required
          />
          <TextInput
            id="numeracion"
            type="text"
            placeholder="Numeracion"
            value={numeracion}
            onChange={handleNumeracionChange}
            required
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateSalonModal;