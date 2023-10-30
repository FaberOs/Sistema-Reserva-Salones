import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeHeader from '../componentes/homeHeader.jsx'
import GlobalStyles from '../componentes/GlobalStyles';
import Sidebar from "../componentes/sidebar.jsx";
/* import Inbox from "../componentes/inbox-container.jsx"; */

function Admin() {
  return (
    <div>
      <GlobalStyles backgroundColor="#CCCCCC" />
      <header>
        <HomeHeader />
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="sidebar">
                <Sidebar />
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              {/*<Inbox />*/}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Admin;