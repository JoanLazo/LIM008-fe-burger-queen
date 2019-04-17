import React from 'react';
import PropTypes from 'prop-types';

const Desayuno = ({ data, isError, isLoading, addPedido }) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div>
          {isError && <div data-testid="error-message">Something went wrong ...</div>}

          {isLoading ? (
            <div data-testid="loading-message">Loading ...</div>
          ) : (
            <div>
              <h1>Desayuno</h1>
              <div data-testid="button-container" className="d-flex flex-column flex-nowrap">
                {data.map((elem) => {
                  if (elem.categoria === 'desayuno') {
                    return (
                      <button data-testid={`${elem.id}-button`} onClick={() => addPedido(elem)} key={elem.id} className="btn-menu color-four my-2" type="button">
                        {elem.item}
                        {' '}
                        s/.
                        {elem.precio}
                      </button>
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

Desayuno.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    item: PropTypes.string,
    precio: PropTypes.number,
    categoria: PropTypes.string,
  })).isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  addPedido: PropTypes.func.isRequired,
};

export default Desayuno;
