import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginView from "./screems/LoginView/LoginView";
import Layout from "./screems/LayoutView/Layout.";
import AboutView from "./screems/AboutView/AboutView";
import ProductsView from "./screems/ProductsView/ProductsView";
import PublicView from "./screems/PublicPage/PublicView";
import Dashboard from "./screems/DashboardView/Dashboard";
import Home from "./components/Home/Home";
import PublicDates from "./screems/PublicDates/PublicDates";
import { useSelector } from "react-redux";

function App() {
  const { isLogged } = useSelector((state) => state.isLog);
  console.log("isLogged", isLogged);
  return (
    <Layout>
      <Routes>
        {/* Rutas publicas: */}
        <Route path="/" element={<PublicView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/publicDates" element={<PublicDates />} />

        {/* Rutas privadas: */}
        <Route
          path="dashboard"
          element={isLogged ? <Dashboard /> : <LoginView />}
        >
          <Route path="home" element={<Home />} />
          <Route path="products" element={<ProductsView />} />
        </Route>
        <Route path="*" element={<h1>Page-not-found-404</h1>}></Route>
      </Routes>
      <div className="App"></div>
    </Layout>
  );
}

export default App;
