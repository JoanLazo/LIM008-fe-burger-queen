import React from 'react';
import PropTypes from 'prop-types';

const BreakfastList = ({ data, isError, isLoading, addPedido }) => (
  <div>
    <div>
      {isError && <div data-testid="error-message">Something went wrong ...</div>}

      {isLoading ? (
        <div data-testid="loading-message">Loading ...</div>
      ) : (
        <div>
          <h1 className="my-5">Desayuno</h1>
          <div data-testid="button-container" className="card-columns">
            {data.map((elem) => {
              if (elem.categoria === 'desayuno') {
                return (
                  <div data-testid={`${elem.id}-button`} key={elem.id} className="card my-2">
                    <img className="card-img-top" src={elem.url} alt="Card" />
                    <div className="card-body">
                      <h5 className="card-title text-center">{elem.item}</h5>
                      <p className="card-text text-center">s/.{elem.precio}</p>
                      <button onClick={() => addPedido(elem)} className="btn-ordenar justify-content-center align-items-center color-four color-white" type="button">Ordenar</button>
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

BreakfastList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addPedido: PropTypes.func.isRequired,
};

export default BreakfastList;
