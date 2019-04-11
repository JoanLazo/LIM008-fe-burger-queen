/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import './menu.css';

// import firebase from './config/config.js'
// const db = firebase.firestore();

const Menulist = ({ pedido, setPedido }) => {
  console.log(pedido);
  console.log(setPedido);
  const [count, setCount] = useState(1);

  const addP = (add) => {
    setCount(count + 1);
    setPedido([{ ...add, count: count }]);
  };

  const restP = (add) => {
    setCount(count - 1);
    setPedido([{ ...add, count: count }]);
  };
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
          {pedido.map(e => (
            <tr key={e.id}>
              <td>{e.item}</td>
              <td>{e.precio}</td>
              <td>
                <button className="btn-ico" onClick={() => restP(e)} type="button"><img src="https://user-images.githubusercontent.com/44485081/55675961-40f76200-5890-11e9-97c8-71271a02e4db.png" className="ico-menu-list" alt="menos" /></button>
                {' '}
                {e.count}
                <button className="btn-ico" onClick={() => addP(e)} type="button"><img src="https://user-images.githubusercontent.com/44485081/55675953-24f3c080-5890-11e9-8aae-0b9051a2051f.png" className="ico-menu-list" alt="más" /></button>
              </td>
              <td>
                <button className="btn-ico" type="button"><img src="https://user-images.githubusercontent.com/44485081/55659563-e0045700-57c7-11e9-971e-d57e2b55ddf7.png" className="ico-menu-list" alt="logo" /></button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <h4 className="pl-2">Total : </h4>
      {' '}
      <span />
      <div className="flex-row">
        <label htmlFor="input" className="mr-2 mt-3 pl-2">Cliente</label>
        <input type="text" name="username" />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <button type="button" className="btn btn-primary mt-2 pl-2 mb-3 justify-content-center align-items-center">Enviar a cocina</button>
      </div>
    </div>
  );
};


export default Menulist;
