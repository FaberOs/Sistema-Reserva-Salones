import React, { useState } from 'react';
import '../hojas-de-estilo/reservation-styles.css';

import Form1 from '../componentes/form1-reservation.jsx';
import Form2 from '../componentes/form2-reservation.jsx';

function Reservation({ fechaSeleccionada }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const maxSelections = 2; // Número máximo de selecciones
  const [step, setStep] = useState(1);

  const handleOptionClick = (time) => {
    if (selectedOptions.includes(time)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== time));
    } else if (selectedOptions.length < maxSelections) {
      setSelectedOptions([...selectedOptions, time]);
    }
  };

  const handleNextStepForm1 = () => {
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="reservation-container">
      <div className="reservation-box">
        {step === 1 && (
          <Form1
            selectedOptions={selectedOptions}
            maxSelections={maxSelections}
            handleOptionClick={handleOptionClick}
            onNextStep={handleNextStepForm1}
          />
        )}
        {step === 2 && (
          <Form2 
            selectedOptions={selectedOptions} 
            fechaSeleccionada={fechaSeleccionada}
            onPrevStep={handlePrevStep}
          />
        )}
        {/*
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
              <BotonSiguiente color="#0D4185" onClick={handleNextStepForm1} />
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
        </div> */}
      </div>
    </div>
  );
}

export default Reservation;






