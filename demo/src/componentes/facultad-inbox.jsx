import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../hojas-de-estilo/inbox-facultad-styles.css';

import ReloadIcon from '../iconos/reload-icon.svg';
import PaginationLeftIcon from '../iconos/pagination-left-icon.svg';
import PaginationRightIcon from '../iconos/pagination-right-icon.svg';
import EllipsisIcon from '../iconos/ellipsis-icon.svg';
import RecycleIcon from '../iconos/recycle-bin-icon.svg';

import ClienteReserva from '../services/ClienteReservas';
import { BotonCrearFacultad } from './button';
import CreateFacultadModal from './crear-facultad-modal.jsx';

const FacultadInbox = () => {
  const [selectedReserva, setSelectedReserva] = useState(null);
  const [showCreateFacultadModal, setShowCreateFacultadModal] = useState(false);

  const handleCreateFacultadClick = () => {
    setShowCreateFacultadModal(true);
  };

  const handleRowClick = (reserva) => {
    setSelectedReserva(reserva);
  };

  const [reservas, setReservas] = useState([]);

  const handleReloadClick = () => {
    // Realiza la solicitud para obtener las reservas actualizadas
    ClienteReserva.ObtenerTodasLasReservas()
      .then(response => {
        console.log('Reservas obtenidas:', response.data);
        setReservas(response.data);
      })
      .catch(error => {
        console.error('Error al obtener reservas:', error);
      });
  };

    /*// Usaremos un ejemplo de fila de reserva
    setReservas([
      {
        idReserva: 1,
        nombreProfesor: 'Faber Antonio Ospina Cortes',
        programaProfesor: 'Ingenieria Electronica y Telecomunicaciones',
        horaInicio: '09:00 AM',
        horaFinal: '11:00 AM',
        diaInicio: '2023-12-01',
        estadoReserva: 'Pendiente'
      },
      {
        idReserva: 2,
        nombreProfesor: 'Faber Antonio Ospina Cortes',
        programaProfesor: 'Ingenieria Electronica y Telecomunicaciones',
        horaInicio: '09:00 AM',
        horaFinal: '11:00 AM',
        diaInicio: '2023-12-01',
        estadoReserva: 'Pendiente'
      }
    ]);
  }, []); */

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
          <BotonCrearFacultad onClick={handleCreateFacultadClick}/>
          <CreateFacultadModal show={showCreateFacultadModal} onHide={() => setShowCreateFacultadModal(false)} />
        </div>
        <div className="col-1 ml-auto text-right"></div>
        <div className="col-2 text-right">
          <img src={PaginationLeftIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
          <img src={PaginationRightIcon} alt="Pagination" className="inbox-container-icon pagination-icon" />
        </div>
      </div>
      {reservas.map(reserva => (
        <div key={reserva.idReserva} className="row inbox-row" onClick={() => handleRowClick(reserva)}>
          <div className="col-1">
            <input type="checkbox" className="inbox-checkbox" />
          </div>
          <div className="col-1">
            {reserva.idReserva}
          </div>
          <div className="col-4">
            {reserva.nombreProfesor}
          </div>
          <div className="col-4">
            {reserva.programaProfesor}
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
    </div>
  );
};

export default FacultadInbox;