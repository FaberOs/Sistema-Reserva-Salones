import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/sidebar-styles.css';

import BurgerIcon from '../iconos/burger-white-icon.svg';
import ArchiveIcon from '../iconos/archive-icon.svg';
import RecycleIcon from '../iconos/recycle-bin-icon.svg';
import GraphIcon from '../iconos/graph-icon.svg';
import InboxIcon from '../iconos/inbox-icon.svg';
import Tutor2Icon from '../iconos/tutor2-icon.svg';
import SubjectIcon from '../iconos/subject-icon.svg';
import CollegeIcon from '../iconos/college-icon.svg';
import EmailIcon from '../iconos/email-icon.svg'

const SidebarTop = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasShow = () => setShowOffcanvas(true);
  const handleOffcanvasClose = () => setShowOffcanvas(false);

  return (
    <>
      <Button
        variant="outline-light"
        onClick={handleOffcanvasShow}
        className="burger-icon-button-offcanvas"
      >
        <img src={BurgerIcon} alt="Burger Icon" className="burger-icon-offcanvas" />
      </Button>

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className="options">
            <Link to="/admin" className="link">
            <div className="option">
                <img src={InboxIcon} alt="Solicitudes" />
                <span>Solicitudes</span>
            </div>
            </Link>
            <Link to="/admin/aprobados" className="link">
            <div className="option">
                <img src={ArchiveIcon} alt="Aprobados" />
                <span>Aprobados</span>
            </div>
            </Link>
            <Link to="/admin/rechazados" className="link">
            <div className="option">
                <img src={RecycleIcon} alt="Rechazados" />
                <span>Rechazados</span>
            </div>
            </Link>
            <Link to="/admin/salon" className="link">
            <div className="option">
                <img src={Tutor2Icon} alt="Salon" />
                <span>Salon</span>
            </div>
            </Link>
            <Link to="/admin/facultad" className="link">
            <div className="option">
                <img src={CollegeIcon} alt="Facultad" />
                <span>Facultad</span>
            </div>
            </Link>
            <Link to="/admin/programa" className="link">
            <div className="option">
                <img src={SubjectIcon} alt="Programa" />
                <span>Programa</span>
            </div>
            </Link>
            <Link to="/admin/incidencias" className="link">
            <div className="option">
                <img src={EmailIcon} alt="Incidencias" />
                <span>Incidencias</span>
            </div>
            </Link>
            <Link to="/admin/estadisticas" className="link">
            <div className="option">
                <img src={GraphIcon} alt="Estadisticas" />
                <span>Estadisticas</span>
            </div>
            </Link>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidebarTop;
