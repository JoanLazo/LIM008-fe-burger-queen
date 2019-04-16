/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React from 'react';

const Resto = ({data, isError, isLoading, addPedido}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
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
                      <button key={elem.id} onClick={() => addPedido(elem)} className="btn-menu color-four my-2" type="button">
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
};
export default Resto;
