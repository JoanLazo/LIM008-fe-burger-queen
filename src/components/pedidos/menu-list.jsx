/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import './menu-list.css';
import firebase from '../../config/config';
// import firebase from './config/config.js'
// const db = firebase.firestore();

// eslint-disable-next-line react/prop-types
const Menulist = ({ pedido, setPedido, totalCost }) => {
  // console.log(pedido);
  const addP = (prod, e) => {
    e.count += 1;
    setPedido([...prod]);
  };

  const restP = (prod, e) => {
    if (e.count > 1) {
      e.count -= 1;
      setPedido([...prod]);
    }
  };

  const deleteProd = (id) => {
    setPedido(pedido.filter(e => e.id !== id));
  };
  const totalPrice = totalCost(pedido);

  const db = firebase.firestore();
  const setPedidoUser = (userName, userPedido, priceTotal) => {
    db.collection('Pedidos').doc().set({
      userName,
      userPedido,
      priceTotal,
      userDate: firebase.firestore.FieldValue.serverTimestamp(),
    })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  };
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(inputValue);
    setInputValue(value);
    console.log(inputValue);
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
              <td>{e.precio * e.count}</td>
              <td>
                <button className="btn-ico" onClick={() => restP(pedido, e)} type="button"><img src="https://user-images.githubusercontent.com/44485081/55675961-40f76200-5890-11e9-97c8-71271a02e4db.png" className="ico-menu-list" alt="menos" /></button>
                {' '}
                {e.count}
                <button className="btn-ico" onClick={() => addP(pedido, e)} type="button"><img src="https://user-images.githubusercontent.com/44485081/55675953-24f3c080-5890-11e9-8aae-0b9051a2051f.png" className="ico-menu-list" alt="más" /></button>
              </td>
              <td>
                <button className="btn-ico" onClick={() => deleteProd(e.id)} type="button"><img src="https://user-images.githubusercontent.com/44485081/55659563-e0045700-57c7-11e9-971e-d57e2b55ddf7.png" className="ico-menu-list" alt="logo" /></button>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <h4 className="pl-5">
        Total: 
        {' '}
        {'s/. '}
        {totalPrice}
      </h4>
      {' '}
      <span />
      <div className="flex-row">
        <label htmlFor="input" className="mr-2 mt-3 pl-5">Cliente</label>
        <input type="text" name="username" value={pedido.username} onChange={handleInputChange} />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <button onClick={() => setPedidoUser(inputValue, pedido, totalPrice)} type="button" className="btn btn-primary mt-2 pl-2 mb-3 justify-content-center align-items-center">Enviar a cocina</button>
      </div>
    </div>
  );
};

export default Menulist;
