import React from 'react';
import classNames from 'classnames';

function MyButton({ className, children, outline, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={classNames('button', className, {
          'button--outline': outline,
        })}
      >
        {children}
      </button>
    </div>
  );
}

export default MyButton;
