import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginView from "./screems/LoginView/LoginView";
import Layout from "./screems/LayoutView/Layout.";
import AboutView from "./screems/AboutView/AboutView";


function App() {
  return (
      <Layout>
          <Routes>
              <Route path="/" element={<LoginView />} />
              <Route path="/about" element={<AboutView />} />
          </Routes>
          <div className="App"></div>
      </Layout>

  );
}

export default App;
