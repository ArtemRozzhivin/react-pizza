import axios from 'axios';

export const setLoaded = (value) => ({
  type: 'SET_LOADED',
  payload: value,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  console.log();
  dispatch(setLoaded(false));
  axios
    .get(
      `pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
