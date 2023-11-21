import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../hojas-de-estilo/inbox-facultad-styles.css';

import ReloadIcon from '../iconos/reload-icon.svg';
import PaginationLeftIcon from '../iconos/pagination-left-icon.svg';
import PaginationRightIcon from '../iconos/pagination-right-icon.svg';
import EllipsisIcon from '../iconos/ellipsis-icon.svg';
import RecycleIcon from '../iconos/recycle-bin-icon.svg';

import ClienteProgramaAcademico from '../services/ClienteProgramaAcademico'; // Cambio a ClienteProgramaAcademico
import { BotonCrearPrograma } from './button';
import CreateProgramaModal from './crear-programa-modal.jsx';

const ProgramaInbox = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPrograma, setSelectedPrograma] = useState(null); // Cambio de "reserva" a "programa"
  const [showCreateProgramaModal, setShowCreateProgramaModal] = useState(false);

  const handleCreateProgramaClick = () => {
    setShowCreateProgramaModal(true);
  };

  const handleRowClick = (programa) => {
    setSelectedPrograma(programa);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [programas, setProgramas] = useState([]); // Cambio de "reservas" a "programas"

  const handleReloadClick = () => {
    // Realiza la solicitud para obtener los programas académicos actualizados
    ClienteProgramaAcademico.obtenerTodasLosProgramasAcademicos()
      .then(response => {
        console.log('Programas académicos obtenidos:', response.data);
        setProgramas(response.data);
      })
      .catch(error => {
        console.error('Error al obtener programas académicos:', error);
      });
  };

  // Usar useEffect para cargar los programas académicos al montar el componente
  useEffect(() => {
    handleReloadClick();
  }, []);

  return (
    <div className="container m-4 inbox-container">
      <div className="row align-items-center first-inbox-row">
        <div className="col-1">
          <input type="checkbox" className="inbox-checkbox" />
        </div>
        <div className="col-1">
          <img src={ReloadIcon} alt="Refrescar" className="inbox-container-icon" onClick={handleReloadClick} />
        </div>
        <div className="col-1">
          <img src={EllipsisIcon} alt="Elipsis" className="inbox-container-icon" />
        </div>
        <div className='col-2'>
          <BotonCrearPrograma onClick={handleCreateProgramaClick} />
          <CreateProgramaModal show={showCreateProgramaModal} onHide={() => setShowCreateProgramaModal(false)} />
        </div>
        <div className="col-1 ml-auto text-right"></div>
        <div className="col-2 text-right">
          <img src={PaginationLeftIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
          <img src={PaginationRightIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
        </div>
      </div>
      {programas.map(programa => ( // Cambio de "reservas" a "programas"
        <div key={programa.idPrograma} className="row inbox-row" onClick={() => handleRowClick(programa)}>
          <div className="col-1">
            <input type="checkbox" className="inbox-checkbox" />
          </div>
          <div className="col-1">
            {programa.idPrograma}
          </div>
          <div className="col-4">
            {programa.nombrePrograma}
          </div>
          <div className="col-4">
            {/* Puedes mostrar más detalles del programa académico aquí si es necesario */}
            {programa.snies}
          </div>
          <div className="col-1">
          </div>
          <div className="col-2 text-center">
            <img
              src={RecycleIcon}
              alt="Eliminar"
              className="inbox-option-icon"
              //onClick={}
            />
          </div>
        </div>
      ))}

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del Programa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPrograma && (
            <>
              <p>ID de Programa: {selectedPrograma.idPrograma}</p>
              <p>SNIES: {selectedPrograma.snies}</p>
              <p>Nombre de Programa: {selectedPrograma.nombrePrograma}</p>
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

export default ProgramaInbox;
