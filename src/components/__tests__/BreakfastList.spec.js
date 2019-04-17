import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import BreakfastList from '../BreakfastList';

describe('BreakfastList', () => {
  beforeEach(cleanup);

  it('Filtra data con categoria "desayuno"', () => {
    const data = [
      {
        id: 1, item: 'item 1', precio: 0, categoria: 'desayuno',
      },
      {
        id: 2, item: 'item 2', precio: 0, categoria: 'resto',
      },
      {
        id: 3, item: 'item 3', precio: 0, categoria: 'desayuno',
      },
    ];
    const { getByTestId } = render(<BreakfastList data={data} />);
    const container = getByTestId('button-container');
    expect(container.children).toHaveLength(2);
  });

  it('Ejecuta funcion al hacer click en item', () => {
    const data = [
      {
        id: 1, item: 'item 1', precio: 0, categoria: 'desayuno',
      },
      {
        id: 2, item: 'item 2', precio: 0, categoria: 'desayuno',
      },
    ];
    const addPedido = (elem) => {
      expect(elem).toEqual(data[0]);
    };
    const { getByTestId } = render(<BreakfastList data={data} addPedido={addPedido} />);
    const button = getByTestId('1-button');
    fireEvent.click(button);
  });

  it('Muestra mensaje de cargando', () => {
    const { getByTestId } = render(<BreakfastList isLoading />);
    const message = getByTestId('loading-message');
    expect(message.textContent).toBe('Loading ...');
  });

  it('Muestra mensaje de error', () => {
    const { getByTestId } = render(<BreakfastList isError />);
    const messageE = getByTestId('error-message');
    expect(messageE.textContent).toBe('Something went wrong ...');
  });
});

