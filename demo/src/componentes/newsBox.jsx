import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesHome.css';

import NewsItem from './newsItem';

function NewsBox() {

  const newsData = [
    {
      id: 1,
      title: 'Calendario academico',
      content: 'El Calendario Académico para los aspirantes a los Programas de Posgrado, correspondiente al Primer (I) Período Académico de 2024.',
      link: '/noticia1', // Enlace a la noticia 1
    },
    {
      id: 2,
      title: 'Resultados Prueba',
      content: 'Presentamos la lista de resultados de la Prueba de Suficiencia en Idioma Extranjero (PSI) para los estudiantes de Posgrado, llevada a cabo el 20 de octubre de 2023.',
      link: '/noticia2', // Enlace a la noticia 2
    },
    {
      id: 3,
      title: 'Convocatoria',
      content: 'La Universidad del Cauca se complace en anunciar la apertura de una convocatoria especial destinada a sus graduados del Programa de Maestría en Biología.',
      link: '/noticia3', // Enlace a la noticia 3
    },
    {
      id: 4,
      title: 'Feria Virtual',
      content: 'La Red Colombiana de Posgrados, realiza su Feria Virtual anual del 9 al 15 de Octubre de 2023. En esta ocasión estamos emocionados de anunciar que seremos ponentes de esta Feria de la RCP, un evento totalmente gratuito que no querrás perderte. ',
      link: '/noticia4', // Enlace a la noticia 4
    },
  ];

  return (
    <div className="news-box">
      <div className="news">
        <h2> <b>Noticias</b> </h2>
        <hr className="news-separator" />
        {newsData.map((news, index) => (
          <div key={news.id} className="news-item-wrapper">
            <NewsItem title={news.title} content={news.content} link={news.link} />
            {index < newsData.length - 1 && <hr className="news-separator" />}
          </div>
        ))}
      </div>
      <div className="pagination">
        <nav aria-label="...">
          <ul className="pagination pagination-sm">
            <li className="page-item active" aria-current="page">
              <span className="page-link">1</span>
            </li>
            <li className="page-item"><a className="page-link" href="#a">2</a></li>
            <li className="page-item"><a className="page-link" href="#a">3</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NewsBox;

