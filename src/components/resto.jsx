/* eslint-disable no-unused-expressions */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menulist from '../menu/menu-list';

const Resto = () => {
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
<div className="container">
    <div className="row">
      <div className="col-5">
      <h1>Resto del día</h1>
      <div>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
   <div>Loading ...</div>
      ) : (
      <div className="d-flex flex-column flex-nowrap">
        {data.menu.map((elem) => {
          if (elem.categoría === 'resto del día') {
            return (
              <button key={elem.id} className="btn-menu color-four my-2" type="button">
                {elem.item}
                {' '}
                s/.
                {elem.precio}
             </button>
            );
          }
        })}
        </div>
      )}
    </div>
      <div className="col-7">
                <div>
                  <Menulist />
                </div>
              </div>
              </div>
        </div>
        </div>
  );
};
export default Resto;
