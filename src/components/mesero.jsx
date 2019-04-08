/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Desayuno from './Desayuno';
import Resto from './resto';
// import Inicio from '../inicio/inicio';

const Mesero = () => (
    <Router>
        <div className="container-all">
        <div className="burger-header color-one">
        <h1 className="ml-3 mt-3">BURGER QUEEN</h1>
      </div>
        <nav>
        <div className="d-flex flex-row justify-content-around py-3 color-height">
            <button className="btn-menu color-height color-white" type="button">
        <Link className="links" to="/desayuno">DESAYUNO</Link>
      </button>
            <button className="btn-menu color-height color-white" type="button">
        <Link className="links" to="/resto">RESTO DEL DÍA</Link>
      </button>
          </div>
      </nav>
      {/* <div>
        <Desayuno />
      </div> */}
        <Route path="/desayuno" component={Desayuno} />
        <Route path="/resto" component={Resto} />
      </div>
      </Router>
);


export default Mesero;