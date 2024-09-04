import React from "react";
import style from "./style.module.scss";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Main from "./pages/main";
import Beer from "./pages/beer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path=''></Route>
        <Route element={<Beer />} path='/beer'></Route>
      </Routes>
    </BrowserRouter>
  );
}
