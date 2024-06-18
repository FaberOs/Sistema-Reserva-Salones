import React from 'react';

function InfoBox({ color, icon, text, boxColor }) {
  const boxStyle = {
    backgroundColor: boxColor,
    color: '#ffffff',
    padding: '20px',
  };

  const imgStyle = {
    margin: '15px',
  }

  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="infoBox text-center" style={boxStyle}>
        <img src={icon} alt="Icono" width="40" height="40" style={imgStyle} />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default InfoBox;




