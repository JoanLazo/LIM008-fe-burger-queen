import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import OrderList from '../pedidos/OrderList';

afterEach(cleanup);

describe('OrderList', () => {
  beforeEach(cleanup);
  it('pedido y setPedido', () => {
    const pedido = [
      {
        id: 1, item: 'item 1', precio: 0, categoria: 'desayuno', url: 'http://akipan.es',
      },
    ];
    const { getByTestId } = render(<OrderList pedido={pedido} setPedido={() => {}} totalCost={() => {}} />);
    const container = getByTestId('container-order');
    expect(container.children).toHaveLength(1);
  });
  it('Ejecuta funcion de quitar cantidad al hacer click en el boton', (done) => {
    const removeP = (prod, e) => {
      expect(prod).toBe([{}]);
      expect(e).toEqual({ id: 1, item: 'item 1', count: 1 });
      done();
    };
    const { getByTestId } = render(<OrderList removeP={removeP} />);
    const button = getByTestId('1-removeP');
    fireEvent.click(button);
  });
});
