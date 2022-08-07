import React, { useState } from 'react';

function Categories({ firstItem, items }) {
  const [activeItem, setActiveItem] = useState(null);

  function changeActiveItem(index) {
    setActiveItem(index);
  }

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => changeActiveItem(null)}>
          {firstItem}
        </li>
        {items &&
          items.map((item, index) => (
            <li
              onClick={() => changeActiveItem(index)}
              className={activeItem === index ? 'active' : ''}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
