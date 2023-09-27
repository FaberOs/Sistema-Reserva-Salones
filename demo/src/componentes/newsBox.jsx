import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesHome.css';

function NewsBox() {
  return (
    <div className="news-box">
      <h2>Título de la Noticia</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ligula eu nulla tincidunt tincidunt.</p>
      {/* Agrega más noticias según sea necesario */}
    </div>
  );
}

export default NewsBox;
