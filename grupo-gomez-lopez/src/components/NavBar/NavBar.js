import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";

import { setIsLoadingFalse } from "../../redux/Auth/actions";

const NavBar = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const cleanLocalStorage = () => {
    localStorage.removeItem("isLoggin");
  };

  const logout = () => {
    dispatch(setIsLoadingFalse(dispatch));
    cleanLocalStorage();
    navigator("/");
  };

  return (
    <nav className={styles.nav}>
      <div>
        <span>MCGA - 2022 - </span>
        <span> Grupo: Lopez - Gomez</span>
      </div>
      <div className={styles.navR}>
        <ul>
          <li>
            <Link to="/dashboard/home">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
        </ul>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </nav>
  );
};

export default NavBar;
