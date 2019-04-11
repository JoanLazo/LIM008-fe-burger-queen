/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import Menulist from '../menu/menu-list';

const Desayuno = () => {
  const [data, setData] = useState({ menu: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const [producto, setProducto] = useState({
  //   id: null,
  //   item: null,
  //   precio: null,
  // });

  const [pedido, setPedido] = useState([]);

  const addPedido = (menu) => {
    setPedido([{ ...menu, count: 1 }, ...pedido]);
  };


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

  // const addPedido = (prod) => {
  // };


  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
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
        <div className="col-7">
          <div>
            <Menulist pedido={pedido} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desayuno;
