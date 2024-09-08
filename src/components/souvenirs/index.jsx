import React from "react";
import style from "./style.module.scss";
import souvenir from "../../data/souvenir.json";

import buy from "../../assets/svg/card.svg";

export default function Souvenirs() {
  return (
    <div className={style.container}>
      <div className={style.h1}>
        <h1>СУВЕНІРИ</h1>
      </div>

      <div className={style.souvenir_list}>
        {souvenir.map((v, i) => (
          <div key={i} className={style.border}>
            <div className={style.cont}>
              <a href=''>
                <img src={v.img} />
              </a>
              <div className={style.about}>
                <div className={style.name}>
                  <a href=''>
                    ФУТБОЛКА WE ARE TEN MEN IN BREWERY КОЛЬОРУ {v.name}
                  </a>
                </div>
                <div className={style.size}>
                  <p>S, M, L, XL, XXL</p>
                </div>
                <div className={style.buy}>
                  <a href=''>
                    <img src={buy} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
