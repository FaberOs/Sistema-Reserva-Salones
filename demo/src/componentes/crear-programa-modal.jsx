import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import '../hojas-de-estilo/crear-facultad-modal-styles.css'
import TextInput from './textInput.jsx';
import ClienteFacultades from '../services/ClienteFacultades';

const CreateProgramaModal = ({ show, onHide }) => {
  const [idPrograma, setIdPrograma] = useState('');
  const [nombrePrograma, setNombrePrograma] = useState('');
  const [sniesPrograma, setSniesPrograma] = useState('');
  const [programaActivo, setProgramaActivo] = useState('');
  const [facultadPertenece, setFacultadPertenece] = useState('');

  const [facultades, setFacultades] = useState([]);

  // useEffect para cargar las facultades al cargar el componente
  useEffect(() => {
    // Llamada al cliente para obtener todas las facultades
    ClienteFacultades.ObtenerTodasLasFacultades()
      .then(response => {
        // Actualizar el estado con las facultades obtenidas
        setFacultades(response.data);
      })
      .catch(error => {
        console.error('Error al obtener facultades:', error);
      });
  }, []);

  const handleIdChange = (e) => {
    setIdPrograma(e.target.value);
  };

  const handleSniesChange = (e) => {
    setSniesPrograma(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombrePrograma(e.target.value);
  };

  const handleFacultadActivaChange = (e) => {
    setProgramaActivo(e.target.value);
  };

  const handleFacultadPerteneceChange = (e) => {
    setFacultadPertenece(e.target.value);
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
        <Modal.Title>Crear Programa Academico</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <TextInput
            id="idPrograma"
            type="text"
            placeholder="ID de Programa"
            value={idPrograma}
            onChange={handleIdChange}
            required
          />
          <TextInput
            id="sniesPrograma"
            type="text"
            placeholder="SNIES"
            value={sniesPrograma}
            onChange={handleSniesChange}
            required
          />
          <TextInput
            id="nombrePrograma"
            type="text"
            placeholder="Nombre de Programa"
            value={nombrePrograma}
            onChange={handleNombreChange}
            required
          />

          <select
            id="facultadPertenece"
            value={facultadPertenece}
            onChange={handleFacultadPerteneceChange}
            className="form-select"
          >
            <option value="">Facultad Perteneciente</option>
            {facultades.map(facultad => (
              <option key={facultad.idFacultad} value={facultad.nombreFacultad}>
                {facultad.nombreFacultad}
              </option>
            ))}
          </select>

          {/* Agrega un mensaje antes de los radio buttons */}
          <p className='estado-label mb-2'>Estado del Programa:</p>

          {/* Cada radio button en su propio Form.Group */}
          <Form.Group controlId="formFacultadActivaSi" className="radio-button mb-3">
            <Form.Check
              type="radio"
              label="Activo"
              name="facultadActiva"
              value="true"
              onChange={handleFacultadActivaChange}
            />
          </Form.Group>

          <Form.Group controlId="formFacultadActivaNo" className="radio-button mb-3">
            <Form.Check
              type="radio"
              label="Inactivo"
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

export default CreateProgramaModal;