import React from "react";
import styles from './TableItem.module.css'

export default function TableItem({item}) {
  return (
    <tr className={styles.tableItem}>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>{item.date}</td>
    </tr>
  );
}
