import React from 'react';
import styles from './ModalCloseButton.module.css'

export default function ModalCloseButton({toggleModal}) {
  return (
    <div className={styles.closeModal} onClick={toggleModal}>
    </div>
  )
}
