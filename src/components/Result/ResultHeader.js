import React, { useContext } from "react";
import VerseContext from "../../store/verses-context";

import styles from "./ResultHeader.module.css";

const ResultHeader = () => {
  const verseCtx = useContext(VerseContext);

  return (
    <>
      <div className={styles.header}>
        <label className={styles.label}>
          {verseCtx.checkingProcessInfo.checkingTime}
        </label>
        <label className={styles.label}>
          {verseCtx.checkingProcessInfo.numberOfVerse.total}구절 중{" "}
          {verseCtx.checkingProcessInfo.numberOfVerse.selected}구절
        </label>
      </div>
    </>
  );
};

export default ResultHeader;