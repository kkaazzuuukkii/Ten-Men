import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

import b1 from "../../assets/png/nineth.png";
import b2 from "../../assets/png/second.png";
import b3 from "../../assets/png/third.png";
import b4 from "../../assets/png/fourth.png";
import b5 from "../../assets/png/nineth.png";
import b6 from "../../assets/png/sixth.png";
import b7 from "../../assets/png/seventh.png";
import b8 from "../../assets/png/eights.png";
import buy from "../../assets/svg/card.svg";

export default function Beerpage() {
  const beer1 = [
    {
      name: "Tomato and Pepper",
      img: b1,
      option1: "Sore Fruited Gose",
      alc: "ALC. 4%",
      og: "OG: 12,5%",
      ibu: "IBU:12",
      price: "116 UAN",
    },
    {
      name: "Lingonberry and Orange",
      img: b2,
      option1: "Sore Fruited Gose",
      alc: "ALC. 4.6%",
      og: "OG: 16%",
      ibu: "IBU:12",
      price: "116 UAN",
    },
    {
      name: "Raspberry and White chocolate",
      img: b3,
      option1: "Sore Fruited Gose",
      alc: "ALC. 4.6%",
      og: "OG: 16%",
      ibu: "IBU:12",
      price: "124 UAN",
    },
    {
      name: "Hazelnut edition",
      img: b4,
      option1: "Brown Porter",
      alc: "ALC. 5.7%",
      og: "OG: 16.5%",
      ibu: "IBU:25",
      price: "110 UAN",
    },
  ];

  const beer2 = [
    {
      name: "TEN MEN IPA",
      img: b5,
      option1: "IPA WEST COAST",
      alc: "ALC. 6%",
      og: "OG: 15%",
      ibu: "IBU:50",
      price: "109 UAN",
    },
    {
      name: "Black currant Cheesecake",
      img: b6,
      option1: "Pastry Sour Fruited",
      alc: "ALC. 4%",
      og: "OG: 16,5%",
      ibu: "IBU:12",
      price: "109 UAN",
    },
    {
      name: "DRIVE&DIVE",
      img: b7,
      option1: "IPA East Coast",
      alc: "ALC. 5.2%",
      og: "OG: 5%",
      ibu: "IBU:0",
      price: "109 UAN",
    },
    {
      name: "MOLOKO STOUT",
      img: b8,
      option1: "Milk Stout",
      alc: "ALC. 5.2%",
      og: "OG: 18%",
      ibu: "IBU:18",
      price: "109 UAN",
    },
  ];
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
                <img src={v.img} />
                <div className={style.text_container}>
                  <div className={style.h1_beer}>
                    <p>{v.name}</p>
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
        {[...Array(2)].map((v, i) => (
          <div key={i} className={style.middlebeer}>
            {beer2.map((v, i) => (
              <div key={i} className={style.beer_border}>
                <div className={style.beer_container}>
                  <img src={v.img} />
                  <div className={style.text_container}>
                    <div className={style.h1_beer}>
                      <p>{v.name}</p>
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
                      <div className={style.option_opt}>
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
        ))}
      </div>

      <div className={style.beers_change}>
        <Link to={"/beer"}>
          <div className={style.unact_change}>
            <p>1</p>
          </div>
        </Link>
        <div className={style.act_change}>
          <p>2</p>
        </div>
      </div>
    </div>
  );
}
