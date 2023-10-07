import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesLogin.css';

import LoginForm from '../componentes/loginForm.jsx';
import SimpleHeader from '../componentes/loginHeader.jsx';
import LoginFooter from '../componentes/footerLogin.jsx'

function Login(){
  return(
    <div>
      <SimpleHeader />
      <LoginForm />
      <LoginFooter />
    </div>
  );
}

export default Login;