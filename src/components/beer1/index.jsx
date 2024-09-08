import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import beer1 from "../../data/beer.json";

import buy from "../../assets/svg/card.svg";

export default function Beerpage() {
  return (
    <div className={style.container}>
      <div className={style.beer}>
        <h1>Пиво</h1>
      </div>

      <div className={style.beers_container}>
        <div className={style.upbeer}>
          {beer1.map((v, i) => (
            <div key={i} className={style.beer_border}>
              <div className={style.beer_container}>
                <a href=''>
                  <img src={v.img} />
                </a>
                <div className={style.text_container}>
                  <div className={style.h1_beer}>
                    <a href=''>{v.name}</a>
                  </div>

                  <div className={style.about_beer}>
                    <div className={style.about_beeer}>
                      <div className={style.about_beer_up}>
                        <p>{v.option1}</p>
                      </div>
                      <div className={style.about_beer_down}>
                        <p>{v.alc}</p>
                        <p>{v.og}</p>
                        <p>{v.ibu}</p>
                      </div>
                    </div>
                    <div className={style.option}>
                      <p>0.5L</p>
                    </div>
                  </div>

                  <div className={style.beer_price}>
                    <p>{v.price}</p>
                    <img src={buy} className={style.buy} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.beers_change}>
        <div className={style.act_change}>
          <p>1</p>
        </div>
        <Link to={"/beer2"}>
          <div className={style.unact_change}>
            <p>2</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
