import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../hojas-de-estilo/stylesLogin.css';

import LoginForm from '../componentes/loginForm.jsx';
import SimpleHeader from '../componentes/loginHeader.jsx';
import LoginFooter from '../componentes/footerLogin.jsx'

import GlobalStyles from '../componentes/GlobalStyles';

function Login(){
  return(
    <div>
      <GlobalStyles
        backgroundColor="#0D4185"
        textColor="#ffffff"
      />
      <header>
        <SimpleHeader />
      </header>
      <main>
        <LoginForm />
      </main>
      <footer>
        <LoginFooter />
      </footer>
    </div>
  );
}

export default Login;