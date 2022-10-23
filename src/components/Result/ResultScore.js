import React from "react";

import styles from "./ResultScore.module.css"

const ResultScore = () => {
  
  return (
    <>
      <div className={styles.lableArea}>
        <label className={styles.labelTitle}>총&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;점</label>
        <label className={styles.labelScore}>{"91점"}</label>
      </div>
      <div className={styles.lableArea}>
        <label className={styles.labelTitle}>100점 환산</label>
        <label className={styles.labelScore}>{"91점"}</label>
      </div>
    </>
  );
};

export default ResultScore;
