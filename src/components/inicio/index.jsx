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
              {/* <h1 className="py-5 text-center text-title">BURGER QUEEN</h1> */}
              <img src="https://user-images.githubusercontent.com/44485081/56399818-e954e100-6215-11e9-95e4-7d38cc79ffa4.png" className="img-logo my-5" alt="logo" />
              <button type="button" className="btn-menu-inicio color-six links">
                <Link className="links" to="/mesero">MESERO</Link>
              </button>
              <button type="button" className="btn-menu-inicio color-five">
                <Link className="links" to="/cocinero">COCINERO</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Inicio;
