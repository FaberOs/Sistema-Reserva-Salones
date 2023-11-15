import React from 'react';
import ReservationOption from '../componentes/reservation-option.jsx';

import '../hojas-de-estilo/reservation-styles.css';

import sunIcon from '../iconos/sun-icon.svg';
import sunriseIcon from '../iconos/sunrise-icon.svg';

function Form1({ selectedOptions, handleOptionClick }) {
  return (
    <div>
      <div className="reservation-section">
        <div className="reservation-header">
          <div className="icon">
            <img src={sunIcon} alt="Icono Mañana" width="30" height="30" />
          </div>
          <div className="text">
            <h2>Mañana</h2>
            <p>7:00 AM - 13:00 PM</p>
          </div>
        </div>
        <div className="reservation-options">
          <ReservationOption
            time="7:00 AM"
            selected={selectedOptions.includes("7:00 AM")}
            onClick={() => handleOptionClick("7:00 AM")}
          />
          <ReservationOption
            time="8:00 AM"
            selected={selectedOptions.includes("8:00 AM")}
            onClick={() => handleOptionClick("8:00 AM")}
          />
          <ReservationOption
            time="9:00 AM"
            selected={selectedOptions.includes("9:00 AM")}
            onClick={() => handleOptionClick("9:00 AM")}
          />
          <ReservationOption
            time="11:00 AM"
            selected={selectedOptions.includes("11:00 AM")}
            onClick={() => handleOptionClick("11:00 AM")}
          />
          <ReservationOption
            time="12:00 PM"
            selected={selectedOptions.includes("12:00 PM")}
            onClick={() => handleOptionClick("12:00 PM")}
          />
          <ReservationOption
            time="13:00 PM"
            selected={selectedOptions.includes("13:00 PM")}
            onClick={() => handleOptionClick("13:00 PM")}
          />
        </div>
      </div>
      <div className="separator"></div>
      <div className="reservation-section">
        <div className="reservation-header">
          <div className="icon">
            <img src={sunriseIcon} alt="Icono Tarde" width="35" height="35" />
          </div>
          <div className="text">
            <h2>Tarde</h2>
            <p>14:00 PM - 18:00 PM</p>
          </div>
        </div>
        <div className="reservation-options">
          <ReservationOption
            time="14:00 PM"
            selected={selectedOptions.includes("14:00 PM")}
            onClick={() => handleOptionClick("14:00 PM")}
          />
          <ReservationOption
            time="15:00 PM"
            selected={selectedOptions.includes("15:00 PM")}
            onClick={() => handleOptionClick("15:00 PM")}
          />
          <ReservationOption
            time="16:00 PM"
            selected={selectedOptions.includes("16:00 PM")}
            onClick={() => handleOptionClick("16:00 PM")}
          />
          <ReservationOption
            time="17:00 PM"
            selected={selectedOptions.includes("17:00 PM")}
            onClick={() => handleOptionClick("17:00 PM")}
          />
          <ReservationOption
            time="18:00 PM"
            selected={selectedOptions.includes("18:00 PM")}
            onClick={() => handleOptionClick("18:00 PM")}
          />
        </div>
      </div>
    </div>
  );
}

export default Form1;
