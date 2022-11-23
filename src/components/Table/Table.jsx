import React from "react";
import TableItem from "../TableItem/TableItem";
import styles from "./Table.module.css";

export default function Table(props) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th>#</th>
            <th>Title</th>
            <th>Price, USD</th>
            <th>Date and Time</th>
          </tr>
          {props.list.map((item) => (
            <TableItem item={item} key={item.id} />
          ))}
        </thead>
      </table>
    </div>
  );
}
