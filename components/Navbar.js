import React from "react";
import config from "../config";
import style from "../styles/Navbar.module.css";

export default function Navbar(props) {
  return (
    <div className={props.show ? style.navbar : style.navbarHide}>
      <h6 className={style.navbarTitle}>
        {config.site.name}
      </h6>
      {config.links.map((link, index) => (
        <a className={style.link} href={link.link} key={index} target="_blank" rel="noreferrer">
          <p className={style.linkItem}>
            {link.text}
          </p>
        </a>
      ))}
    </div>
  )
}
