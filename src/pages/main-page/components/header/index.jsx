import React from "react";
import style from "./style.module.scss";

import logo from "../../../../assets/main/main.png";
import down from "../../../../assets/main/svg/down.svg";
import card from "../../../../assets/main/svg/card.svg";

export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.left_container}>
        <a href=''>ПИВО</a>
        <a href=''>ПРАВИЛА ГРИ</a>
        <a href=''>СУВЕНІРИ</a>
        <a href=''>ОПЛАТА І ДОСТАВКА</a>
      </div>
      <img src={logo} className={style.logo} />
      <div className={style.right_container}>
        <a href=''>ПРО БРОВАРНЮ</a>
        <a href=''>КРАУТФНДИНГ</a>
        <a href=''>КОНТАКТИ</a>
      </div>
      <div className={style.language}>
        <p>УКР</p>
        <img src={down} />
      </div>
      <img src={card} className={style.shop} />
    </div>
  );
}
