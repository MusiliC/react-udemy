/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import styles from "./components/PageNav.module.css"



const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route  path="/app" element={<AppLayout />}  />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />\
          <Route path="login" className = {styles.ctaLink} element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
