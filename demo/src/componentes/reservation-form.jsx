import React from 'react';
import '../hojas-de-estilo/reservation-styles.css';

// Importa los componentes de opciones
import ReservationOption from '../componentes/reservation-option.jsx';
import { BotonCancelar, BotonRegresar, BotonSiguiente } from './button';

function Reservation() {
  return (
    <div className="reservation-container">
      <div className="reservation-box">
        <div className="reservation-section">
          <div className="reservation-header">
            <h2>Mañana</h2>
            <p>7:00 AM - 13:00 PM</p>
          </div>
          <div className="reservation-options">
            {/* Opciones de reserva para la mañana */}
            <ReservationOption time="7:00 AM" />
            <ReservationOption time="8:00 AM" />
            <ReservationOption time="9:00 AM" />
            <ReservationOption time="11:00 AM" />
            <ReservationOption time="12:00 PM" />
            <ReservationOption time="13:00 PM" />
          </div>
        </div>
        <div className="separator"></div>
        <div className="reservation-section">
          <div className="reservation-header">
            <h2>Tarde</h2>
            <p>14:00 PM - 18:00 PM</p>
          </div>
          <div className="reservation-options">
            {/* Opciones de reserva para la tarde */}
            <ReservationOption time="14:00 PM" />
            <ReservationOption time="15:00 PM" />
            <ReservationOption time="16:00 PM" />
            <ReservationOption time="17:00 PM" />
            <ReservationOption time="18:00 PM" />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="buttons">
            <BotonRegresar color="#0D4185"/>
          </div>
          <div className="buttons">
            <BotonCancelar color="#999999"/>
            <BotonSiguiente color="#0D4185"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;



