import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/png/main.png";
import down from "../../assets/svg/down.svg";
import card from "../..//assets/svg/card.svg";

export default function Header() {
  const [langIsOp, changeLagIsOp] = useState();

  const langOpen = () => {
    changeLagIsOp(!langIsOp);
  };

  return (
    <div className={style.container}>
      <div className={style.left_container}>
        <Link to={"/beer"}>ПИВО</Link>
        <a href=''>ПРАВИЛА ГРИ</a>
        <Link to={"/souvenirs"}>СУВЕНІРИ</Link>

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
        <span className={style.language_cont} onClick={langOpen}>
          <p>УКР</p>
          <img src={down} />
        </span>
        <div className={langIsOp ? style.lang : style.lang_no}>
          <p>УКР</p>
        </div>
      </div>
      <img src={card} className={style.shop} />
    </div>
  );
}
