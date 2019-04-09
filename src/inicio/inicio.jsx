/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './inicio.css';

const Inicio = () => (
  <Router>
    <div className="burger-fondo">
      <div className="oscuro">
        <h1 className="py-5 text-center text-title">
           BURGER QUEEN
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-row  justify-content-center align-items-center burger-header-inicio">
                <button type="button" className="ml-5 mr-5 btn-menu-inicio color-six links">
                  <Link className="links" to="/mesero">MESERO</Link>
                </button>
                <button type="button" className="ml-5 mr-5 btn-menu-inicio color-five">
                  <Link className="links" to="/cocinero">COCINERO</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default Inicio;
