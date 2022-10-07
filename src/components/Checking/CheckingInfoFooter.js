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
            한 어절 보기
          </Button>
          <label className={styles.info}>{hint}회</label>
        </div>
        <div className={styles.divArea}>
          <label className={styles.label}>감점</label>
          <label className={styles.info}>-{hint + 1}</label>
        </div>
        <div className={styles.divArea}>
          <label className={styles.label}>점수</label>
          <label className={styles.info}>{10+10-hint}</label>
        </div>
      </div>
    </div>
  );
}

export default CheckingInfoFooter;