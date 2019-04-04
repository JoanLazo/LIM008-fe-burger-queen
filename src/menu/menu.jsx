import React, { Component } from 'react';
import './menu.css';

class menu extends Component {
  
    render() {
      return (
        <div className="d-flex flex-colum menu-list ">
          <div className="desayuno-list">
            <h2>DESAYUNO</h2>
            <button className="btn-menu color-five">Café americano</button>
            <button className="btn-menu color-five">Café con leche</button>
            <button className="btn-menu color-five">Sandwich de jamón y queso</button>
            <button className="btn-menu color-five">Jugo de frutas natural</button>
              
          </div>
          <div className="resto-list">
             <h2>RESTO DEL DÍA</h2>
            <button className="btn-menu color-seven">Hamburguesa simple</button>
            <button className="btn-menu color-seven">Hamburguesa doble</button>
            <button className="btn-menu color-seven">Papas fritas</button>
            <button className="btn-menu color-seven">Aros de cebolla</button>
            <button className="btn-menu color-seven">Agua 500ml</button>
            <button className="btn-menu color-seven">Agua 750ml</button>
            <button className="btn-menu color-seven">Bebida/gaseosa 500ml</button>
            <button className="btn-menu color-seven">Bebida/gaseosa 750ml</button>
          </div>
      
        </div>
      );
    }
  }
  
  export default menu;