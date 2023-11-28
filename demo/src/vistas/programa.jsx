import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeHeader from '../componentes/homeHeader.jsx'
import GlobalStyles from '../componentes/GlobalStyles';
import Sidebar from "../componentes/sidebar.jsx";
import Error404 from "../componentes/error404.jsx";
import ProgramaInbox from "../componentes/programa-inbox.jsx";

function Facultad() {

  var roll;
  try {
    roll =JSON.parse(localStorage.getItem('User')).rol
  } catch (error) {
    roll = 'INVITADO';
  }
  
  return (
    <div>
      <GlobalStyles backgroundColor="#CCCCCC" />
      <header>
        <HomeHeader />
      </header>
      <main>
        {
          roll === 'ADMINISTRADOR'
            ?<div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-3 col-sm-12">
                  <div className="sidebar">
                    <Sidebar />
                  </div>
                </div>
                <div className="col-lg-10 col-md-9 col-sm-12">
                  <ProgramaInbox />
                </div>
              </div>
            </div>

            :<div className="container">
              <Error404 />
            </div>
        }
        
      </main>
    </div>
  );
}

export default Facultad;