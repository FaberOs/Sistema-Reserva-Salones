import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import '../hojas-de-estilo/crear-facultad-modal-styles.css'
import TextInput from './textInput.jsx';

const CreateFacultadModal = ({ show, onHide }) => {
  const [idFacultad, setIdFacultad] = useState('');
  const [nombreFacultad, setNombreFacultad] = useState('');
  const [facultadActiva, setFacultadActiva] = useState('');

  const handleIdChange = (e) => {
    setIdFacultad(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombreFacultad(e.target.value);
  };

  const handleFacultadActivaChange = (e) => {
    setFacultadActiva(e.target.value);
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
        <Modal.Title>Crear Facultad</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <TextInput
            id="idFacultad"
            type="text"
            placeholder="ID de Facultad"
            value={idFacultad}
            onChange={handleIdChange}
            required
          />
          <TextInput
            id="nombreFacultad"
            type="text"
            placeholder="Nombre de Facultad"
            value={nombreFacultad}
            onChange={handleNombreChange}
            required
          />

          {/* Agrega un mensaje antes de los radio buttons */}
          <p className='estado-label mb-2'>Estado de la facultad:</p>

          {/* Cada radio button en su propio Form.Group */}
          <Form.Group controlId="formFacultadActivaSi" className="radio-button mb-3">
            <Form.Check
              type="radio"
              label="Activa"
              name="facultadActiva"
              value="true"
              onChange={handleFacultadActivaChange}
            />
          </Form.Group>

          <Form.Group controlId="formFacultadActivaNo" className="radio-button mb-3">
            <Form.Check
              type="radio"
              label="Inactiva"
              name="facultadActiva"
              value="false"
              onChange={handleFacultadActivaChange}
            />
          </Form.Group>
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

export default CreateFacultadModal;
