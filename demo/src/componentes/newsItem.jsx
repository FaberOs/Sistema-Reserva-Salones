import React from 'react';
import '../hojas-de-estilo/stylesHome.css';

function NewsItem({ title, content, link }) {
  const handleClick = () => {
    window.location.href = link;
  };
  
  return (
    <div className="news-item" onClick={handleClick}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default NewsItem;

