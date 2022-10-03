import React from "react";

import Button from "../UI/Button";

import styles from './CheckingInfoFooter.module.css'

const CheckingInfoFooter = () => {
    return (
      <div className={styles.footer}>
        <Button styles={styles.hintButton} type="button" onClick={null}>
          한 어절 보기
        </Button>
        <div className={styles.infoDisabled}>
          <label className={styles.label}>감점</label>
        </div>
        <div className={styles.info}>
          <label className={styles.label}>점수</label>
        </div>
      </div>
    );
}

export default CheckingInfoFooter;