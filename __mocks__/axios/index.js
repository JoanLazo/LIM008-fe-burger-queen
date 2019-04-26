import { act } from 'react-testing-library';

export default url => console.log('desde dentro del mock de axios') || ({
  then: jest.fn(callback => act(() => {
    callback([
      {
        id: 1,
        item: 'café americano',
        precio: 5,
        categoria: 'desayuno',
        url: 'https://github.com/JanetGM/LIM008-fe-burger-queen/blob/devJanet/src/img/cafeamericano.jpg?raw=true'
      },
      {
        id: 2,
        item: 'Café con leche',
        precio: 7,
        categoria: 'desayuno',
        url: 'http://myvegieplace.com/wp-content/uploads/2015/05/cafe-leche.jpg'
      },
    ]);
  })),
});
