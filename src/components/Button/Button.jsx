import React from "react";
import styles from "./Button.module.css";

export default function Button({ title, theme, action }) {
  return (
    <button className={styles[theme]} onClick={action}>
      {title}
    </button>
  );
}
