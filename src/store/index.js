import { createStore, combineReducers } from 'redux';

import { categoriesReducer } from './reducers';

const rootReducers = combineReducers({
  categories: categoriesReducer,
});

export default createStore(rootReducers);
