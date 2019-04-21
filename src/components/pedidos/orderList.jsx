/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './orderList.css';
import PropTypes from 'prop-types';
import firebase from '../../config/config';

const OrderList = ({ pedido, setPedido, totalCost }) => {
  // console.log(pedido);
  const addP = (prod, e) => {
    e.count += 1;
    setPedido([...prod]);
  };

  const removeP = (prod, e) => {
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
  const setOrderUser = (userName, userPedido, priceTotal) => {
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
  };
  return (
    <section className="d-flex flex-column my-5 py-5 flex-nowrap color-white-b py-5 pedido">
      <div className="pl-5 pr-5">
        <div>
          <div className="d-flex flew-row justify-content-between">
            <h6 className="text-center text-pedido">Producto</h6>
            <h6 className="text-center text-pedido">Precio</h6>
            <h6 className="text-center text-pedido">Cantidad</h6>
            <h6 className="text-center text-pedido">Eliminar</h6>
          </div>
        </div>
        <div>
          {pedido.map(e => (
            <div key={e.id} className="d-flex flex-column card-pedido mt-2 mb-2">
              <div className="flex-row">
                <p className="text-pedido">{e.item}</p>
              </div>
              <div className="justify-content-around d-flex flew-row ml-max">
                <span className="card-title ml-2">{e.precio * e.count}{'.00'}</span>
                <div className="">
                  <button className="btn-ico" onClick={() => removeP(pedido, e)} type="button"><img src="https://user-images.githubusercontent.com/44485081/55675961-40f76200-5890-11e9-97c8-71271a02e4db.png" className="ico-menu-list" alt="menos" /></button>
                  <span className="card-title">
                    {' '}
                    {e.count}
                  </span>
                  <button className="btn-ico" onClick={() => addP(pedido, e)} type="button"><img src="https://user-images.githubusercontent.com/44485081/55675953-24f3c080-5890-11e9-8aae-0b9051a2051f.png" className="ico-menu-list" alt="más" /></button>
                </div>
                <div className="">
                  <button className="btn-ico" onClick={() => deleteProd(e.id)} type="button"><img src="https://user-images.githubusercontent.com/44485081/55659563-e0045700-57c7-11e9-971e-d57e2b55ddf7.png" className="ico-menu-list" alt="logo" /></button>
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      <span className="pl-5 mt-3 barra" />
      <h6 className="pl-5 mt-3">
        Total: 
        {' '}
        {'s/. '}
        {totalPrice}{'.00'}
      </h6>
      {' '}
      <span />
      <div className="flex-row">
        <label htmlFor="input" className="mr-2 mt-3 pl-5">Cliente</label>
        <input type="text" name="username" value={pedido.username} onChange={handleInputChange} className="input-log" />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <button onClick={() => setOrderUser(inputValue, pedido, totalPrice)} type="button" className="btn-enviar color-one mt-3 mb-3 color-white text-center">Enviar a cocina</button>
      </div>
    </section>
  );
};

OrderList.propTypes = {
  pedido: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPedido: PropTypes.func.isRequired,
  totalCost: PropTypes.func.isRequired,
};
export default OrderList;
