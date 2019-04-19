import React from 'react';
import { Link } from 'react-router-dom';
import './inicio.css';

const Inicio = () => (
  <div className="burger-fondo">
    <div className="oscuro">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column justify-content-center align-items-center box">
              <div className="circulo mt-2">
                <img src="https://user-images.githubusercontent.com/44485081/56399818-e954e100-6215-11e9-95e4-7d38cc79ffa4.png" className="img-logo my-5" alt="logo" />
              </div>
              <button type="button" className="btn-menu-inicio color-six links">
                <img src="https://user-images.githubusercontent.com/44485081/56434393-11862380-629a-11e9-8a26-14bbcc0d6916.png" className="img-nav justify-content-center align-items-center mt-1" alt="logo" />
                <Link className="links" to="/mesero">MESERX</Link>
              </button>
              {/* <button type="button" className="btn-menu-inicio color-five">
                <Link className="links" to="/cocinero">COCINERO</Link>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Inicio;
