import React, { Component } from 'react';
import './App.css';
// import firebase from './config/config.js'

// const db = firebase.firestore();

// import menu from './menu/menu';

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
    fetch("")
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
    const { error, isLoaded, items } = this.state;
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
      
          <ul>
          {menu.map(elem => (
            <li key={elem.id}>
              {elem.item} s/.{elem.precio}
            </li>
          ))}
        </ul>

         <div>

         </div>

        </div> 
        
        <div>
           <h6> </h6>
        </div>

      </div>
    );
  }
}

export default App;
