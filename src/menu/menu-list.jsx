/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable padded-blocks */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import './menu.css';

// import firebase from './config/config.js'
// const db = firebase.firestore();

const Menulist = () => {
  const [count, setCount] = useState(0);

  return (
      <div className="d-flex flex-column my-5 flex-nowrap color-white-b">
        <table className="pl-5 pr-5">
          <thead>
            <tr>
              <th className="text-center">Producto</th>
              <th className="text-center">Precio</th>
              <th className="text-center">Cantidad</th>
              <th className="text-center">Eliminar</th>
            </tr>
          </thead>
       <tbody className="text-center">
          <tr>
            <td>1</td>
            <td>2</td>
           <td>
            <button className="btn-ico" onClick={() => setCount(count - 1)} type="button"><img src="https://user-images.githubusercontent.com/44485081/55675961-40f76200-5890-11e9-97c8-71271a02e4db.png" className="ico-menu-list" alt="menos" /></button>
             {' '}{count}
            <button className="btn-ico" onClick={() => setCount(count + 1)} type="button"><img src="https://user-images.githubusercontent.com/44485081/55675953-24f3c080-5890-11e9-8aae-0b9051a2051f.png" className="ico-menu-list" alt="más" /></button>

        </td>
        <td>
           <button className="btn-ico" type="button"><img src="https://user-images.githubusercontent.com/44485081/55659563-e0045700-57c7-11e9-971e-d57e2b55ddf7.png" className="ico-menu-list" alt="logo" /></button>
        </td>
      </tr>
        <tr>
          {/* <td colSpan={3}>No hay pedidos</td> */}
        </tr>
    </tbody>
  </table>
    <h4 className="pl-2">Total : </h4> <span />
       <div className="flex-row">
         <label htmlFor="input" className="mr-2 mt-3 pl-2">Cliente </label>
         <input type="text" name="username" value="" />
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <button type="button" className="btn btn-primary mt-2 pl-2 mb-3 justify-content-center align-items-center">Enviar a cocina</button>
          </div>
      </div>
  );
};


export default Menulist;
