import React from 'react';

function Categories({ firstItem, items }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">{firstItem}</li>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
