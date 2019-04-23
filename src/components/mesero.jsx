import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BreakfastList from './BreakfastList';
import RestList from './RestList';
import OrderList from './pedidos/OrderList';
import firebase from '../config/config';

const Mesero = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [verDesayuno, setVerDesayuno] = useState(true);
  const [verResto, setVerResto] = useState(true);
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
  const addP = (prod, e) => {
    e.count += 1;
    setPedido([...prod]);
  };

  const removeP = (prod, e) => {
    if (e.count > 1) {
      e.count -= 1;
      setPedido([...prod]);
    }
  };

  const deleteProd = (id) => {
    setPedido(pedido.filter(e => e.id !== id));
  };
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(inputValue);
    setInputValue(value);
  };
  const db = firebase.firestore();
  const setOrderUser = (userName, userPedido, priceTotal) => {
    db.collection('Pedidos').doc().set({
      userName,
      userPedido,
      priceTotal,
      userDate: firebase.firestore.FieldValue.serverTimestamp(),
    })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
    setInputValue('');
    setPedido([]);
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
        // console.log(result);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="fondo">
      <div className="container-all">
        <header className="d-flex flex-row burger-header color-one align-items-center">
          <img src="https://user-images.githubusercontent.com/44485081/56432832-7e96ba80-6294-11e9-9f69-3a197021e31d.png" className="img-nav ml-5 mt-1" alt="logo" />
          <h1 className="mt-4 title">¡ Atención exclusiva las 24 horas !</h1>
          <img src="https://user-images.githubusercontent.com/44485081/56434393-11862380-629a-11e9-8a26-14bbcc0d6916.png" className="img-nav justify-content-end mt-1 ml-3" alt="logo" />
          <button type="button" className="btn-ordenar color-six links">
            <Link className="links" to="/"><img src="https://user-images.githubusercontent.com/44485081/56434847-00d6ad00-629c-11e9-92c6-930802f0f81d.png" className="img-salida mt-3" alt="salida" /></Link>
          </button>
        </header>
        <nav>
          <div className="d-flex flex-row justify-content-around py-3 color-four">
            <button onClick={() => setVerDesayuno(!verDesayuno)} className="btn-menu color-one color-white" type="button">
              DESAYUNO
            </button>
            <button onClick={() => setVerResto(!verResto)} className="btn-menu color-one color-white" type="button">
            RESTO DEL DÍA
            </button>
          </div>
        </nav>
      </div>

      <main className="container">
        <div className="row flex-column flex-sm-column flex-md-row flex-md-row">
          <div className="col-6">
            <div className="d-flex flex-md-column">
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
          <div className="col-6">
            <div>
              <OrderList
                pedido={pedido}
                setPedido={setPedido}
                totalCost={totalCost}
                addP={addP}
                removeP={removeP}
                deleteProd={deleteProd}
                setOrderUser={setOrderUser}
                handleInputChange={handleInputChange}
                inputValue={inputValue}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="container-fluid color-one color-white py-2 text-center">
        <h6>BURGER QUEEN © 2019</h6>
      </footer>
    </div>
  );
};

export default Mesero;
