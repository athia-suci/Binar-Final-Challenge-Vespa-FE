import React from "react";
import { render } from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import HomePublic from "./pages/HomePublic";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = document.getElementById("root");
render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePublic />} />
        <Route path="/homelogin" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </Provider>,
  root
);