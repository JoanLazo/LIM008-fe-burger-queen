import React, { Component } from 'react';
import './menu.css';

class menu extends Component {
  
    render() {
      return (
       
          <div className="my-4 color-white-b">
            <form className="py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>Producto</h3>
                  <h3>Precio</h3>
                  <h3>Cantidad</h3>
                </div>
                <span></span>
                <span></span>
                <img src='https://user-images.githubusercontent.com/44485081/55659563-e0045700-57c7-11e9-971e-d57e2b55ddf7.png' className="delete-img" alt="logo" />
            </form>
        </div>
      );
    }
  }
  
  export default menu;