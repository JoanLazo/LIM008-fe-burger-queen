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

function Menulist() {
  const [count, setCount] = useState(0);


  return (
      <div className="my-4 color-white-b">
        <div className="py-3">
          <div className="d-flex justify-content-between align-items-center">
              <h3>Producto</h3>
              <h3>Precio</h3>
              <h3>Cantidad</h3>
            </div>
          <span />
          <span />
      <button className="btn-ico" onClick={() => setCount(count - 1)} type="button"><img src="https://user-images.githubusercontent.com/44485081/55675961-40f76200-5890-11e9-97c8-71271a02e4db.png" className="ico-menu-list" alt="menos" /></button>
      Cantidad :{' '}{count}
      <button className="btn-ico" onClick={() => setCount(count + 1)} type="button"><img src="https://user-images.githubusercontent.com/44485081/55675953-24f3c080-5890-11e9-8aae-0b9051a2051f.png" className="ico-menu-list" alt="más" /></button>
      <button className="btn-ico" type="button"><img src="https://user-images.githubusercontent.com/44485081/55659563-e0045700-57c7-11e9-971e-d57e2b55ddf7.png" className="ico-menu-list" alt="logo" /></button>
        </div>
      </div>
  );
}


export default Menulist;
