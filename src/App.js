import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Mesero from './components/mesero';
import Inicio from './components/Inicio';

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
