import React from "react";
import { Form } from "react-router-dom";
import ButtonShared from "../../components/sharedButton";
import InputShared from "../../components/sharedInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const validUser = { userName: "grupo", password: "1234" };
    if (data.userName === "grupo" && data.password === "1234") {
      navigate("/products");
    } else {
      console.log("datos erroneos");
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputShared
          type="text"
          placeholder="usuario"
          name={"userName"}
          register={register}
          required
        />
        <InputShared
          type="password"
          placeholder="password"
          name={"password"}
          register={register}
        />
        <ButtonShared text="Login" type={"submit"} />
      </form>
    </>
  );
};

export default Login;
