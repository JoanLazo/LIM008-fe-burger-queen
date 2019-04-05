import React, { Component } from 'react';
import './App.css'
// import inicio from './inicio/inicio'

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
            </div>
          </div>


           </div>
          </div>

          
         </div>


      
        <div>
           <h6> </h6>
        </div>

      </div>
    );
  }
}
}

export default App;
