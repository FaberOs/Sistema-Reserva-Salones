import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeHeader from '../componentes/homeHeader.jsx'
import Calendario from "../componentes/calendar.jsx";
import GlobalStyles from '../componentes/GlobalStyles';
import Reservation from "../componentes/reservation-form.jsx";

function Reserva(){
  return(
    <div className="container-reserva">
      <GlobalStyles
        backgroundColor="#CCCCCC"
      />
      <header>
        <HomeHeader />
      </header>
      <body>
        <div className="container">
          <div className="row m-2">
            <div className="col-xl-4 col-sm-6">
              <Calendario />
            </div>
            <div className="col-xl-8 col-sm-12">
              <Reservation />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Reserva;