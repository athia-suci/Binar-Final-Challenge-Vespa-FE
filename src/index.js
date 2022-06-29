import React from "react";
import { render } from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import InfoProduct from "./pages/InfoProduct";
import CreateProduct from "./pages/CreateProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = document.getElementById("root");
render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/produk" element={<ProductPage />} />
        <Route path="/infoproduk" element={<InfoProduct />} />
        <Route path="/buatproduk" element={<CreateProduct />} />
      </Routes>
    </Router>
  </Provider>,
  root
);