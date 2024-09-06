import React from "react";
import style from "./style.module.scss";

import souvenir from "../../assets/png/souvenir.png";
import souvenir1 from "../../assets/png/souvenir2.png";
import souvenir2 from "../../assets/png/souvenir3.png";
import souvenir3 from "../../assets/png/souvenir4.png";
import buy from "../../assets/svg/card.svg";

export default function Souvenirs() {
  const souvenirs = [
    {
      name: "БЕЖЕВА",
      img: souvenir,
    },
    {
      name: "ФІОЛЕТОВА",
      img: souvenir1,
    },
    {
      name: "PORTER",
      img: souvenir2,
    },
    {
      name: "PINK",
      img: souvenir3,
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.h1}>
        <h1>СУВЕНІРИ</h1>
      </div>

      <div className={style.souvenir_list}>
        {souvenirs.map((v, i) => (
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
