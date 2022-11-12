import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginView from "./screems/LoginView/LoginView";
import Layout from "./screems/LayoutView/Layout.";
import AboutView from "./screems/AboutView/AboutView";
import ProductsView from "./screems/ProductsView/ProductsView";
import PublicView from "./screems/PublicPage/PublicView";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PublicView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/products" element={<ProductsView />} />
        **<Route path="*" element={<h1>Page-not-found-404</h1>}></Route>**
      </Routes>
      <div className="App"></div>
    </Layout>
  );
}

export default App;
