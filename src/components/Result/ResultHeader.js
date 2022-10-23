import React from "react";

import styles from "./ResultHeader.module.css";

const ResultHeader = () => {
  const date = new Date();
  const todayInfo =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const total = 73;
  const selected = 10;
  return (
    <>
      <div className={styles.header}>
        <label className={styles.label}>{todayInfo}</label>
        <label className={styles.label}>
          {total}구절 중 {selected}구절
        </label>
      </div>
    </>
  );
};

export default ResultHeader;