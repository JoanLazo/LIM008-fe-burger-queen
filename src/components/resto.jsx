/* eslint-disable no-unused-expressions */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import React from 'react';
// import Menulist from './pedidos/menu-list';

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
