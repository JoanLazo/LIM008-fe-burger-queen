/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
// eslint-disable-next-line  reaccion / jsx-filename-extension
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import Inicio from './inicio/inicio'
import Menulist from './menu/menu-list';
// import firebase from './config/config.js'

// const db = firebase.firestore();

function App() {
  const [data, setData] = useState({ menu: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          'https://joanlazo.github.io/LIM008-fe-burger-queen/src/data-menu/menu.json',
        );

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container-all">
        <div className="burger-header color-one">
          <h1 className="ml-3 mt-3">BURGER QUEEN</h1>
        </div>
        <div className="d-flex flex-row justify-content-around py-3 color-height">
          <button className="btn-menu color-height color-white" type="button">
            <a
              className="links color-white"
              href="#desayuno"
              rel="noopener noreferrer"
            // eslint-disable-next-line react/jsx-one-expression-per-line
            >DESAYUNO
            </a>
          </button>
          <button className="btn-menu color-height color-white" type="button">
            <a
              className="links color-white"
              href="#resto"
              rel="noopener noreferrer"
            >RESTO DEL DÍA
            </a>
          </button>
        </div>

        <div className="burger-body">

          <div className="container">
            <div className="row">
              <div className="col-5">
                <div>

                {isError && <div>Something went wrong ...</div>}

                {isLoading ? (
                   <div>Loading ...</div>
                ) :  (
                  <div className="d-flex flex-column">
                  {data.menu.map(elem => (
                    <button key={elem.id} className="btn-menu color-four my-2" type="button">
                      {elem.item}
                      {' '}
                      s/.
                      {elem.precio}
                    </button>
                  ))}
                 </div>
                )};
                </div>
              </div>

              <div className="col-7">
                <div>
                  <Menulist />
                </div>
              </div>

            </div>
          </div>


        </div>

      </div>
  );
}

export default App;
