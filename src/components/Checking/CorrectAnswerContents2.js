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
          {verseCtx.checkingContentsResponse.correctContents
            .split(" ")
            .map((word, i) => (
              <label
                className={
                  word.substring(word.length - 4, word.length) === "633w"
                    ? styles.labelWrong
                    : word.substring(word.length - 4, word.length) === "633i"
                    ? styles.labelInvert
                    : word.substring(word.length - 4, word.length) === "633m"
                    ? styles.labelMiss
                    : word.substring(word.length - 4, word.length) === "633a"
                    ? styles.labelAdded
                    : word.substring(word.length - 4, word.length) === "633r"
                    ? styles.labelRight
                    : word.substring(word.length - 4, word.length) === "633h"
                    ? styles.labelHint
                    : word.substring(word.length - 4, word.length) === "633u"
                    ? styles.labelUnchecked
                    : word.substring(word.length - 4, word.length) === "633v"
                    ? styles.labelVerified
                    : word.substring(word.length - 4, word.length) === "633c"
                    ? styles.labelCovered
                    : null
                }
                key={word + i}
              >
                {word.substring(0, word.length - 4)}
              </label>
            ))}
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
