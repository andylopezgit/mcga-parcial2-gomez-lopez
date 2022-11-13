import React from "react";
import { Form } from "react-router-dom";
import ButtonShared from "../../components/sharedButton";
import InputShared from "../../components/sharedInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = ({ style }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const pattern = /^[A-Za-z]+$/i;
  const navigate = useNavigate();

  console.log(watch("userName"));

  const checkField = false;

  const userName = "userName";

  const onSubmit = (data) => {
    const validUser = { userName: "grupo", password: "1234" };
    if (data.userName === "grupo" && data.password === "1234") {
      navigate("/products");
    } else {
      this.checkField = true;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <InputShared
          type="text"
          placeholder="usuario"
          name={userName}
          register={register}
          required={true}
          max={5}
          styleshare={style.form}
          pattern={pattern}
        />
        {errors?.userName?.type === "maxLength" && (
          <p>El usuario no puede exceder 5 caracteres</p>
        )}
        {errors?.userName?.type === "pattern" && <p>No se permiten numero</p>}
        <InputShared
          type="password"
          placeholder="password"
          name={"password"}
          register={register}
          styleshare={style.form}
        />
        <ButtonShared text="Login" type={"submit"} styleshare={style.btn} />
        {checkField ? <p>Errones</p> : <p></p>}
      </form>
    </>
  );
};

export default Login;
