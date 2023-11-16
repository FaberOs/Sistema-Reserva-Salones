import React, { useState } from 'react';
import { format } from 'date-fns';
import '../hojas-de-estilo/calendar-styles.css';

function Calendario({ onDateChange }) {
  const meses = [
    'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN',
    'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'
  ];

  const [mesActual, setMesActual] = useState(new Date().getMonth());
  const [anioActual, setAnioActual] = useState(new Date().getFullYear());
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

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
    // Deseleccionar al cambiar de mes.
    setFechaSeleccionada(null);
  };

  const obtenerDiasDelMes = (mes, anio) => {
    const primerDiaDelMes = new Date(anio, mes, 1);
    const primerDiaDeLaSemana = primerDiaDelMes.getDay();
    const dias = [];

    for (let i = 0; i < primerDiaDeLaSemana; i++) {
      dias.push(null); // Días del mes anterior, se representa como null.
    }

    const ultimoDiaDelMes = new Date(anio, mes + 1, 0);
    for (let i = 1; i <= ultimoDiaDelMes.getDate(); i++) {
      dias.push(new Date(anio, mes, i));
    }

    // Rellena la última fila con días del mes siguiente si es necesario
    while (dias.length % 7 !== 0) {
      dias.push(null);
    }

    return dias;
  };

  const diasDelMes = obtenerDiasDelMes(mesActual, anioActual);

  const handleNumberClick = (number) => {
    const diaSeleccionado = diasDelMes[number - 1];

    if (diaSeleccionado) {
      setFechaSeleccionada(diaSeleccionado);
      const formattedDate = format(diaSeleccionado, 'yyyy-MM-dd');
      onDateChange(formattedDate);
    } else {
      // Si el día seleccionado es del mes anterior, no hagas nada.
      setFechaSeleccionada(null);
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
            className={`calendario-day ${dia && dia.getDay() === 0 ? 'domingo' : ''} ${
              dia && fechaSeleccionada && dia.getDate() === fechaSeleccionada.getDate()
                ? 'selected'
                : ''
            }`}
            onClick={() => handleNumberClick(index + 1)}
          >
            <div className={`day-number ${index % 7 === 0 ? 'red-number' : ''}`}>
              {dia ? dia.getDate() : ''}
            </div>
            {dia && fechaSeleccionada && dia.getDate() === fechaSeleccionada.getDate() && (
              <div className="selection-circle"></div>
            )}
          </div>
        ))}
      </div>
      {fechaSeleccionada ? (
        <div className="fecha-seleccionada">
          Fecha seleccionada: {`${fechaSeleccionada.getDate()}/${mesActual + 1}/${anioActual}`}
        </div>
      ) : null}
    </div>
  );
}

export default Calendario;

















