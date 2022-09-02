import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPizzas, setLoaded } from '../redux/actions/pizzas';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { setPizzaToCart } from '../redux/actions/cart';

const itemsCategory = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const itemsSortPopup = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const { items, isLoaded, category, sortBy } = useSelector(({ pizzas, filter }) => {
    return {
      items: pizzas.items,
      isLoaded: pizzas.isLoaded,
      category: filter.categories,
      sortBy: filter.sortBy,
    };
  });
  const { cartPizzas } = useSelector(({ cart }) => ({
    cartPizzas: cart.items,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCaterory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortBy = useCallback((index) => {
    dispatch(setSortBy(index));
  }, []);

  function onClickAddPizzaToCart(obj) {
    dispatch(setPizzaToCart(obj));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCaterory}
          items={itemsCategory}
        />
        <SortPopup
          activeSortType={sortBy.type}
          onClickItem={onSelectSortBy}
          items={itemsSortPopup}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza) => (
              <PizzaBlock
                onClickAddPizzaToCart={onClickAddPizzaToCart}
                addedToCart={cartPizzas[pizza.id] && cartPizzas[pizza.id].items.length}
                key={pizza.id}
                {...pizza}
              />
            ))
          : Array(4)
              .fill(0)
              .map((item, index) => (
                <div key={index} className="pizza-block__loading ">
                  <PizzaLoadingBlock />
                </div>
              ))}
      </div>
    </div>
  );
}

export default Home;
