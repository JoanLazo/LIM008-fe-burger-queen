import React, { Component } from 'react';
import './App.css';
// import Inicio from './inicio/inicio'
import Menulist from './menu/menu-list';
// import firebase from './config/config.js'

// const db = firebase.firestore();



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      menu: []
    };
  }

  componentDidMount() {
    fetch("https://joanlazo.github.io/LIM008-fe-burger-queen/src/data-menu/menu.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            menu: result.menu
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, menu } = this.state;
    if (error) {
     return <div>Error: {error.message}</div>;
   } else if (!isLoaded) {
     return <div>Loading...</div>;
   } else {
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
      
        <div className="container">
          <div className="row"> 
           <div className="col-5">
             <div className="d-flex flex-column">
          {menu.map(elem => (
            <button key={elem.id} className="btn-menu color-four my-2">{elem.item}  s/.{elem.precio}</button>
          ))}
             </div>
            </div>

            <div className="col-7">
            <div>
            <Menulist/>
            </div>
          </div>

           </div>
          </div>

          
         </div>

      </div>
    );
  }
}
}

export default App;
