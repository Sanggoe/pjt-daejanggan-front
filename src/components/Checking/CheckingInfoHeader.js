import React, { useContext } from "react";
import VerseContext from "../../store/verses-context";

import styles from "./CheckingInfoHeader.module.css";

const CheckingInfoHeader = () => {
  const verseCtx = useContext(VerseContext);

  return (
    <div className={styles.header}>
      <div className={styles.type}>
        <label className={styles.label}>{verseCtx.checkingProcessInfo.currentVerse.verseType ? "장절" : "내용"}</label>
      </div>
      <div className={styles.order}>
        <label className={styles.label}>
          {verseCtx.checkingProcessInfo.currentVerse.index+1} / {verseCtx.checkingProcessInfo.numberOfVerse.total}
        </label>
      </div>
    </div>
  );
};

export default CheckingInfoHeader;
