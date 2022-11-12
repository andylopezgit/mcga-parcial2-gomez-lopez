import React from "react";
import LoginComponent from "../../components/Login/Login";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginComponent style={styles} />
    </div>
  );
};

export default Login;
