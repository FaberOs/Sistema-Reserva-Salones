import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeHeader from '../componentes/homeHeader.jsx'
import Calendario from "../componentes/calendar.jsx";
import GlobalStyles from '../componentes/GlobalStyles';
import Reservation from "../componentes/reservation-form.jsx";

function Reserva(){
  return(
    <div>
      <GlobalStyles
        backgroundColor="#CCCCCC"
      />
      <header>
        <HomeHeader />
      </header>
      <body>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Calendario />
            </div>
            <div className="col-md-8">
              <Reservation />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Reserva;