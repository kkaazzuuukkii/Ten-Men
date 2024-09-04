import React from "react";
import style from "./style.module.scss";

import beer from "../../assets/png/beer.png";

export default function Main() {
  return (
    <div className={style.container}>
      <div className={style.center}>
        <img src={beer} className={style.beer} />
        <button>МАГАЗИН</button>
      </div>
    </div>
  );
}
