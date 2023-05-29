import { createStore, combineReducers } from 'redux';

import { cartReducer, categoriesReducer, productsReducer } from './reducers';

const rootReducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default createStore(rootReducers);
