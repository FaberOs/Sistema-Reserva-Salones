import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeHeader from '../componentes/homeHeader.jsx'
import Calendario from "../componentes/calendar.jsx";
import GlobalStyles from '../componentes/GlobalStyles';
import ReservAuditorio from "../componentes/reserv-audit-form.jsx";

function Auditorio(){
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
            <div className="col-xl-1 col-sm-1">

            </div>
            <div className="col-xl-4 col-sm-5">
              <Calendario />
            </div>
            <div className="col-xl-6 col-sm-12">
              <ReservAuditorio />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Auditorio;