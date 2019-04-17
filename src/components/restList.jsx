import React from 'react';
import PropTypes from 'prop-types';

const Resto = ({ data, isError, isLoading, addPedido }) => {
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
                {data.map((elem) => {
                  if (elem.categoria === 'resto del día') {
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
Resto.propTypes = {
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
export default Resto;
