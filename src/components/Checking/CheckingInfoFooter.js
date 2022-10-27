import React, { useState } from "react";

import Button from "../UI/Button";

import styles from './CheckingInfoFooter.module.css'

const CheckingInfoFooter = () => {
  const [hint, setHint] = useState(0);

  const setHintHandler = () => {
    setHint(hint + 1);
  }

  return (
    <div className={styles.footer}>
      <div className={styles.infoArea}>
        <div className={styles.divArea}>
          <Button styles={styles.hintButton} type="button" onClick={setHintHandler}>
            힌트
          </Button>
          <label className={styles.info}>{hint}</label>
        </div>
        <div className={styles.divArea}>
          <Button styles={styles.button} type="button">
            감점
          </Button>
          <label className={styles.label}></label>
          <label className={styles.info}>{-hint}</label>
        </div>
        <div className={styles.divArea}>
          <Button styles={styles.button} type="button">
            점수
          </Button>
          <label className={styles.info}>{10 - hint}</label>
        </div>
      </div>
    </div>
  );
}

export default CheckingInfoFooter;