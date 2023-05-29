import { cartTypes } from '../types';
const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

export const addProductById = (id) => ({
  type: ADD_TO_CART,
  productId: id,
});

export const deleteProductById = (id) => ({
  type: REMOVE_FROM_CART,
  productId: id,
});

export const confirmOrder = (cart, total) => ({
  type: CONFIRM_ORDER,
});
