import { createStore, combineReducers } from 'redux';

import { categoriesReducer, productsReducer } from './reducers';

const rootReducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

export default createStore(rootReducers);
