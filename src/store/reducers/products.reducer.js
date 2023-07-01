import { PRODUCTS } from '../../data/products';
import { productsTypes } from '../types';

const { SELECT_PRODUCT, GET_PRODUCTS } = productsTypes;
const initialState = {
  data: PRODUCTS,
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        data: action.products,
      };
    }
    case SELECT_PRODUCT: {
      return {
        ...state,
        selected: state.data.find((product) => product.id === action.productId),
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
