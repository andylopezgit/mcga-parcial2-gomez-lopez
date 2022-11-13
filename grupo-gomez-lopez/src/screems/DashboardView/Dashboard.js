import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";
import styles from "./index.module.css";

const Dashboard = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
