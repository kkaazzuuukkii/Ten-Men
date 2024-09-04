import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

import logo from "../../assets/png/main.png";
import down from "../../assets/svg/down.svg";
import card from "../..//assets/svg/card.svg";

export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.left_container}>
        <Link to={"/beer"}>ПИВО</Link>
        <a href=''>ПРАВИЛА ГРИ</a>
        <a href=''>СУВЕНІРИ</a>
        <a href=''>ОПЛАТА І ДОСТАВКА</a>
      </div>
      <Link to={"/"}>
        <img src={logo} className={style.logo} />
      </Link>
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
