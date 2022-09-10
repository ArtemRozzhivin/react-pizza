import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ items, onClickItem, activeCategory }) {
  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              onClick={() => onClickItem(index)}
              className={activeCategory === index ? 'active' : ''}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func,
};

Categories.defaultProps = { items: [], activeCategory: null };

export default Categories;
