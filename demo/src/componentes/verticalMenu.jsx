import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import '../hojas-de-estilo/stylesHome.css';
import { BotonConsultarReserva, BotonSolicitarReserva, BotonSolicitarAuditorio } from './button';

import CalendarIcon from '../iconos/calendar-icon.svg'
import ConferenceIcon from '../iconos/conference-icon.svg'
import DocumentIcon from '../iconos/document-icon.svg'

function VerticalMenu() {
  return (
    <div className="vertical-menu">
      <div className="menu-rectangle">
        <Link to='/solicitar-reserva' className='custom-link'>
          <BotonSolicitarReserva color="#0D4185" icon={CalendarIcon} />
        </Link> 
        <Link to='' className='custom-link'>
          <BotonConsultarReserva color="#0D4185" icon={DocumentIcon} />
        </Link>
        <Link to='/solicitar-auditorio' className='custom-link'>
          <BotonSolicitarAuditorio color="#0D4185" icon={ConferenceIcon} />
        </Link>        
      </div>
    </div>
  );
}

export default VerticalMenu;

