import React from 'react';
import PropTypes from 'prop-types';

const RestList = ({ data, isError, isLoading, addPedido }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Resto del día</h1>
          <div>
            {isError && <div data-testid="error-message-rest">Something went wrong ...</div>}

            {isLoading ? (
              <div data-testid="loading-message-rest">Loading ...</div>
            ) : (
              <div>
                <div data-testid="button-container-rest" className="d-flex flex-column flex-nowrap">
                  {data.map((elem) => {
                    if (elem.categoria === 'resto del día') {
                      return (
                        <div data-testid={`${elem.id}-button-rest`} key={elem.id} className="card my-2 width-10">
                          <img className="card-img-top" src={elem.url} alt="Card" />
                          <div className="card-body">
                            <h5 className="card-title text-center">{elem.item}</h5>
                            <p className="card-text text-center">s/.{elem.precio}</p>
                            <button onClick={() => addPedido(elem)} className="btn-menu color-four my-2 text-center ml-1" type="button">Agregar al pedido</button>
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
      </div>
    </div>
  );
};
RestList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addPedido: PropTypes.func.isRequired,
};
export default RestList;
