import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BreakfastList from './BreakfastList';
import RestList from './RestList';
import OrderList from './pedidos/OrderList';

const Mesero = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [verDesayuno, setVerDesayuno] = useState(true);
  const [verResto, setVerResto] = useState(false);
  const addPedido = (menu) => {
    if (pedido.find(e => e.id === menu.id)) {
      setPedido([...pedido]);
    } else {
      setPedido([{ ...menu, count: 1 }, ...pedido]);
    }
  };
  const totalCost = (menu) => {
    // console.log(menu);
    const precio = menu.map(ele => ele.precio * ele.count);
    const total = precio.reduce((a, b) => a + b, 0);
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
        // console.log(result);
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
              <BreakfastList
                data={data}
                isError={isError}
                isLoading={isLoading}
                addPedido={addPedido}
              />
              )}
              {verResto && (
                <RestList
                  data={data}
                  isError={isError}
                  isLoading={isLoading}
                  addPedido={addPedido}
                />
              )}
            </div>
          </div>
          <div className="col-7">
            <div>
              <OrderList
                pedido={pedido}
                setPedido={setPedido}
                totalCost={totalCost}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mesero;
