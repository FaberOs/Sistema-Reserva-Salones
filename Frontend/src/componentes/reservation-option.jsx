import React from 'react';
import '../hojas-de-estilo/reservation-styles.css';

function ReservationOption({ time, selected, onClick }) {
  return (
    <button
      className={`reservation-option ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className={`circle ${selected ? 'selected' : ''}`}></div>
      <span>{time}</span>
    </button>
  );
}

export default ReservationOption;


