import React, { useContext } from "react";
import VerseContext from "../../store/verses-context";

import Card from "../UI/Card";

import styles from "./CorrectAnswerContents1.module.css";

const CorrectAnswerContents1 = () => {
  const verseCtx = useContext(VerseContext);

  return (
    <Card>
      <div className={styles.label}>
        <label // 제목
          className={`${styles.labelTitle} ${
            verseCtx.checkingChapverseResponse.inputTitleIsCorrect
              ? styles.labelTitle_Correct
              : styles.labelTitle_Wrong
          }`}
          type="text"
        >
          {verseCtx.checkingChapverseResponse.correctTitle}
        </label>
      </div>
      <div className={styles.label}>
        <label // 성경
          className={`${styles.labelChapterName} ${
            verseCtx.checkingChapverseResponse.inputChapterNameIsCorrect
              ? styles.labelChapterName_Correct
              : styles.labelChapterName_Wrong
          }`}
          type="text"
        >
          {verseCtx.checkingChapverseResponse.correctChapterName}
        </label>
        <label // 장
          className={`${styles.labelChapter} ${
            verseCtx.checkingChapverseResponse.inputChapterIsCorrect
              ? styles.labelChapter_Correct
              : styles.labelChapter_Wrong
          }`}
          type="text"
        >
          {verseCtx.checkingChapverseResponse.correctChapter}
        </label>
        <label>
          <b>:</b>
        </label>
        <label // 절
          className={`${styles.labelChapter} ${
            verseCtx.checkingChapverseResponse.inputVerseIsCorrect
              ? styles.labelChapter_Correct
              : styles.labelChapter_Wrong
          }`}
          type="text"
        >
          {verseCtx.checkingChapverseResponse.correctVerse}
        </label>
      </div>
      <div className={styles.label}>
        <label // 내용
          className={styles.labelContent}
        >
          {verseCtx.checkingProcessInfo.currentVerse.contents}
        </label>
      </div>
      <div className={styles.label}>
        <label className={styles.labelTheme}>
          {verseCtx.checkingProcessInfo.currentVerse.theme}
        </label>
      </div>
    </Card>
  );
};

export default CorrectAnswerContents1;
