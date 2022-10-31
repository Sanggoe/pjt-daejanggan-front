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
            verseCtx.checkingContentsResponse.inputTitleIsCorrect
              ? styles.labelTitle_Correct
              : styles.labelTitle_Wrong
          }`}
          type="text"
        >
          {verseCtx.checkingContentsResponse.correctTitle}
        </label>
      </div>
      <div className={styles.label}>
        <label className={styles.labelChapVerse}>
          {verseCtx.checkingProcessInfo.currentVerse.chapverse}
        </label>
      </div>
      <div className={styles.label}>
        <label // 내용
          className={styles.labelContent}
        >
          {verseCtx.checkingContentsResponse.correctContents}
        </label>
      </div>
      <div className={styles.label}>
        <label className={styles.labelTheme}>
          {verseCtx.checkingProcessInfo.currentVerse.theme}
        </label>
      </div>
      {/* {console.log(verseCtx.checkingContentsResponse)} */}
    </Card>
  );
};

export default CorrectAnswerContents2;
