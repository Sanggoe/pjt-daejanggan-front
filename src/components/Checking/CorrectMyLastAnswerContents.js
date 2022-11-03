import React, { useContext } from "react";
import VerseContext from "../../store/verses-context";

import Card from "../UI/Card";

import styles from "./CorrectMyLastAnswerContents.module.css";

const CorrectMyLastAnswerContents = () => {
  const verseCtx = useContext(VerseContext);

  return (
    <Card>
      <div className={styles.label}>
        <label className={styles.labelInfo}>{"내 직전 제출 구절"}</label>
      </div>
      <div className={styles.input}>
        <label className={styles.labelContent}>
          {verseCtx.checkingContentsResponse.inputContents
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
                    : styles.unchecked
                }
                key={word + i}
              >
                {word.substring(0, word.length - 4)}
              </label>
            ))}
        </label>
      </div>
    </Card>
  );
};

export default CorrectMyLastAnswerContents;
