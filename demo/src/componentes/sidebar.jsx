import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/sidebar-styles.css';

import BurgerIcon from '../iconos/burger-icon.svg';
import ArchiveIcon from '../iconos/archive-icon.svg';
import RecycleIcon from '../iconos/recycle-bin-icon.svg';
import GraphIcon from '../iconos/graph-icon.svg';
import InboxIcon from '../iconos/inbox-icon.svg';
import LockIcon from '../iconos/lock-icon.svg';
import SubjectIcon from '../iconos/subject-icon.svg';
import CollegeIcon from '../iconos/college-icon.svg';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const expandSidebar = () => {
    setExpanded(true);
  };

  const contractSidebar = () => {
    setExpanded(false);
  };

  const sidebarClass = expanded ? 'sidebar expanded' : 'sidebar';

  return (
    <div className={sidebarClass}>
      <div className="header-sidebar">
        <img
          src={BurgerIcon}
          alt="Burger Icon"
          className="burger-icon"
          onClick={toggleSidebar}
        />
      </div>
      <div className="options">
        <Link to="" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={InboxIcon} alt="Solicitudes" />
            {expanded && <span>Solicitudes</span>}
          </div>
        </Link>
        <Link to="" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={ArchiveIcon} alt="Aprobados" />
            {expanded && <span>Aprobados</span>}
          </div>
        </Link>
        <Link to="" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={RecycleIcon} alt="Rechazados" />
            {expanded && <span>Rechazados</span>}
          </div>
        </Link>
        <Link to="" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={LockIcon} alt="Inhabilitar" />
            {expanded && <span>Inhabilitar</span>}
          </div>
        </Link>
        <Link to="/admin/facultad" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={CollegeIcon} alt="CrearFacultad" />
            {expanded && <span>Crear Facultad</span>}
          </div>
        </Link>
        <Link to="/admin/programa" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={SubjectIcon} alt="CrearPrograma" />
            {expanded && <span>Crear Programa</span>}
          </div>
        </Link>
        <Link to="" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={GraphIcon} alt="Estadisticas" />
            {expanded && <span>Estadisticas</span>}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

