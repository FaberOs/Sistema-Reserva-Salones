import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../hojas-de-estilo/form2-styles.css';

import ReservationOption from '../componentes/reservation-option.jsx';
import TextInput from '../componentes/textInput.jsx';
import { BotonCancelar, BotonRegresar, BotonAceptar } from './button';

function Form2({ selectedOptions, fechaSeleccionada, onPrevStep }) {
  const [nombreProfesor, setNombreProfesor] = useState('');
  const [correoInstitucional, setCorreoInstitucional] = useState('');
  const [numEstudiantes, setNumEstudiantes] = useState('');
  const [programaPregrado, setProgramaPregrado] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [selectedSalon, setSelectedSalon] = useState(null);

  const handleSalonClick = (salon) => {
    setSelectedSalon(salon);
  };

  return (
    <div className="form2-container">
      <div className="row">
        <div className="col-md-6">
          <TextInput
            id="nombreProfesor"
            type="text"
            placeholder="Nombre del profesor"
            value={nombreProfesor}
            onChange={(e) => setNombreProfesor(e.target.value)}
            required
          />
          <TextInput
            id="correoInstitucional"
            type="text"
            placeholder="Correo Institucional"
            value={correoInstitucional}
            onChange={(e) => setCorreoInstitucional(e.target.value)}
            required
          />
          <TextInput
            id="numEstudiantes"
            type="text"
            placeholder="Número de estudiantes"
            value={numEstudiantes}
            onChange={(e) => setNumEstudiantes(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <select
            id="programaPregrado"
            value={programaPregrado}
            onChange={(e) => setProgramaPregrado(e.target.value)}
            className="form-select"
          >
            <option value="">Programa de Posgrado</option>
            <option value="Maestría en Ingeniería de la Construcción">Maestría en Ingeniería de la Construcción</option>
            <option value="Maestría en Geomática">Maestría en Geomática</option>
            <option value="Maestría en Ingeniería de Pavimentos">Maestría en Ingeniería de Pavimentos</option>
            <option value="Maestría en Ingeniería de Tránsito">Maestría en Ingeniería de Tránsito</option>
            <option value="Maestría en Ingeniería de Vías Terrestres">Maestría en Ingeniería de Vías Terrestres</option>
            <option value="Especialización en Estructuras">Especialización en Estructuras</option>
            <option value="Especialización en Ingeniería de la Construcción">Especialización en Ingeniería de la Construcción</option>
            <option value="Especialización en Ingeniería de Recursos Hídricos">Especialización en Ingeniería de Recursos Hídricos</option>
            <option value="Especialización en Ingeniería de Vías Terrestres">Especialización en Ingeniería de Vías Terrestres</option>
            <option value="Doctorado en Ciencias de la Electrónica">Doctorado en Ciencias de la Electrónica</option>
            <option value="Doctorado en Ingeniería Telemática">Doctorado en Ingeniería Telemática</option>
            <option value="Maestría en Automática">Maestría en Automática</option>
            <option value="Maestría en Computación">Maestría en Computación</option>
            <option value="Maestría en Electrónica y Telecomunicaciones">Maestría en Electrónica y Telecomunicaciones</option>
            <option value="Maestría en Ingeniería Electrónica - Convenio con la Escuela Naval Almirante Padilla – Cartagena">Maestría en Ingeniería Electrónica - Convenio con la Escuela Naval Almirante Padilla – Cartagena</option> 
            <option value="Maestría en Ingeniería Telemática">Maestría en Ingeniería Telemática</option>
            <option value="Maestría en Telecomunicaciones">Maestría en Telecomunicaciones</option>
            <option value="Especialización en Desarrollo de Soluciones Informáticas">Especialización en Desarrollo de Soluciones Informáticas</option>
            <option value="Especialización en Redes y Servicios Telemáticos">Especialización en Redes y Servicios Telemáticos</option>
            <option value="Especialización en Telemática">Especialización en Telemática</option>         
          </select>
          <textarea
            id="mensaje"
            placeholder="Mensaje (Opcional)"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
      </div>
      <div className="form2-separator"></div>
      <div className="form2-section">
        <h3>Seleccione el salón:</h3>
        <div className="salon-grid">
          {[1, 2, 3, 4, 5, 6, 7].map((salon) => (
            <ReservationOption
              key={salon}
              time={`Salón ${salon}`}
              selected={selectedSalon === salon}
              onClick={() => handleSalonClick(salon)}
            />
          ))}
        </div>        
      </div>   
      <div className="buttons d-flex justify-content-between">
        <div>
          <BotonRegresar color="#0D4185" onClick={onPrevStep} />
        </div>
        <div className="d-flex">
          <div className="mr-2">
            <Link to="/home">
              <BotonCancelar color="#999999" />
            </Link>
          </div>
          <BotonAceptar
            selectedOptions={selectedOptions}
            selectedDate={fechaSeleccionada}
            sSalon={selectedSalon}
            cI={correoInstitucional}
            nProfesor={nombreProfesor}
            pP={programaPregrado}
            nE={numEstudiantes}
            m={mensaje}
          />
        </div>
      </div>
    </div>
  );
}

export default Form2;


