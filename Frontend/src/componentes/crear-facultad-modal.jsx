import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../hojas-de-estilo/crear-facultad-modal-styles.css';
import TextInput from './textInput.jsx';
import ClienteFacultades from '../services/ClienteFacultades';


const CreateFacultadModal = ({ show, onHide }) => {
  const [nombreFacultad, setNombreFacultad] = useState('');
  const [facultadActiva, setFacultadActiva] = useState(true);

  const handleNombreChange = (e) => {
    setNombreFacultad(e.target.value);
  };

  const handleFacultadActivaChange = (e) => {
    setFacultadActiva(e.target.value === 'true'); // Convierte a booleano
  };

  const handleSave = () => {
    // Validar que los campos estén llenos
    if (!nombreFacultad) {
      console.error('El nombre de la facultad es obligatorio');
      return;
    }

    // Crear objeto con los datos de la facultad
    const nuevaFacultad = {
      nombreFacultad: nombreFacultad,
      facultadActivo: facultadActiva
    };

    // Enviar los datos al servidor a través del cliente
    ClienteFacultades.CrearFacultad(nuevaFacultad)
      .then(response => {
        console.log('Facultad creada:', response.data);
        // Realizar otras acciones si es necesario
      })
      .catch(error => {
        console.error('Error al crear facultad:', error);
        // Manejar el error según sea necesario
      });

    // Cerrar el modal
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
              checked={facultadActiva}
            />
          </Form.Group>

          <Form.Group controlId="formFacultadActivaNo" className="radio-button mb-3">
            <Form.Check
              type="radio"
              label="Inactiva"
              name="facultadActiva"
              value="false"
              onChange={handleFacultadActivaChange}
              checked={!facultadActiva}
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
