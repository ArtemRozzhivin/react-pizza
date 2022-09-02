export const setPizzaToCart = (pizzaObj) => ({
  type: 'SET_PIZZA_CART',
  payload: pizzaObj,
});

export const setClearCart = () => ({
  type: 'SET_CLEAR_CART',
});

export const setRemovePizzas = (id) => ({
  type: 'SET_REMOVE_PIZZAS',
  payload: id,
});

export const setPlusPizza = (id) => ({
  type: 'SET_PLUS_PIZZA',
  payload: id,
});

export const setMinusPizza = (id) => ({
  type: 'SET_MINUS_PIZZA',
  payload: id,
});
