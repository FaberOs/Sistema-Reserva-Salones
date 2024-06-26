import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/form2-styles.css';
import ReservationOption from '../componentes/reservation-option.jsx';
import TextInput from '../componentes/textInput.jsx';
import { BotonCancelar, BotonRegresar, BotonAceptarAuditorio } from './button';
import ClienteProgramaAcademico from '../services/ClienteProgramaAcademico';

import ClienteAuditorio from '../services/ClienteAuditorio.js';

function Form2({ selectedOptions, fechaSeleccionada, onPrevStep }) {
  const [nombreProfesor, setNombreProfesor] = useState('');
  const [correoInstitucional, setCorreoInstitucional] = useState('');
  const [numEstudiantes, setNumEstudiantes] = useState('');
  const [programasAcademicos, setProgramasAcademicos] = useState([]);
  const [programaPregrado, setProgramaPregrado] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [auditorios, setAuditorios] = useState([]); // Estado para almacenar los auditorios
  const [selectedAuditorio, setSelectedAuditorio] = useState(null);

  const handleAuditorioClick = (auditorio) => {
    setSelectedAuditorio(auditorio);
  };

  useEffect(() => {
    // Cargar programas académicos al montar el componente
    ClienteProgramaAcademico.obtenerTodasLosProgramasAcademicos()
      .then(response => {
        console.log('Programas académicos obtenidos:', response.data);
        setProgramasAcademicos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener programas académicos:', error);
      });

    // Cargar auditorios al montar el componente
    ClienteAuditorio.obtenerTodosLosAuditorios()
      .then(response => {
        console.log('auditorios obtenidos:', response.data);
        setAuditorios(response.data);
      })
      .catch(error => {
        console.error('Error al obtener auditorios:', error);
      });
  }, []);

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
            type="number"
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
            <option value="">Programas</option>
            {programasAcademicos.map(programa => (
              <option key={programa.id} value={programa.nombre}>
                {programa.nombrePrograma}
              </option>
            ))}
          </select>

          <textarea
            id="Evento"
            placeholder="Mensaje (Especifique el evento)"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
      </div>
      <div className="form2-separator"></div>
      <div className="form2-section">
        <h3>Seleccione el Auditorio:</h3>
        <div className="auditorio-grid">
          {auditorios.map(auditorio => (
            <ReservationOption
              key={auditorio.idAuditorio}
              time={`${auditorio.nombre}`}
              selected={selectedAuditorio === auditorio.idAuditorio}
              onClick={() => handleAuditorioClick(auditorio.idAuditorio)}
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
          <BotonAceptarAuditorio
            selectedOptions={selectedOptions}
            selectedDate={fechaSeleccionada}
            sauditorio={selectedAuditorio}
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
