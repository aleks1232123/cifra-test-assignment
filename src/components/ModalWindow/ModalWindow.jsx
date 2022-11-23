import React, { useRef } from "react";
import Button from "../Button/Button";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
import styles from "./ModalWindow.module.css";

export default function Modal({ toggleModal, addNewTableItem, modal }) {
  // if (modal) {
  //   document.body.classList.add("active-modal");
  // } else {
  //   document.body.classList.remove("active-modal");
  // }

  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const dateTimeInputRef = useRef();

  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>New Item</h2>
            </div>
            <form>
              <label>Title</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Add Title..."
                ref={titleInputRef}
              ></input>
              <label>Price</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Add Price..."
                ref={priceInputRef}
              ></input>
              <label>Date and Time</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Add Date and Time..."
                ref={dateTimeInputRef}
              ></input>
            </form>
            {/* <button className={styles.closeModal} onClick={toggleModal}>
              CLOSE
            </button> */}
            <ModalCloseButton toggleModal={toggleModal}/>
            <Button
              title="Add Item"
              theme="addItemBtn"
              action={() => addNewTableItem({titleInputRef, priceInputRef, dateTimeInputRef})}
            />
          </div>
        </div>
      )}
    </>
  );
}
