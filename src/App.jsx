import React from "react";
import style from "./style.module.scss";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Main from "./pages/main";
import Beer from "./pages/beer";
import Beer2 from "./pages/beer2";
import Souvenir from "./pages/souvenirs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path=''></Route>
        <Route element={<Beer />} path='/beer'></Route>
        <Route element={<Beer2 />} path='/beer2'></Route>
        <Route element={<Souvenir />} path='/souvenirs'></Route>
      </Routes>
    </BrowserRouter>
  );
}
