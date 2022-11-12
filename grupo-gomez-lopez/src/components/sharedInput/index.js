import React from "react";
import { useForm } from "react-hook-form";

const InputShared = ({
  placeholder,
  styleshare,
  type,
  register,
  name,
  required,
}) => {
  return (
    <input
      type={type}
      className={styleshare}
      placeholder={placeholder}
      {...register(name, { required })}
    />
  );
};

export default InputShared;
