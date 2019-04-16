/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Mesero from './components/mesero';
import Inicio from './components/inicio/inicio';

const App = () => (
  <BrowserRouter>
    <div className="container-all" />
    <div>
      <Route path="/" component={Inicio} exact />
      <Route path="/mesero" component={Mesero} />
    </div>
  </BrowserRouter>
);

export default App;
