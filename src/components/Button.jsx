import React from 'react'

const Button = ({btnText="Add", btnClass=""}) => {
    return (
      <button
        className={`bg-white text-primary py-2 rounded-lg ${btnClass}`}
      >
        {btnText}
      </button>
    );
  };

export default Button