import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesHome.css';
import '../hojas-de-estilo/buttonStyle.css'
import { BotonConsultarReserva, BotonSolicitarReserva, BotonSolicitarAuditorio } from './button';

import CalendarIcon from '../iconos/calendar-icon.svg'
import ConferenceIcon from '../iconos/conference-icon.svg'
import DocumentIcon from '../iconos/document-icon.svg'

function VerticalMenu() {
  return (
    <div className="vertical-menu">
      <div className="menu-rectangle">
        <BotonSolicitarReserva color="#0D4185" icon={CalendarIcon} />
        <BotonConsultarReserva color="#0D4185" icon={DocumentIcon} />
        <BotonSolicitarAuditorio color="#0D4185" icon={ConferenceIcon} />
      </div>
    </div>
  );
}

export default VerticalMenu;

