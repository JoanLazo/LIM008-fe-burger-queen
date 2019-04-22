import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import RestList from '../RestList';

describe('RestList', () => {
  beforeEach(cleanup);

  it('Filtra data con categoria "resto del día"', () => {
    const data = [
      {
        id: 1, item: 'item 1', precio: 0, categoria: 'desayuno', url: 'http://akipan.es',
      },
      {
        id: 2, item: 'item 2', precio: 0, categoria: 'resto del día', url: 'http://akipan.es',
      },
      {
        id: 3, item: 'item 3', precio: 0, categoria: 'desayuno', url: 'http://akipan.es',
      },
    ];
    const { getByTestId } = render(<RestList data={data} />);
    const container = getByTestId('button-container-rest');
    expect(container.children).toHaveLength(1);
  });

  it('Ejecuta funcion al hacer click en item', () => {
    const data = [
      {
        id: 1, item: 'item 1', precio: 0, categoria: 'resto del día', url: 'http://akipan.es',
      },
      {
        id: 2, item: 'item 2', precio: 0, categoria: 'resto del día', url: 'http://akipan.es',
      },
    ];
    const addPedido = (elem) => {
      expect(elem).toEqual(data[0]);
    };
    const { getByTestId } = render(<RestList data={data} addPedido={addPedido} />);
    const button = getByTestId('1-button-rest');
    fireEvent.click(button);
  });

  it('Muestra mensaje de cargando', () => {
    const { getByTestId } = render(<RestList isLoading />);
    const message = getByTestId('loading-message-rest');
    expect(message.textContent).toBe('Loading ...');
  });

  it('Muestra mensaje de error', () => {
    const { getByTestId } = render(<RestList isError />);
    const messageE = getByTestId('error-message-rest');
    expect(messageE.textContent).toBe('Something went wrong ...');
  });
});
