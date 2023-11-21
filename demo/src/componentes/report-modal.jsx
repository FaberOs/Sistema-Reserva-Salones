import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import TextInput from './textInput.jsx';

const ReportModal = ({ show, onHide }) => {
  const [remitente, setRemitente] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleRemitenteChange = (e) => setRemitente(e.target.value);
  const handleAsuntoChange = (e) => setAsunto(e.target.value);
  const handleMensajeChange = (e) => setMensaje(e.target.value);

  const handleReportar = () => {
    // Lógica para enviar el reporte, puedes implementarla según tus necesidades.
    console.log('Reporte enviado:', remitente, asunto, mensaje);
    onHide(); // Cerrar el modal después de enviar el reporte.
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Reportar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TextInput
          id="remitente"
          type="text"
          placeholder="Remitente"
          value={remitente}
          onChange={handleRemitenteChange}
          required
        />
        <TextInput
          id="asunto"
          type="text"
          placeholder="Asunto"
          value={asunto}
          onChange={handleAsuntoChange}
          required
        />
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Mensaje"
            value={mensaje}
            onChange={handleMensajeChange}
            rows="4"
          />
          <label>Mensaje</label>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleReportar}>
          Reportar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReportModal;
