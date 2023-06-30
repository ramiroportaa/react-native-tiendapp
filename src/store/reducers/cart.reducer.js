import { cartTypes } from '../types';

const { LOAD_CART, ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

const sumarTotal = (cartArray) => {
  const total = cartArray.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);
  return total;
};

const initialState = {
  data: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART: {
      const cart = action.items;
      return {
        ...state,
        data: [...cart],
        total: sumarTotal(cart),
      };
    }
    case ADD_TO_CART: {
      const cart = action.items;
      return {
        ...state,
        data: [...cart],
        total: sumarTotal(cart),
      };
    }
    case REMOVE_FROM_CART: {
      const cart = action.items;
      return {
        ...state,
        data: cart,
        total: sumarTotal(cart),
      };
    }
    case CONFIRM_ORDER: {
      return {
        ...state,
        data: action.isConfirm ? [] : state.data,
        total: action.isConfirm ? 0 : state.total,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
