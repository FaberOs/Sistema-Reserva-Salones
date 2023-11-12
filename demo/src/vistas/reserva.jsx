import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeHeader from '../componentes/homeHeader.jsx'
import Calendario from "../componentes/calendar.jsx";
import GlobalStyles from '../componentes/GlobalStyles';
import Reservation from "../componentes/reservation-form.jsx";

function Reserva(){

  var roll;
  try {
    roll =JSON.parse(localStorage.getItem('User')).rol
  } catch (error) {
    roll = 'INVITADO';
  }

  return(
    <div className="container-reserva">
      <GlobalStyles
        backgroundColor="#CCCCCC"
      />
      <header>
        <HomeHeader />
      </header>
      <body>
      {
          roll === 'COORDINADOR'
            ?<div className="container">
              <div className="row m-2">
                <div className="col-xl-1 col-sm-1">
                  
                </div>
                <div className="col-xl-4 col-sm-5">
                  <Calendario />
                </div>
                <div className="col-xl-6 col-sm-12">
                  <Reservation />
                </div>
              </div>
            </div>
            :<div className="container">
              colocar imagen de error de pagina
            </div>
      }        
      </body>
    </div>
  );
}

export default Reserva;