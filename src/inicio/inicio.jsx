import React, { Component } from 'react';
import './inicio.css';

class inicio extends Component {
  
    render() {
      return (
        <div className="container-all">
          <div className="burger-header">
          <div>
              <button><a className="btn-menu"
           href="#mesero"
           rel="noopener noreferrer">Mesero</a></button>
           <button><a className="btn-menu"
           href="#cocinero"
           rel="noopener noreferrer">Mesero</a></button>
          </div>
          </div>
      
        </div>
      );
    }
  }
  
  export default inicio;