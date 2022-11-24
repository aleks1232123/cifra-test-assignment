import React, { useState } from "react";
import Button from "../Button/Button";
import ModalCloseButton from "../ModalCloseButton/ModalCloseButton";
import styles from "./ModalWindow.module.css";

export default function Modal({ toggleModal, addNewTableItem, modal }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [titleError, setTitleError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [dateTimeError, setDateTimeError] = useState("");

  const addItemButtonHandler = () => {
    let errorCounter = 0;
    if (!title) {
      setTitleError("Title field can not be empty");
      errorCounter++;
    } else {
      setTitleError("");
    }
    if (!price) {
      setPriceError("Price field can not be empty");
      errorCounter++;
    } else if (isNaN(Number(price))) {
      setPriceError("Price is not a number");
      errorCounter++;
    } else {
      setPriceError("");
    }
    if (!dateTime) {
      setDateTimeError("Date & Time field can not be empty");
      errorCounter++;
    } else {
      setDateTimeError("");
    }
    console.log(errorCounter);
    if (errorCounter) return;
    else {
      addNewTableItem({
        title,
        price,
        dateTime,
      });
      clearAndToggleModal();
    }
  };

  const clearAndToggleModal = () => {
    setTitle("");
    setPrice("");
    setDateTime("");
    setTitleError("");
    setPriceError("");
    setDateTimeError("");
    toggleModal();
  };

  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <div onClick={clearAndToggleModal} className={styles.overlay}></div>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>New Item</h2>
            </div>
            <form>
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Add Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              {titleError && (
                <div
                  style={{
                    color: "red",
                    position: "absolute",
                    bottom: "275px",
                  }}
                >
                  {titleError}
                </div>
              )}
              <label>Price</label>
              <input
                type="text"
                name="price"
                placeholder="Add Price..."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
              {priceError && (
                <div
                  style={{
                    color: "red",
                    position: "absolute",
                    bottom: "170px",
                  }}
                >
                  {priceError}
                </div>
              )}
              <label>Date and Time</label>
              <input
                type="datetime-local"
                name="datetime"
                placeholder="Add Date and Time..."
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              ></input>
              {dateTimeError && (
                <div
                  style={{ color: "red", position: "absolute", bottom: "65px" }}
                >
                  {dateTimeError}
                </div>
              )}
            </form>
            <ModalCloseButton clearAndToggleModal={clearAndToggleModal} />
            <div className={styles.addBtnContainer}>
              <Button
                title="Add Item"
                theme="addItemBtn"
                action={() => addItemButtonHandler()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
