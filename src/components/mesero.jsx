/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Desayuno from './desayuno';
import Resto from './resto';
import Menulist from './pedidos/menu-list';


const Mesero = () => {
  const [data, setData] = useState({ menu: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [verDesayuno, setVerDesayuno] = useState(false);
  const [verResto, setVerResto] = useState(false);
  const addPedido = (menu) => {
    pedido.find(e => e.id === menu.id)
      ? setPedido([...pedido])
      : setPedido([{ ...menu, count: 1 }, ...pedido]);
  };
  const totalCost = (menu) => {
    // console.log(menu);
    const precio = menu.map(ele => ele.precio * ele.count);
    // console.log(precio);
    const total = precio.reduce((a, b) => a + b, 0);
    // console.log(total);
    return total;
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

  return (
    <div>
      <div className="container-all">
        <div className="burger-header color-one">
          <h1 className="ml-3 mt-3">BURGER QUEEN</h1>
        </div>
        <nav>
          <div className="d-flex flex-row justify-content-around py-3 color-height">
            <button onClick={() => setVerDesayuno(!verDesayuno)} className="btn-menu color-height color-white" type="button">
            DESAYUNO
            </button>
            <button onClick={() => setVerResto(!verResto)} className="btn-menu color-height color-white" type="button">
            RESTO DEL DÍA
            </button>
          </div>
        </nav>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="d-flex flex-column flex-nowrap">
              {verDesayuno && (
              <Desayuno
                data={data}
                isError={isError}
                isLoading={isLoading}
                addPedido={addPedido} />
              )}
              {verResto && (
                <Resto
                  data={data}
                  isError={isError}
                  isLoading={isLoading}
                  addPedido={addPedido} />
              )}
            </div>
          </div>
          <div className="col-7">
            <div>
              <Menulist
                data={data}
                pedido={pedido}
                setPedido={setPedido}
                totalCost={totalCost} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mesero;
