import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesHome.css';

function VerticalMenu() {
  return (
    <div className="vertical-menu">
      <button className="menu-button">Botón 1</button>
      <button className="menu-button">Botón 2</button>
      <button className="menu-button">Botón 3</button>
      {/* Agrega más botones según sea necesario */}
    </div>
  );
}

export default VerticalMenu;
