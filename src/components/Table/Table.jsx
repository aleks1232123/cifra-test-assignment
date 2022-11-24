import React from "react";
import TableItem from "../TableItem/TableItem";
import styles from "./Table.module.css";

export default function Table({ list }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th style={{ width: "10%" }}>#</th>
            <th style={{ width: "40%" }}>Title</th>
            <th style={{ width: "20%" }}>Price, USD</th>
            <th style={{ width: "30%" }}>Date and Time</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <TableItem item={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
