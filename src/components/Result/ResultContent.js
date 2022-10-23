import React from "react";

import styles from "./ResultContent.module.css"

const ResultContent = () => {
  
  const chapverse = "데살로니가전서 16:24";
  const minus = 0;
  const score = 10;

  const onChangeHandler = (e) => {
    console.log(e.target)
  }

  return (
    <>
      <div className={styles.labelArea}>
        <label className={styles.labelChapverse}>
          <input type="checkbox" defaultChecked onChange={onChangeHandler}/> {chapverse}
        </label>
        <label className={styles.labelMinus}>{minus}</label>
        <label className={styles.labelScore}>{score}</label>
      </div>
    </>
  );
};

export default ResultContent;
