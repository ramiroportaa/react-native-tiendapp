import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { cartReducer, categoriesReducer, orderReducer, productsReducer } from './reducers';

const rootReducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
});

export default createStore(rootReducers, applyMiddleware(thunk));
