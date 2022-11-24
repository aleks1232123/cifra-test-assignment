import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ clearTableList }) {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLogo}>
        STOCK<br></br>
        CENTER
      </div>
      <div className={styles.navbarPageInfo} onClick={clearTableList}>
        <b>Items In Stock</b>
      </div>
      <div className={styles.navbarBurgerMenu}>
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="40px"
          height="40px"
        >
          <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z" />
        </svg>
      </div>
    </div>
  );
}
