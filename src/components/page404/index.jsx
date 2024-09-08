import React from "react";
import style from "./style.module.scss";

import beer from "../../assets/png/beer.png";

export default function Page404() {
  return (
    <>
      <div className={style.container}>
        <div className={style.center}>
          <img src={beer} className={style.beer} />
          <div className={style.text}>
            <h1>404 PAGE NOT FOUND</h1>
            <p>
              Мережа перегружена і сторінка не знайдена, будь ласка
              перезагрузіть сайт, або перейдіть в інший розділ
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
