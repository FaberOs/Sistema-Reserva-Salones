import React, { useState } from 'react';
import '../hojas-de-estilo/sidebar-styles.css';

import BurgerIcon from '../iconos/burger-icon.svg';
import ArchiveIcon from '../iconos/archive-icon.svg';
import CursorIcon from '../iconos/cursor-icon.svg';
import GraphIcon from '../iconos/graph-icon.svg';
import InboxIcon from '../iconos/inbox-icon.svg';
import LockIcon from '../iconos/lock-icon.svg';
import RecycleIcon from '../iconos/recycle-bin-icon.svg';
import PlusIcon from '../iconos/plus-icon.svg';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const expandSidebar = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  const contractSidebar = () => {
    if (expanded) {
      setExpanded(false);
    }
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
        <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
          <img src={InboxIcon} alt="Solicitudes" />
          {expanded && <span>Solicitudes</span>}
        </div>
        <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
          <img src={ArchiveIcon} alt="Guardados" />
          {expanded && <span>Aprobados</span>}
        </div>
        <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
          <img src={CursorIcon} alt="Peticiones" />
          {expanded && <span>Rechazados</span>}
        </div>
        <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
          <img src={LockIcon} alt="Inhabilitar" />
          {expanded && <span>Inhabilitar</span>}
        </div>
        <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
          <img src={RecycleIcon} alt="Eliminados" />
          {expanded && <span>Eliminados</span>}
        </div>
        <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
          <img src={GraphIcon} alt="Estadisticas" />
          {expanded && <span>Estadisticas</span>}
        </div>
        <div className="option" onMouseEnter={expandSidebar} onMouseLeave={contractSidebar}>
          <img src={PlusIcon} alt="Mas" />
          {expanded && <span>Mas</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

