import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/sidebar-styles.css';

import BurgerIcon from '../iconos/burger-icon.svg';
import ArchiveIcon from '../iconos/archive-icon.svg';
import RecycleIcon from '../iconos/recycle-bin-icon.svg';
import GraphIcon from '../iconos/graph-icon.svg';
import InboxIcon from '../iconos/inbox-icon.svg';
import Tutor2Icon from '../iconos/tutor2-icon.svg';
import SubjectIcon from '../iconos/subject-icon.svg';
import CollegeIcon from '../iconos/college-icon.svg';
import EmailIcon from '../iconos/email-icon.svg'

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
        <Link to="/admin" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={InboxIcon} alt="Solicitudes" />
            {expanded && <span>Solicitudes</span>}
          </div>
        </Link>
        <Link to="/admin/aprobados" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={ArchiveIcon} alt="Aprobados" />
            {expanded && <span>Aprobados</span>}
          </div>
        </Link>
        <Link to="/admin/rechazados" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={RecycleIcon} alt="Rechazados" />
            {expanded && <span>Rechazados</span>}
          </div>
        </Link>
        <Link to="/admin/salon" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={Tutor2Icon} alt="Salon" />
            {expanded && <span>Salon</span>}
          </div>
        </Link>
        <Link to="/admin/facultad" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={CollegeIcon} alt="Facultad" />
            {expanded && <span>Facultad</span>}
          </div>
        </Link>
        <Link to="/admin/programa" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={SubjectIcon} alt="Programa" />
            {expanded && <span>Programa</span>}
          </div>
        </Link>
        <Link to="/admin/incidencias" className="link">
          <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
            <img src={EmailIcon} alt="Incidencias" />
            {expanded && <span>Incidencias</span>}
          </div>
        </Link>
        <Link to="/admin/estadisticas" className="link">
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

