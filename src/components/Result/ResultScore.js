import React from "react";

import styles from "./ResultScore.module.css"

const ResultScore = (props) => {
  
  return (
    <>
      <div className={styles.lableArea}>
        <label className={styles.labelTitle}>총&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;점</label>
        <label className={styles.labelScore}>{props.resultScore.totalScore}</label>
      </div>
      <div className={styles.lableArea}>
        <label className={styles.labelTitle}>100점 환산</label>
        <label className={styles.labelScore}>{props.resultScore.transformScore}</label>
      </div>
    </>
  );
};

export default ResultScore;
