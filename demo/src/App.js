import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import Login from './vistas/login';
import Home from './vistas/home';
import Reserva from './vistas/reserva';
import Auditorio from './vistas/auditorio';
import Admin from './vistas/admin';
import Consulta from './vistas/consulta';
import Facultad from './vistas/facultad';
import Programa from './vistas/programa';
import Salon from './vistas/salon';
import Aprobados from './vistas/aprobados';
import Rechazados from './vistas/rechazados';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={
          <div>
            <Login />
          </div>
        } />
        <Route path="/home" element={
          <div>
            <Home />
          </div>
        } />
        <Route path="/solicitar-reserva" element={
          <div>
            <Reserva />
          </div>
        }/>
        <Route path="/solicitar-auditorio" element={
          <div>
            <Auditorio />
          </div>
        }/>
        <Route path="/consultar-reserva" element={
          <div>
            <Consulta />
          </div>
        }/>
        <Route path="/admin" element={
          <div>
            <Admin />
          </div>
        }/>
        <Route path="/admin/facultad" element={
          <div>
            <Facultad />
          </div>
        }/>
        <Route path="/admin/programa" element={
          <div>
            <Programa />
          </div>
        }/>
        <Route path="/admin/salon" element={
          <div>
            <Salon />
          </div>
        }/>
        <Route path="/admin/aprobados" element={
          <div>
            <Aprobados />
          </div>
        }/>
        <Route path="/admin/rechazados" element={
          <div>
            <Rechazados />
          </div>
        }/>
      </Routes>
    </Router>
  );
}

export default App;

