import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import '../hojas-de-estilo/stylesHome.css';
import { BotonConsultarReserva, BotonSolicitarReserva, BotonSolicitarAuditorio } from './button';

import CalendarIcon from '../iconos/calendar-icon.svg'
import ConferenceIcon from '../iconos/conference-icon.svg'
import DocumentIcon from '../iconos/document-icon.svg'

function VerticalMenu() {
  
  const navigate = useNavigate();
  var roll;
  try {
    roll =JSON.parse(localStorage.getItem('User')).rol
  } catch (error) {
    roll = 'INVITADO';
  }
  

  const handleSolicitaReserva = (e) => {
      if (localStorage.length === 0){
          navigate('/login');
      }else{
          navigate('/solicitar-reserva');
      }
  };

  const handleConsultaReserva = (e) => {
    if (localStorage.length === 0){
        navigate('/login');
    }else{
        navigate('/admin');
    }
  };

  const handleSolicitaAuditorio = (e) => {
    if (localStorage.length === 0){
        navigate('/login');
    }else{
        navigate('/auditorio');
    }
  };
  

  return (
    <div className="vertical-menu">
      <div className="menu-rectangle" >
        {
           roll === 'INVITADO'
            ?<div>
              <BotonConsultarReserva color="#0D4185" icon={DocumentIcon} onClick={handleConsultaReserva}/>
              <BotonSolicitarAuditorio color="#0D4185" icon={ConferenceIcon} onClick={handleSolicitaAuditorio}/>
              <BotonSolicitarReserva color="#0D4185" icon={CalendarIcon} onClick={handleSolicitaReserva} />
            </div>
            :roll === 'COORDINADOR'
              ? <div>
                    <BotonSolicitarReserva color="#0D4185" icon={CalendarIcon} onClick={handleSolicitaReserva} />
                    <BotonSolicitarAuditorio color="#0D4185" icon={ConferenceIcon} onClick={handleSolicitaAuditorio}/>
                </div>              
              : <BotonConsultarReserva color="#0D4185" icon={DocumentIcon} onClick={handleConsultaReserva}/>
        }      
    </div>
  </div>
  );
}

export default VerticalMenu;

