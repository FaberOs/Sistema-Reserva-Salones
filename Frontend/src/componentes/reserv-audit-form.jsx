import React, { useState } from 'react';
import '../hojas-de-estilo/reservation-styles.css';

import Form1 from '../componentes/form1-reservation.jsx';
import Form2Auditorio from '../componentes/form2-auditorio.jsx';

function ReservAuditorio({ fechaSeleccionada }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const maxSelections = 2; // Número máximo de selecciones
  const [step, setStep] = useState(1); // Controlamos el paso del formulario

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
          <Form2Auditorio
            selectedOptions={selectedOptions}
            fechaSeleccionada={fechaSeleccionada}
            onPrevStep={handlePrevStep}
          />
        )}
      </div>
    </div>
  );
}

export default ReservAuditorio;