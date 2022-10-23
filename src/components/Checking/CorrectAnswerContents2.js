import React, { useContext } from "react";
import VerseContext from "../../store/verses-context";

import Card from "../UI/Card";

import styles from "./CorrectAnswerContents2.module.css";

const CorrectAnswerContents2 = () => {
  const verseCtx = useContext(VerseContext);

  return (
    <Card>
      <div className={styles.label}>
        <label // 제목
          className={`${styles.labelTitle} ${
            verseCtx.chapverseResponse.title.correct
              ? styles.labelTitle_Correct
              : styles.labelTitle_Wrong
          }`}
          type="text"
        >
          {verseCtx.chapverseResponse.title.result}
        </label>
      </div>
      <div className={styles.label}>
        <label className={styles.labelChapVerse}>
          {verseCtx.checkingInfoResponse[0].chapverse}
        </label>
      </div>
      <div className={styles.label}>
        <label // 내용
          className={styles.labelContent}
        >
          {verseCtx.checkingInfoResponse[0].contents}
        </label>
      </div>
      <div className={styles.label}>
        <label className={styles.labelTheme}>
          {verseCtx.checkingInfoResponse[0].theme}
        </label>
      </div>
    </Card>
  );
};

export default CorrectAnswerContents2;