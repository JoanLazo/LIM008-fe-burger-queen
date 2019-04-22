import React from 'react';
import PropTypes from 'prop-types';

const RestList = ({ data, isError, isLoading, addPedido }) => {
  return (
    <div>
      <h1 className="my-5">Resto del día</h1>
      <div>
        {isError && <div data-testid="error-message-rest">Something went wrong ...</div>}

        {isLoading ? (
          <div data-testid="loading-message-rest">Loading ...</div>
        ) : (
          <div>
            <div data-testid="button-container-rest" className="card-columns">
              {data.map((elem) => {
                if (elem.categoria === 'resto del día') {
                  return (
                    <div data-testid={`${elem.id}-button-rest`} key={elem.id} className="card my-2">
                      <img className="card-img-top" src={elem.url} alt="Card" />
                      <div className="card-body">
                        <h5 className="card-title text-center">{elem.item}</h5>
                        <p className="card-text text-center">s/.{elem.precio}</p>
                        <button onClick={() => addPedido(elem)} className="btn-ordenar justify-content-center align-items-center color-four  color-white" type="button">Ordenar</button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
RestList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addPedido: PropTypes.func.isRequired,
};
export default RestList;
