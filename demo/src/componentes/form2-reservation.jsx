import React, { useState } from 'react';
import ReservationOption from '../componentes/reservation-option.jsx';
import TextInput from '../componentes/textInput.jsx';
import '../hojas-de-estilo/form2-styles.css';
import { BotonAceptar } from './button';

function Form2() {
  const [nombreProfesor, setNombreProfesor] = useState('');
  const [correoInstitucional, setCorreoInstitucional] = useState('');
  const [numEstudiantes, setNumEstudiantes] = useState('');
  const [programaPregrado, setProgramaPregrado] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [selectedSalon, setSelectedSalon] = useState(null);

  /*const handleSumit = () => {
    alert("{ 'idSalon':"+selectedSalon+
    ",'cedulaCiudadania':"+JSON.parse(localStorage.getItem('User')).numeroIdentificacion+
    ",'horasSolicitadas':"+horasSolicitadas+
    ",'numeroDeEstudiantes':"+numEstudiantes+
    ",'estadoReserva':pendiente"+
    ",'programaPosgrado':"+programaPregrado+
    ",'edificio': ingenierias"+
    "'ubicacionDocente':"+233+
    ",'mensaje':"+mensaje+
    ",'fechaReserva': 2023-11-02T10:00:00 }"); 
    alert(selectedSalon);
  }*/

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
            <option value="Programa 1">Programa 1</option>
            <option value="Programa 2">Programa 2</option>
            <option value="Programa 3">Programa 3</option>
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
      <BotonAceptar sSalon={selectedSalon} cI={correoInstitucional} pP={programaPregrado} nE={numEstudiantes} m={mensaje}/>
    </div>
  );
}

export default Form2;


