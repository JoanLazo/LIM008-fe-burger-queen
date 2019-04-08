/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React from 'react';
import Menulist from '../menu/menu-list';

const Resto = () => (

<div className="container">
    <div className="row">
      <div className="col-5">
      <h1>Resto del día</h1>
      <div className="col-7">
                <div>
                  <Menulist />
                </div>
              </div>
              </div>
        </div>
        </div>
);
export default Resto;
