import React from "react";
import styles from "./index.module.css";

const Home = () => {
  return (
    <>
      <section className={styles.section}>
        <article>
          <h1>
            <span className={styles.span}>Materia:</span> MCGA
          </h1>
          <h1>
            <span className={styles.span}>Parcial:</span>2°
          </h1>
          <h1>
            <span className={styles.span}>Profesores:</span> Martin y Esteban
          </h1>
          <h1>
            <span className={styles.span}>Alumnos:</span> Julian Gomez - Andres
            Lopez
          </h1>
        </article>
      </section>
    </>
  );
};
export default Home;
