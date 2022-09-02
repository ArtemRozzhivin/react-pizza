const initialState = {
  categories: null,
  sortBy: {
    name: 'популярности',
    type: 'rating',
    order: 'desc',
  },
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default filters;
