import React from "react";
import styles from "./index.module.css";
import logoReact from "../../../src/assets/logo192.png";
import logoNode from "../../../src/assets/Node.js_logo.svg";
import { useNavigate } from "react-router-dom";

function PublicView() {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/login");
  };

  const goToPublicDates = () => {
    navigate("/publicDates");
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>MCGA 2022</h1>
          <div>
            <button onClick={onLogin} id={styles.btnLogin}>
              Login
            </button>
            <button id={styles.btnLogin} onClick={goToPublicDates}>
              Public dates
            </button>
          </div>
        </header>
        <section className={styles.section}>
          <article className={styles.article}>
            <h2>Proyecto realizado en React.js + Node.js</h2>
            <h2>FINAL - MCGA</h2>
            <div className={styles.layoutLogos}>
              <img
                className={styles.logoReact}
                src={logoReact}
                alt="logo-react"
              />

              <img className={styles.logoNode} src={logoNode} alt="logo-node" />
            </div>
          </article>
        </section>
        <footer>
          Alumnos: - Andres Lopez - Gomez Julian - Ing. En Sistemas de
          Información - UAI
        </footer>
      </div>
    </React.Fragment>
  );
}

export default PublicView;
