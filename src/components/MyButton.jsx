import React from 'react';
import classNames from 'classnames';

function MyButton({ className, children, onClick, payBtn, outline }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={classNames('button', className, {
          'button--outline': outline,
          'pay-btn': payBtn,
        })}
      >
        {children}
      </button>
    </div>
  );
}

export default MyButton;
