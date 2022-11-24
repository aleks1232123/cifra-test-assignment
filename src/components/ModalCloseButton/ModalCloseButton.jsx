import React from "react";
import styles from "./ModalCloseButton.module.css";

export default function ModalCloseButton({ clearAndToggleModal }) {
  return (
    <div className={styles.closeModal} onClick={clearAndToggleModal}></div>
  );
}
