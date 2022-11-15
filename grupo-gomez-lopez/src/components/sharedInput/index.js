import React from "react";
import { useForm } from "react-hook-form";

const InputShared = ({
  placeholder,
  styleshare,
  type,
  register,
  name,
  required,
  max,
  pattern,
}) => {
  return (
    <input
      type={type}
      className={styleshare}
      placeholder={placeholder}
      {...register(name, {
        required: required,
        maxLength: max,
        pattern: pattern,
      })}
    />
  );
};

export default InputShared;
