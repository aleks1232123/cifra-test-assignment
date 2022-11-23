import React from "react";
import Button from "../Button/Button";
import styles from "./ModalWindow.module.css";

export default function Modal({toggleModal, addNewTableItem, modal}) {
  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalContent}>
            <h2>New Item</h2>
            <form>
              <label for="fname">Title</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
              <label for="fname">Price</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
              <label for="fname">Date and Time</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
            </form>
            <button className={styles.closeModal} onClick={toggleModal}>
              CLOSE
            </button>
            <Button title='Add Item' theme='addItemBtn' action={addNewTableItem} />
          </div>
        </div>
      )}
    </>
  );
}
