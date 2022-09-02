import { combineReducers } from 'redux';

import filter from './filters';
import pizzas from './pizzas';
import cart from './cart';

const rootReducer = combineReducers({
  filter,
  pizzas,
  cart,
});

export default rootReducer;
