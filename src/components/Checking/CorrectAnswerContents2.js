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
          className={`${styles.labelHead} ${
            verseCtx.chapverseResponse.head.correct
              ? styles.labelHead_Correct
              : styles.labelHead_Wrong
          }`}
          type="text"
        >
          {verseCtx.chapverseResponse.head.result}
        </label>
      </div>
      <div className={styles.label}>
        <label // 성경
          className={`${styles.labelChapterName} ${
            verseCtx.chapverseResponse.chapterName.correct
              ? styles.labelChapterName_Correct
              : styles.labelChapterName_Wrong
          }`}
          type="text"
        >
          {verseCtx.chapverseResponse.chapterName.result}
        </label>
        <label // 장
          className={`${styles.labelChapter} ${
            verseCtx.chapverseResponse.chapter.correct
              ? styles.labelChapter_Correct
              : styles.labelChapter_Wrong
          }`}
          type="text"
        >
          {verseCtx.chapverseResponse.chapter.result}
        </label>
        <label
          className={`${styles.labelChapter} ${
            verseCtx.chapverseResponse.verse.correct
              ? styles.labelChapter_Correct
              : styles.labelChapter_Wrong
          }`}
          type="text"
        >
          {verseCtx.chapverseResponse.verse.result}
        </label>
      </div>
      <div className={styles.label}>
        <label>{verseCtx.checkingVerseInfos[0].contents}</label>
      </div>
    </Card>
  );
};

export default CorrectAnswerContents2;