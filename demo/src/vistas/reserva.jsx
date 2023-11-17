import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeHeader from '../componentes/homeHeader.jsx'
import Calendario from "../componentes/calendar.jsx";
import GlobalStyles from '../componentes/GlobalStyles';
import Reservation from "../componentes/reservation-form.jsx";
import MainFooter from "../componentes/footerMain.jsx";
import Error404 from "../componentes/error404.jsx";

function Reserva(){

  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  const handleDateChange = (formattedDate) => {
    setFechaSeleccionada(formattedDate);
    // Otra lógica que puedas necesitar con la fecha seleccionada
    console.log('Fecha seleccionada:', formattedDate);
  };

  var roll;
  try {
    roll = JSON.parse(localStorage.getItem('User')).rol
  } catch (error) {
    roll = 'INVITADO';
  }

  return (
    <div className="container-reserva">
      <GlobalStyles
        backgroundColor="#CCCCCC"
      />
      <header>
        <HomeHeader />
      </header>
      <main>
        {
          roll === 'COORDINADOR' || roll === 'ADMINISTRADOR'
            ? <div className="container">
                <div className="row m-2">
                  <div className="col-xl-1 col-sm-2"></div>
                  <div className="col-xl-4 col-sm-8">
                    <Calendario onDateChange={handleDateChange} />
                  </div>
                  <div className="col-xl-6 col-sm-12">
                    <Reservation fechaSeleccionada={fechaSeleccionada} />
                  </div>
                </div>
              </div>
            : roll === 'ADMINISTRADOR'
              ? <div className="container">
                  <div className="row m-2">
                    <div className="col-xl-1 col-sm-2"></div>
                    <div className="col-xl-4 col-sm-8">
                      <Calendario onDateChange={handleDateChange} />
                    </div>
                    <div className="col-xl-6 col-sm-12">
                      <Reservation fechaSeleccionada={fechaSeleccionada} />
                    </div>
                  </div>
                </div>
              :<div className="container">
                  <Error404 />
                </div>
        }        
      </main>
      <footer className="mt-5">
        <MainFooter />
      </footer>
    </div>
  );
}

export default Reserva;
