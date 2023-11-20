import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import TextInput from './textInput.jsx';
import ClienteFacultades from '../services/ClienteFacultades';
import ClienteProgramaAcademico from '../services/ClienteProgramaAcademico.js';

const CreateProgramaModal = ({ show, onHide }) => {
  const [idPrograma, setIdPrograma] = useState('');
  const [nombrePrograma, setNombrePrograma] = useState('');
  const [sniesPrograma, setSniesPrograma] = useState('');
  const [programaActivo, setProgramaActivo] = useState(true);
  const [facultadPertenece, setFacultadPertenece] = useState('');
  const [facultades, setFacultades] = useState([]);

  useEffect(() => {
    ClienteFacultades.ObtenerTodasLasFacultades()
      .then(response => {
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

  const handleFacultadPerteneceChange = (e) => {
    setFacultadPertenece(e.target.value);
  };

  const handleFacultadActivaChange = (e) => {
    setProgramaActivo(e.target.value === 'true');
  };

  const handleSave = () => {
    if (!sniesPrograma || !nombrePrograma || !facultadPertenece) {
      console.error('Todos los campos son obligatorios');
      return;
    }
  
    // Encuentra la facultad seleccionada en la lista de facultades
    const facultadSeleccionada = facultades.find(f => f.nombreFacultad === facultadPertenece);
  
    // Crea el objeto con los datos del programa académico
    const nuevoPrograma = {
      snies: sniesPrograma,
      nombrePrograma: nombrePrograma,
      programaActivo: programaActivo,
      facultadVinculado: facultadSeleccionada
    };
  
    // Enviar los datos al servidor a través del cliente
    ClienteProgramaAcademico.crearProgramaAcademico(facultadSeleccionada.idFacultad, nuevoPrograma)
      .then(response => {
        console.log('Datos del nuevo programa académico:', response.data);
  
        // Realizar otras acciones si es necesario
      })
      .catch(error => {
        console.error('Error al crear programa academico:', error);
        // Manejar el error según sea necesario
      });
  
    // Cierra el modal
    onHide();
  };
  
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Programa Academico</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        {/*  <TextInput
            id="idPrograma"
            type="text"
            placeholder="ID de Programa"
            value={idPrograma}
            onChange={handleIdChange}
            required
  />*/}
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

          <Form.Group controlId="formFacultadPertenece" className="mb-3">
            <Form.Label>Seleccionar Facultad:</Form.Label>
            <Form.Control
              as="select"
              value={facultadPertenece}
              onChange={handleFacultadPerteneceChange}
              required
            >
              <option value="">Facultad Perteneciente</option>
              {facultades.map(facultad => (
                <option key={facultad.idFacultad} value={facultad.nombreFacultad}>
                  {facultad.nombreFacultad}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

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
