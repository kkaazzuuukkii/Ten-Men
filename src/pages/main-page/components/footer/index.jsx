import React from "react";
import style from "./style.module.scss";

import social1 from "../../../../assets/main/svg/right social1.svg";
import social2 from "../../../../assets/main/svg/right social2.svg";
import social3 from "../../../../assets/main/svg/right social3.svg";
import visa from "../../../../assets/main/svg/Visa.svg";
import mastercard from "../../../../assets/main/svg/Mastercard.svg";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.container2}>
        <div className={style.link}>
          <a href=''>ПИВО</a>
          <a href=''>ПРАВИЛА ГРИ</a>
          <a href=''>СУВЕНІРИ</a>
          <a href=''>ОПЛАТА І ДОСТАВКА</a>
          <a href=''>ПРО БРОВАРНЮ</a>
          <a href=''>КРАУТФАНДИНГ</a>
          <a href=''>КОНТАКТИ</a>
        </div>
        <div className={style.telephone}>
          <a href='+380969173032'>+380 (96) 917-30-32</a>
          <a href=''>
            <img src={social1} />
          </a>
          <a href=''>
            <img src={social2} />
          </a>
          <a href=''>
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
