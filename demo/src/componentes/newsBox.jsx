import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesHome.css';

import NewsItem from './newsItem';

function NewsBox() {

  const newsData = [
    {
      id: 1,
      title: 'Calendario academico',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquid reiciendis temporibus iusto consectetur ut dolorem obcaecati voluptate fuga unde error, quis, a minima. Debitis nihil ea deleniti aliquam molestias?',
      link: '/noticia1', // Enlace a la noticia 1
    },
    {
      id: 2,
      title: 'Resultados Prueba',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquid reiciendis temporibus iusto consectetur ut dolorem obcaecati voluptate fuga unde error, quis, a minima. Debitis nihil ea deleniti aliquam molestias?',
      link: '/noticia2', // Enlace a la noticia 2
    },
    {
      id: 3,
      title: 'Convocatoria',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquid reiciendis temporibus iusto consectetur ut dolorem obcaecati voluptate fuga unde error, quis, a minima. Debitis nihil ea deleniti aliquam molestias?',
      link: '/noticia3', // Enlace a la noticia 3
    },
    {
      id: 4,
      title: 'Resolucion',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquid reiciendis temporibus iusto consectetur ut dolorem obcaecati voluptate fuga unde error, quis, a minima. Debitis nihil ea deleniti aliquam molestias?',
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

