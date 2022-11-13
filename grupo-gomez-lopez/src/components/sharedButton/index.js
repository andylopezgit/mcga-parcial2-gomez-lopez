import React from 'react';

const ButtonShared = ({ text, Click, styleshare, type }) => {
  return (
    <input type={type} onClick={Click} className={styleshare} value={text} />
  );
};

export default ButtonShared;
