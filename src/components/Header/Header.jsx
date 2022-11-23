import React from 'react';
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <p>STOCK</p>
        <p>CENTER</p>
      </div>
      <div>
        Items In Stock
      </div>
      <div className={styles.headerSections}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}
