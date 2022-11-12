import React from "react";
import { Form } from "react-router-dom";
import ButtonShared from "../../components/sharedButton";
import InputShared from "../../components/sharedInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = ({ style }) => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();

  const checkField = false;

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
          name={"userName"}
          register={register}
          required
          styleshare={style.form}
        />
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
