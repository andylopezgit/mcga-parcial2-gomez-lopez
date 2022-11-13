import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="container">{/*    ACa vampos a meter el nav*/}</div>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Dashboard;
