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
        <Route path="/admin" element={
          <div>
            <Admin />
          </div>
        }/>
      </Routes>
    </Router>
  );
}

export default App;

