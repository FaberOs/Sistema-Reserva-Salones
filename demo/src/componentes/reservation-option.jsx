import React, { useState } from 'react';
import '../hojas-de-estilo/reservation-styles.css'

function ReservationOption({ time }) {
  const [selected, setSelected] = useState(false);

  const handleToggleSelection = () => {
    setSelected(!selected);
  };

  return (
    <button className={`reservation-option ${selected ? 'selected' : ''}`} onClick={handleToggleSelection}>
      <div className="circle"></div>
      <span>{time}</span>
    </button>
  );
}

export default ReservationOption;

