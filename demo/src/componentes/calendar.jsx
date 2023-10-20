import React, { useState } from 'react';
import '../hojas-de-estilo/calendar-styles.css';

function Calendario() {
  const meses = [
    'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN',
    'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'
  ];

  const [mesActual, setMesActual] = useState(new Date().getMonth());
  const [anioActual, setAnioActual] = useState(new Date().getFullYear());
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);

  const cambiarMes = (incremento) => {
    let nuevoMes = mesActual + incremento;
    let nuevoAnio = anioActual;

    if (nuevoMes === 12) {
      nuevoMes = 0;
      nuevoAnio++;
    } else if (nuevoMes === -1) {
      nuevoMes = 11;
      nuevoAnio--;
    }

    setMesActual(nuevoMes);
    setAnioActual(nuevoAnio);
    // También deselecciona al cambiar de mes.
    setFechaSeleccionada(null);
  };

  const obtenerDiasDelMes = (mes, anio) => {
    const fecha = new Date(anio, mes, 1);
    const dias = [];
    while (fecha.getMonth() === mes) {
      dias.push(new Date(fecha));
      fecha.setDate(fecha.getDate() + 1);
    }
    return dias;
  };

  const diasDelMes = obtenerDiasDelMes(mesActual, anioActual);

  const handleNumberClick = (number) => {
    if (fechaSeleccionada !== null) {
      if (number === diaSeleccionado) {
        // Deseleccionar al hacer clic en el mismo día.
        setFechaSeleccionada(null);
        setDiaSeleccionado(null);
      } else {
        // Cambiar la selección al hacer clic en otro día.
        setFechaSeleccionada(
          new Date(anioActual, mesActual, number)
        );
        setDiaSeleccionado(number);
      }
    } else {
      // Establecer la selección si no hay ninguna.
      setFechaSeleccionada(
        new Date(anioActual, mesActual, number)
      );
      setDiaSeleccionado(number);
    }
  };

  return (
    <div className="calendario-container">
      <div className="calendario-header">
        <button className="btn btn-link" onClick={() => cambiarMes(-1)}>&lt;</button>
        <h3>{meses[mesActual]} {anioActual}</h3>
        <button className="btn btn-link" onClick={() => cambiarMes(1)}>&gt;</button>
      </div>
      <hr className="calendar-separator" />
      <div className="calendario-grid">
        <div className="day-name dom">Dom</div>
        <div className="day-name">Lun</div>
        <div className="day-name">Mar</div>
        <div className="day-name">Mie</div>
        <div className="day-name">Jue</div>
        <div className="day-name">Vie</div>
        <div className="day-name">Sab</div>
        {diasDelMes.map((dia, index) => (
          <div
            key={index}
            className={`calendario-day ${dia.getDay() === 0 ? 'domingo' : ''} ${
              fechaSeleccionada &&
              dia.getDate() === diaSeleccionado &&
              dia.getMonth() === mesActual
                ? 'selected'
                : ''
            }`}
            onClick={() => handleNumberClick(dia.getDate())}
          >
            <div
              className={`day-number ${index % 7 === 0 ? 'red-number' : ''} ${
                fechaSeleccionada &&
                dia.getDate() === diaSeleccionado &&
                dia.getMonth() === mesActual
                  ? 'selected-number'
                  : ''
              }`}
            >
              {dia.getDate()}
            </div>
          </div>
        ))}
      </div>
      {fechaSeleccionada ? (
        <div className="fecha-seleccionada">
          Fecha seleccionada: {`${diaSeleccionado}/${mesActual + 1}/${anioActual}`}
        </div>
      ) : null}
    </div>
  );
}

export default Calendario;
















