import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <span>MCGA - 2022 - </span>
        <span> Grupo: Lopez - Gomez</span>
      </div>
      <div className={styles.navR}>
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
        </ul>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default NavBar;
