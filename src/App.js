import React, { Component } from 'react';
import './App.css';

// import init from './config/config';
import menu from './menu/menu';

class App extends Component {
  

  render() {
    return (
      <div className="container-all">
        <div className="burger-header color-one">
           <h1 className="ml-3 mt-3">BURGER QUEEN</h1>
        </div>
        <div className="d-flex flex-row justify-content-around py-3 color-height">
        <button className="btn-menu color-height color-white"><a className="links color-white"
        href="#desayuno" 
         rel="noopener noreferrer">DESAYUNO</a></button>
        <button className="btn-menu color-height color-white"><a className="links color-white"
        href="#resto" 
         rel="noopener noreferrer">RESTO DEL DÍA</a></button>
        </div>

        <div className="burger-body">
         <menu/>
         <div>

         </div>
        </div> 
        
        <div className="burger-footer">
           <h6> </h6>
        </div>
      </div>
    );
  }
}

export default App;
