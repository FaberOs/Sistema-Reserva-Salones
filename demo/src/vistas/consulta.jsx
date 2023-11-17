import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeHeader from '../componentes/homeHeader.jsx'
import MainFooter from "../componentes/footerMain.jsx";
import ConsultForm from '../componentes/consult-form.jsx';

import GlobalStyles from '../componentes/GlobalStyles';

function Login(){
  return(
    <div>
      <GlobalStyles
        backgroundColor="#CCCCCC"
      />
      <header>
        <HomeHeader />
      </header>
      <main className='mb-4'>
        <ConsultForm />
      </main>
    </div>
  );
}

export default Login;


