/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
// eslint-disable-next-line  reaccion / jsx-filename-extension
import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Mesero from './components/mesero';
import Inicio from './inicio/inicio';
// import Menulist from './menu/menu-list';

// import firebase from './config/config.js'

// const db = firebase.firestore();

const App = () => (
    <BrowserRouter>
    <main className="container-all" />
         <div>
           <Route path="/" component={Inicio} exact />
           <Route path="/mesero" component={Mesero} />
       </div>
     </BrowserRouter>
);

export default App;
