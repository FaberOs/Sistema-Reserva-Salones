import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import Login from './vistas/login';
import Home from './vistas/home';

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;

