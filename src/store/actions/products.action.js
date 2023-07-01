import { FIREBASE_REALTIME_DB_URL } from './../../constants/firebase';
import { productsTypes } from '../types';
const { SELECT_PRODUCT, GET_PRODUCTS } = productsTypes;

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});

export const getProducts = (categoryId) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${FIREBASE_REALTIME_DB_URL}/products.json?orderBy="category"&equalTo=${categoryId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      const products = Object.keys(json).map((key) => ({ ...json[key], id: key }));
      dispatch({ type: GET_PRODUCTS, products });
    } catch (error) {
      console.log(error);
    }
  };
};
