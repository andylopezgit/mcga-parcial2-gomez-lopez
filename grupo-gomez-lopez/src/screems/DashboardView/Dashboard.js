import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";
import styles from "./index.module.css";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className={styles.main}>
          <Outlet />
        </div>
        <Footer pass={styles.footer} />
      </div>
    </>
  );
};

export default Dashboard;
