import React, { useContext } from "react";
import VerseContext from "../../store/verses-context";

import Button from "../UI/Button";

import styles from './CheckingInfoFooter.module.css'

const CheckingInfoFooter = () => {
  const verseCtx = useContext(VerseContext);

  const setHintHandler = () => {
    if (verseCtx.checkingProcessInfo.currentVerse.verseType === "내용") {
      verseCtx.increaseCurrentHint();
    }
  }

  return (
    <div className={styles.footer}>
      <div className={styles.infoArea}>
        <div className={styles.divArea}>
          <Button
            styles={
              verseCtx.checkingProcessInfo.currentVerse.verseType === "내용"
                ? styles.hintButton
                : styles.hintButtonDisabled
            }
            type="button"
            onClick={setHintHandler}
          >
            힌트
          </Button>
          <label className={styles.info}>
            {verseCtx.checkingProcessInfo.currentScoreInfo.currentHint}
          </label>
        </div>
        <div className={styles.divArea}>
          <Button styles={styles.button} type="button">
            감점
          </Button>
          <label className={styles.label}></label>
          <label className={styles.info}>
          {-verseCtx.checkingProcessInfo.currentScoreInfo.currentMinus}
          </label>
        </div>
        <div className={styles.divArea}>
          <Button styles={styles.button} type="button">
            점수
          </Button>
          <label className={styles.info}>
            {verseCtx.checkingProcessInfo.resultScore.totalScore}
          </label>
        </div>
      </div>
    </div>
  );
}

export default CheckingInfoFooter;