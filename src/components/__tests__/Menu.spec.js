import React from 'react';
import {
  render, fireEvent, cleanup, waitForElement, act,
} from 'react-testing-library';
import Mesero from '../Mesero';

afterEach(cleanup);

describe('Mesero', () => {
  // beforeEach(cleanup);
  it('Agrega un nuevo item al pedido', async () => {
    const { getByTestId } = render(<Mesero />);
    const btn = await waitForElement(() => getByTestId('1-button'));
    await act(async () => {
      fireEvent.click(btn);
    });
    const list = getByTestId('container-order');
    expect(list.children).toHaveLength(1);
    const total = getByTestId('total-price');
    expect(total.textContent).toBe('s/.5.00');
  });
  it('Ejecuta funcion de quitar cantidad al hacer click en el boton', (done) => {
    const removeP = (prod, e) => {
      expect(prod).toBe([{}]);
      expect(e).toEqual({ id: 1, item: 'item 1', count: 1 });
      done();
    };
    const { getByTestId } = render(<Mesero removeP={removeP} />);
    const btnRemoveP = getByTestId('1-removeP');
    fireEvent.click(btnRemoveP);
  });
  it('Ejecuta función de agregar cantidad al pedido', (done) => {
    const addP = (prod, e) => {
      expect(prod).toBe([{}]);
      expect(e).toEqual({ id: 1, item: 'item 1', count: 2 });
      done();
    };
    const { getByTestId } = render(<Mesero addP={addP} />);
    const btnAddP = getByTestId('1-addP');
    fireEvent.click(btnAddP);
  });
  it('Ejecuta función de quitar el pedido de la lista de pedido', (done) => {
    const deleteProd = (id) => {
      expect(id).toBe(1);
      done();
    };
    const { getByTestId } = render(<Mesero deleteProd={deleteProd} />);
    const btnDeleteP = getByTestId('1-deleteProd');
    fireEvent.click(btnDeleteP);
  });
});
