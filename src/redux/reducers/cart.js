const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);

const getAllPizzas = (objectItem) => {
  const arrItems = Object.values(objectItem).map((obj) => obj.items);
  return [].concat.apply([], arrItems);
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZA_CART': {
      const idCountPizzas = state.items[action.payload.id]
        ? [...state.items[action.payload.id].items, action.payload]
        : [action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: idCountPizzas,
          totalPrice: getTotalPrice(idCountPizzas),
        },
      };

      const allPizzas = getAllPizzas(newItems);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: getTotalPrice(allPizzas),
      };
    }

    case 'SET_CLEAR_CART':
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };

    case 'SET_REMOVE_PIZZAS':
      const cloneItems = { ...state.items };
      const currentPrice = cloneItems[action.payload].totalPrice;
      const currentCount = cloneItems[action.payload].items.length;

      delete cloneItems[action.payload];

      return {
        items: cloneItems,
        totalPrice: state.totalPrice - currentPrice,
        totalCount: state.totalCount - currentCount,
      };

    case 'SET_PLUS_PIZZA': {
      const newItemId = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      const newItem = {
        ...state.items,
        [action.payload]: {
          items: newItemId,
          totalPrice: getTotalPrice(newItemId),
        },
      };

      const allPizzas = getAllPizzas(newItem);

      return {
        items: newItem,
        totalPrice: getTotalPrice(allPizzas),
        totalCount: allPizzas.length,
      };
    }

    case 'SET_MINUS_PIZZA': {
      const oldItems = state.items[action.payload].items;
      const newItemId = oldItems.length > 1 ? [...oldItems.slice(1)] : oldItems;

      const newItem = {
        ...state.items,
        [action.payload]: {
          items: newItemId,
          totalPrice: getTotalPrice(newItemId),
        },
      };

      const allPizzas = getAllPizzas(newItem);

      return {
        items: newItem,
        totalPrice: getTotalPrice(allPizzas),
        totalCount: allPizzas.length,
      };
    }

    default:
      return state;
  }
};

export default pizzas;
