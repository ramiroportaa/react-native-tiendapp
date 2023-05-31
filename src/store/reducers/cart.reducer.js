import { PRODUCTS } from '../../data/products';
import { cartTypes } from '../types';

const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

// Función para generar un número aleatorio dentro de un rango
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un mock de productos al azar sin repeticiones
function generateMockProducts(productsArray) {
  const mockProducts = [];
  const sampledIndexes = new Set();

  while (sampledIndexes.size < 5) {
    const randomIndex = getRandomNumber(0, productsArray.length - 1);

    // Verifica si el índice ya ha sido muestreado
    if (!sampledIndexes.has(randomIndex)) {
      const product = productsArray[randomIndex];

      const mockProduct = {
        id: product.id,
        category: product.category,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        quantity: getRandomNumber(1, 10), // Genera una cantidad aleatoria entre 1 y 10
      };

      mockProducts.push(mockProduct);
      sampledIndexes.add(randomIndex);
    }
  }

  return mockProducts;
}

// Genera el mock de productos al azar sin repeticiones
const mockProducts = generateMockProducts(PRODUCTS);

// Función para eliminar un producto por ID del array y devuelve un nuevo carrito.
function deleteProductById(idProd, cart) {
  const updatedCart = cart.filter((product) => product.id !== idProd);
  console.warn('Producto eliminado correctamente');
  return updatedCart;
}

// Función para agregar un producto por ID al array y devuelve un nuevo carrito.
function addProductById(idProd, cart) {
  const productInCart = cart.find((product) => product.id === idProd);
  if (productInCart) {
    const updatedCart = cart.map((product) => {
      if (product.id === idProd) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    console.warn('Producto agregado correctamente');
    return updatedCart;
  } else {
    const product = PRODUCTS.find((product) => product.id === idProd);
    cart.push({ ...product, quantity: 1 });
    console.warn('Producto agregado correctamente');
    return cart;
  }
}

const sumarTotal = (cartArray) => {
  const total = cartArray.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
  return total;
};

const initialState = {
  data: mockProducts,
  total: sumarTotal(mockProducts),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const cart = addProductById(action.productId, state.data);
      return {
        ...state,
        data: [...cart],
        total: sumarTotal(cart),
      };
    }
    case REMOVE_FROM_CART: {
      const cart = deleteProductById(action.productId, state.data);
      return {
        ...state,
        data: cart,
        total: sumarTotal(cart),
      };
    }
    case CONFIRM_ORDER: {
      return {
        ...state,
        data: [],
        total: 0,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
