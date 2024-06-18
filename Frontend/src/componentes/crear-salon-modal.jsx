import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import TextInput from './textInput.jsx';
import ClienteSalon from '../services/ClienteSalon';
import ClienteAuditorio from '../services/ClienteAuditorio';

const CreateSalonModal = ({ show, onHide }) => {
  const [capacidad, setCapacidad] = useState('');
  const [numeracion, setNumeracion] = useState('');
  const [tipo, setTipo] = useState(''); // Nuevo estado para el tipo de salón
  const [nombreAuditorio, setNombreAuditorio] = useState(''); // Nuevo estado para el nombre del auditorio

  const handleCapacidadChange = (e) => {
    setCapacidad(e.target.value);
  };

  const handleNumeracionChange = (e) => {
    setNumeracion(e.target.value);
  };

  const handleTipoChange = (e) => {
    setTipo(e.target.value);
  };

  const handleNombreAuditorioChange = (e) => {
    setNombreAuditorio(e.target.value);
  };

  const handleSave = () => {
    // Verificar el tipo seleccionado
    if (tipo === 'Auditorio') {
      // Crear un auditorio
      const auditorioData = {
        capacidad: capacidad,
        numeracionSalon: numeracion,
        nombre: nombreAuditorio,
      };

      ClienteAuditorio.crearAuditorio(auditorioData)
        .then(response => {
          console.log('Auditorio creado:', response.data);
        })
        .catch(error => {
          console.error('Error al crear auditorio:', error);
        });
    } else {
      // Crear un salón
      const salonData = {
        capacidad: capacidad,
        numeracionSalon: numeracion,
        tipo: tipo,
      };

      ClienteSalon.crearSalon(salonData)
        .then(response => {
          console.log('Salón creado:', response.data);
        })
        .catch(error => {
          console.log('DAtos salon', salonData)
          console.error('Error al crear salón:', error);
        });
    }

    // Cerrar el modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Salón</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
          <select
            id="tipoSalon"
            value={tipo}
            onChange={handleTipoChange}
            className='form-select'
            required
          >
            <option value="">Tipo de Salon</option>
            <option value="Salon de Clase">Salon de Clase</option>
            <option value="Conferencia">Conferencia</option>
            <option value="Auditorio">Auditorio</option>
          </select>
          {tipo === 'Auditorio' && (
            <TextInput
              id="nombreAuditorio"
              type="text"
              placeholder="Nombre del Auditorio"
              value={nombreAuditorio}
              onChange={handleNombreAuditorioChange}
              required
            />
          )}
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
