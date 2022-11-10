import React from 'react';
import { Form } from 'react-router-dom';

const InputShared = ({ placeholder, styleshare, type, register, name }) => {
  return (
    <input
      type={type}
      className={styleshare}
      placeholder={placeholder}
      {...register(name)}
    />
  );
};

export default InputShared;
