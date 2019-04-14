/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
// import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
// import Menulist from './pedidos/menu-list';

const Desayuno = ({data, isError, isLoading, addPedido}) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div>
          {isError && <div>Something went wrong ...</div>}

          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            <div className="d-flex flex-column flex-nowrap">
              <h1>Desayuno</h1>
              {data.menu.map((elem) => {
                if (elem.categoría === 'desayuno') {
                  return (
                    <button onClick={() => addPedido(elem)} key={elem.id} className="btn-menu color-four my-2" type="button">
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
      </div>
    </div>
  </div>
);

export default Desayuno;
