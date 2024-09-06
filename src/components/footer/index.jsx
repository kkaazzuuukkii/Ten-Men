import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

import social1 from "../../assets/svg/right social1.svg";
import social2 from "../../assets/svg/right social2.svg";
import social3 from "../../assets/svg/right social3.svg";
import visa from "../../assets/svg/Visa.svg";
import mastercard from "../../assets/svg/Mastercard.svg";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.container2}>
        <div className={style.link}>
          <Link to='/beer'>ПИВО</Link>
          <a href=''>ПРАВИЛА ГРИ</a>
          <Link to={"/souvenirs"}>СУВЕНІРИ</Link>
          <a href=''>ОПЛАТА І ДОСТАВКА</a>
          <a href=''>ПРО БРОВАРНЮ</a>
          <a href=''>КРАУТФАНДИНГ</a>
          <a href=''>КОНТАКТИ</a>
        </div>
        <div className={style.telephone}>
          <a href='+380969173032' className={style.phone}>
            +380 (96) 917-30-32
          </a>
          <a href='https://untappd.com/TenMenBrewery' target='_blank'>
            <img src={social1} />
          </a>
          <a href='https://www.instagram.com/ten_men_brewery/' target='_blank'>
            <img src={social2} />
          </a>
          <a href='https://www.facebook.com/tenmen.beer/' target='_blank'>
            <img src={social3} />
          </a>
        </div>
        <div className={style.payment}>
          <img src={visa} />
          <img src={mastercard} />
        </div>
      </div>
    </div>
  );
}
