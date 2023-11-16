import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../hojas-de-estilo/reservation-styles.css';

import { BotonCancelar, BotonRegresar, BotonSiguiente } from './button';
import Form1 from '../componentes/form1-reservation.jsx';
import Form2Auditorio from '../componentes/form2-auditorio.jsx';

function ReservAuditorio({ fechaSeleccionada }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const maxSelections = 1; // Número máximo de selecciones
  const [step, setStep] = useState(1); // Controlamos el paso del formulario

  const handleOptionClick = (time) => {
    if (selectedOptions.includes(time)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== time));
    } else if (selectedOptions.length < maxSelections) {
      setSelectedOptions([...selectedOptions, time]);
    }
  };

  const handleNextStep = () => {
    setStep(step + 1); // Avanzar al siguiente paso del formulario
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
          <Form2Auditorio fechaSeleccionada={fechaSeleccionada} />
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

export default ReservAuditorio;