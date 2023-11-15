import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/reservation-styles.css';
import { BotonCancelar, BotonRegresar, BotonSiguiente } from './button';
import Form1 from '../componentes/form1-reservation.jsx';
import Form2 from '../componentes/form2-reservation.jsx';

function Reservation() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const maxSelections = 2; // Número máximo de selecciones
  const [step, setStep] = useState(1);

  const handleOptionClick = (time) => {
    if (selectedOptions.includes(time)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== time));
    } else if (selectedOptions.length < maxSelections) {
      setSelectedOptions([...selectedOptions, time]);
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleDateChange = (date) => {
    setFechaSeleccionada(date);
  };

  return (
    <div className="reservation-container">
      <div className="reservation-box">
        {step === 1 && (
          <Form1
            selectedOptions={selectedOptions}
            maxSelections={maxSelections}
            handleOptionClick={handleOptionClick}
          />
        )}
        {step === 2 && (
          <Form2 
            selectedOptions={selectedOptions} 
            fechaSeleccionada={fechaSeleccionada} 
          />
        )}

        <div className="d-flex justify-content-between">
          {step > 1 && (
            <div className="buttons">
              <BotonRegresar color="#0D4185" onClick={() => setStep(step - 1)} />
            </div>
          )}
          {step === 1 && (
            <div className="buttons">
              <Link to="/home">
                <BotonCancelar color="#999999" />
              </Link>
              <BotonSiguiente color="#0D4185" onClick={handleNextStep} />
            </div>
          )}
          {step === 2 && (
            <div className="buttons">
              <div className="d-flex mr-2">
                <Link to="/home">
                  <BotonCancelar color="#999999" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reservation;





