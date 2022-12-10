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
            <span className={styles.span}>Final:</span> Fecha 13/12/22
          </h1>
          <h1>
            <span className={styles.span}>Profesores:</span> Martín Barea y
            Esteban Frare
          </h1>
          <h1>
            <span className={styles.span}>Alumnos:</span> Julian Gomez - Andrés
            López
          </h1>
        </article>
      </section>
    </>
  );
};
export default Home;
