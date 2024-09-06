import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

import beer from "../../assets/png/beer.png";

export default function Main() {
  return (
    <div className={style.container}>
      <div className={style.center}>
        <img src={beer} className={style.beer} />
        <Link to='/beer'>
          <button>МАГАЗИН</button>
        </Link>
      </div>
    </div>
  );
}
