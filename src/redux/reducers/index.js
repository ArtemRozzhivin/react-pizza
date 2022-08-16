import { combineReducers } from 'redux';

import filterReducers from './filters';
import pizzaReducers from './pizzas';

const rootReducer = combineReducers({
  filter: filterReducers,
  pizzas: pizzaReducers,
});

export default rootReducer;
