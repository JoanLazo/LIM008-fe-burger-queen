import React, { Component } from 'react';
import './inicio.css';

class Inicio extends Component {
  
    render() {
      return (
        
          <div className="burger-header-inicio">
          <div>
              <button><a className="btn-menu"
           href="#mesero"
           rel="noopener noreferrer">Mesero</a></button>
           <button><a className="btn-menu"
           href="#cocinero"
           rel="noopener noreferrer">Cocinero</a></button>
          </div>
          </div>
      
      );
    }
  }
  
  export default Inicio;