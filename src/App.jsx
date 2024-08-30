import React from "react";
import style from "./style.module.scss";
import Mainpage from "./pages/main-page/index.jsx";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Mainpage />
    </BrowserRouter>
  );
}
