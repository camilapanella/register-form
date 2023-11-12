import React from "react";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.brand}>
          <img
            className={styles.brandImage}
            src="https://flexy.com.ar/assets/LogoFlexy-1f6f0bb3.svg"
            alt=""
          />
        </div>
        <div className={styles.bgImage}></div>
        <div className={styles.navBtn}>
        <label className={styles.label}>
          <span className={styles.span}></span>
          <span className={styles.span}></span>
        </label>
      </div>
      </nav>

    </div>
  );
}
